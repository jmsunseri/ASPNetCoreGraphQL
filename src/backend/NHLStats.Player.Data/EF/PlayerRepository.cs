
 
using System;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using NHLStats.Data;
using NHLStats.Core.Models;

namespace NHLStats.Players.Data.EF
{
    public class PlayerRepository : IPlayerRepository
    {
        private readonly NHLStatsContext _db;

        public PlayerRepository(NHLStatsContext db)
        {
            _db = db;
        }

        public async Task<Player> Get(int id)
        {
            return await _db.Players.FirstOrDefaultAsync(p => p.Id == id);
        }

        public async Task<int> Delete(int id)
        {
            _db.Entry(new Player(){ Id = id }).State = EntityState.Deleted;
            await _db.SaveChangesAsync();
            return id;
        }

        public async Task<PagedList<Player>> Get(string playerName, int pageSize = 5, int page = 1)
        {
            playerName = playerName.ToUpper();

            return  await _db.Players
            .Where(p => p.Name.ToUpper().Contains(playerName))
            .GroupBy(p => true)
            .Select(g => new PagedList<Player>() { 
                TotalPages = Convert.ToInt32(Math.Ceiling(g.Count() / Convert.ToDouble(pageSize))),
                Enumerable = g.OrderBy(x => x.Id).Skip((page -1) * pageSize).Take(pageSize)
                } )
            .SingleAsync();
        }

        public async Task<Player> GetRandom()
        {
            return await _db.Players.OrderBy(o => Guid.NewGuid()).FirstOrDefaultAsync();
        }

        public async Task<PagedList<Player>> All(int pageSize = 5, int page = 1)
        {
            return  await _db.Players
            .GroupBy(p => true)
            .Select(g => new PagedList<Player>() { 
                TotalPages = Convert.ToInt32(Math.Ceiling(g.Count() / Convert.ToDouble(pageSize))),
                Enumerable = g.OrderBy(x => x.Id).Skip((page -1) * pageSize).Take(pageSize)
                } )
            .SingleAsync();
        }

        public async Task<Player> Add(Player player)
        {
            await _db.Players.AddAsync(player);
            await _db.SaveChangesAsync();
            return player;
        }
    }
}
