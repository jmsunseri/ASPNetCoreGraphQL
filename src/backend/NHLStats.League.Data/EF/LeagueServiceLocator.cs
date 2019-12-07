using Microsoft.AspNetCore.Http;
using Microsoft.Extensions.DependencyInjection;


namespace NHLStats.Leagues.Data.EF
{

    public class LeagueServiceLocator
    {

        public ILeagueRepository LeagueRepository => _httpContextAccessor.HttpContext.RequestServices.GetRequiredService<ILeagueRepository>();

        private readonly IHttpContextAccessor _httpContextAccessor;

        public LeagueServiceLocator(IHttpContextAccessor httpContextAccessor)
        {
            _httpContextAccessor = httpContextAccessor;
        }
    }
}
