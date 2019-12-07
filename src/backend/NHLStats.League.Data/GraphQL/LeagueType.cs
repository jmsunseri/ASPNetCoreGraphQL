
using GraphQL.Types;

namespace NHLStats.Leagues.Data.GraphQL
{
    public class LeagueType : ObjectGraphType<League>
    {
        public LeagueType()
        {
            Field(x => x.Id);
            Field(x => x.Name);
            Field(x => x.Abbreviation);
        }
    }
}
