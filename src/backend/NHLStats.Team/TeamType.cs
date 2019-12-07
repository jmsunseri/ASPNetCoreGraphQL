
using GraphQL.Types;

namespace NHLStats.Teams
{
    public class TeamType : ObjectGraphType<Team>
    {
        public TeamType()
        {
            Field(x => x.Id);
            Field(x => x.Name);
            Field(x => x.Abbreviation);
        }
    }
}
