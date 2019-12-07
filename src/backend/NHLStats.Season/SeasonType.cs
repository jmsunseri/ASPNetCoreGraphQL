
using GraphQL.Types;

namespace NHLStats.Seasons
{
    public class SeasonType : ObjectGraphType<Season>
    {
        public SeasonType()
        {
            Field(x => x.Id);
            Field(x => x.Name, true);
        }
    }
}
