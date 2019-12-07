
using System.Threading.Tasks;
using System.Collections.Generic;

namespace NHLStats.SkaterStats
{
    public interface ISkaterStatisticRepository
    {
        Task<List<SkaterStatistic>> Get(int playerId);

        Task<SkaterStatisticTotals> GetCareerStats(int playerId);

        Task<IEnumerable<SkaterStatisticTotals>> GetAllCareerStats();

    }
}
