 
 
 using GraphQL.Types;

namespace NHLStats.SkaterStats.Data.GraphQL
{
    public class SkaterStatisticTotalsType : ObjectGraphType<SkaterStatisticTotals>
    {
        public SkaterStatisticTotalsType()
        {
            Field(x => x.PlayerId);
            Field(x => x.Goals);
            Field(x => x.Assists);
            Field(x => x.Points);
            Field(x => x.PenaltyMinutes);
             // needed a resolver because it is a nullable int
            Field<IntGraphType>("plusMinus",
                resolve: context => context.Source.PlusMinus);
            Field(x => x.GamesPlayed);
          }
    }
}

 
