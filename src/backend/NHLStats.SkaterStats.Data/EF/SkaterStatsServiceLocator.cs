using Microsoft.AspNetCore.Http;
using Microsoft.Extensions.DependencyInjection;


namespace NHLStats.SkaterStats.Data.EF
{

    public class SkaterStatsServiceLocator
    {

        public ISkaterStatisticRepository SkaterStatsRepository => _httpContextAccessor.HttpContext.RequestServices.GetRequiredService<ISkaterStatisticRepository>();

        private readonly IHttpContextAccessor _httpContextAccessor;

        public SkaterStatsServiceLocator(IHttpContextAccessor httpContextAccessor)
        {
            _httpContextAccessor = httpContextAccessor;
        }
    }
}
