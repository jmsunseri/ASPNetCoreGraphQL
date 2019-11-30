 
 
 using GraphQL.Types;
using NHLStats.Api.Helpers;
using NHLStats.Core.Models;

namespace NHLStats.Api.Models
{
    public class SkaterStatisticTotalsType : ObjectGraphType<SkaterStatisticTotals>
    {
        public SkaterStatisticTotalsType(ContextServiceLocator contextServiceLocator)
        {
            Field(x => x.Player.Name).Name("player");
            Field(x => x.PlayerId);
            Field(x => x.Goals);
            Field(x => x.Assists);
            Field(x => x.Points);
            Field(x => x.PenaltyMinutes);
            Field<IntGraphType>("plusMinus", resolve: context => context.Source.PlusMinus);
            Field(x => x.GamesPlayed);
          }
    }
}

 
