
using GraphQL.Types;
using NHLStats.Api.Helpers;
using NHLStats.Core.Models;

namespace NHLStats.Api.Models
{
    public class LeagueType : ObjectGraphType<League>
    {
        public LeagueType(ContextServiceLocator contextServiceLocator)
        {
            Field(x => x.Id);
            Field(x => x.Name);
            Field(x => x.Abbreviation);
        }
    }
}
