
using System.Collections.Generic;
using System.Threading.Tasks;
using NHLStats.Core.Models;

namespace NHLStats.Players
{
    public interface IPlayerRepository
    {
        Task<Player> Get(int id);

        Task<int> Delete(int id);
        Task<Player> GetRandom();
        Task<PagedList<Player>> All(int pageSize, int page);
        Task<Player> Add(Player player);
        Task<PagedList<Player>> Get(string playerName, int pageSize = 5, int page = 1);
    }
}
