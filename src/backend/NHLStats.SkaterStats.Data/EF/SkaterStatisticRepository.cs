
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using NHLStats.Data;

namespace NHLStats.SkaterStats.Data.EF
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
            .Where(ss => ss.PlayerId == playerId)?.ToListAsync();
        }

        public async Task<SkaterStatisticTotals> GetCareerStats(int playerId)
        {
            return await _db.SkaterStatistics
            .Where(ss => ss.PlayerId == playerId)
            .GroupBy(c => c.PlayerId)
            .Select(g => g != null && g.Count() > 0 ?  new SkaterStatisticTotals() { 
                    PlayerId = playerId, 
                    GamesPlayed = g.Sum(a => a.GamesPlayed),
                    Goals = g.Sum(a => a.Goals),
                    Assists = g.Sum(a => a.Assists),
                    Points =g.Sum(a => a.Points),
                    PlusMinus = g.Sum(a => a.PlusMinus != null ? a.PlusMinus : 0 )
                    } : new SkaterStatisticTotals() { PlayerId = playerId } 
                    )?.SingleOrDefaultAsync();
        }

        public async Task<IEnumerable<SkaterStatisticTotals>> GetAllCareerStats()
        {
            return await _db.SkaterStatistics
            .GroupBy(c => c.PlayerId)
            .Select(g => new SkaterStatisticTotals() { 
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
