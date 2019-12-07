using Microsoft.AspNetCore.Http;
using Microsoft.Extensions.DependencyInjection;


namespace NHLStats.Players.Data.EF
{

    public class PlayerServiceLocator
    {

        public IPlayerRepository PlayerRepository => _httpContextAccessor.HttpContext.RequestServices.GetRequiredService<IPlayerRepository>();

        private readonly IHttpContextAccessor _httpContextAccessor;

        public PlayerServiceLocator(IHttpContextAccessor httpContextAccessor)
        {
            _httpContextAccessor = httpContextAccessor;
        }
    }
}
