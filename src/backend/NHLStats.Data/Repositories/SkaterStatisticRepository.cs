
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using NHLStats.Core.Data;
using NHLStats.Core.Models;

namespace NHLStats.Data.Repositories
{
    public class SkaterStatisticRepository : ISkaterStatisticRepository
    {
        private readonly NHLStatsContext _db;

        public SkaterStatisticRepository(NHLStatsContext db)
        {
            _db = db;
        }

        public async Task<List<SkaterStatistic>> Get(int playerId)
        {
            return await _db.SkaterStatistics.Include(ss=>ss.Season)
            .Include(ss=>ss.League)
            .Include(ss=>ss.Team)
            .Where(ss => ss.PlayerId == playerId).ToListAsync();
        }

        public async Task<SkaterStatisticTotals> GetCareerStats(int playerId)
        {
            return await _db.SkaterStatistics
            .Where(ss => ss.PlayerId == playerId)
            .GroupBy(c => c.PlayerId)
            .Select(g => new SkaterStatisticTotals() { 
                    Player = g.FirstOrDefault().Player,
                    PlayerId = playerId, 
                    GamesPlayed = g.Sum(a => a.GamesPlayed),
                    Goals = g.Sum(a => a.Goals),
                    Assists = g.Sum(a => a.Assists),
                    Points =g.Sum(a => a.Points),
                    PlusMinus = g.Sum(a => a.PlusMinus != null ? a.PlusMinus : 0 )
                    }).SingleAsync();
        }

        public async Task<IEnumerable<SkaterStatisticTotals>> GetAllCareerStats()
        {
            return await _db.SkaterStatistics
            .Include(ss => ss.Player)
            .GroupBy(c => c.PlayerId)
            .Select(g => new SkaterStatisticTotals() { 
                    Player = g.FirstOrDefault().Player,
                    PlayerId = g.Key, 
                    GamesPlayed = g.Sum(a => a.GamesPlayed),
                    Goals = g.Sum(a => a.Goals),
                    Assists = g.Sum(a => a.Assists),
                    Points =g.Sum(a => a.Points),
                    PlusMinus = g.Sum(a => a.PlusMinus != null ? a.PlusMinus : 0 )
                    }).ToArrayAsync();
        }
    }
}
