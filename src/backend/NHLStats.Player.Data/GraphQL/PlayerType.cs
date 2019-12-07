
using GraphQL.Types;
using NHLStats.SkaterStats.Data.GraphQL;
using NHLStats.SkaterStats.Data.EF;

namespace NHLStats.Players.Data.GraphQL
{
    public class PlayerType : ObjectGraphType<Player>
    {
        public PlayerType(SkaterStatsServiceLocator contextServiceLocator)
        {
            Field(x => x.Id);
            Field(x => x.Name, true);
            Field(x => x.BirthPlace);
            Field(x => x.Height);
            Field(x => x.WeightLbs);
            Field<StringGraphType>("birthDate", resolve: context => context.Source.BirthDate.ToShortDateString());
            Field<ListGraphType<SkaterStatisticType>>("skaterSeasonStats",
                arguments: new QueryArguments(new QueryArgument<IntGraphType> { Name = "id" }),
                resolve: context => contextServiceLocator.SkaterStatsRepository.Get(context.Source.Id), description: "Player's skater stats");
            Field<SkaterStatisticTotalsType>("careerStats",
                 resolve: context => contextServiceLocator.SkaterStatsRepository.GetCareerStats(context.Source.Id), description: "Player's career stats");
        }
    }
}
