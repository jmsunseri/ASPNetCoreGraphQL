
using System.Collections.Generic;
using System.Threading.Tasks;
using NHLStats.Core.Models;

namespace NHLStats.Core.Data
{
    public interface ILeagueRepository
    {
        Task<League> Get(int id);
        Task<List<League>> All();
        Task<League> Add(League league);
    }
}
