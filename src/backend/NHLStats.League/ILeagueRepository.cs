
using System.Collections.Generic;
using System.Threading.Tasks;

namespace NHLStats.Leagues
{
    public interface ILeagueRepository
    {
        Task<League> Get(int id);
        Task<List<League>> All();
        Task<League> Add(League league);
    }
}
