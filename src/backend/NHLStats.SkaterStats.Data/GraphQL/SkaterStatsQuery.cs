using GraphQL.Types;
using NHLStats.SkaterStats.Data.EF;

namespace NHLStats.SkaterStats.Data.GraphQL
{
    public class SkaterStatsQuery : ObjectGraphType
    {
        public SkaterStatsQuery(SkaterStatsServiceLocator contextServiceLocator)
        {           
            
            Field<ListGraphType<SkaterStatisticTotalsType>>(
                "playersCareerStats",
                resolve: context => contextServiceLocator.SkaterStatsRepository.GetAllCareerStats());

            Field<SkaterStatisticTotalsType>(
                "playerCareerStats",
                arguments: new QueryArguments(new QueryArgument<IntGraphType> { Name = "id" }),
                resolve: context => contextServiceLocator.SkaterStatsRepository.GetCareerStats(context.GetArgument<int>("id")));
        }
    }
}


 