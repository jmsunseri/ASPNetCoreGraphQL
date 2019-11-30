
using GraphQL.Types;
using NHLStats.Api.Helpers;
using NHLStats.Core.Data;


namespace NHLStats.Api.Models
{
    public class NHLStatsQuery : ObjectGraphType
    {
        public NHLStatsQuery(ContextServiceLocator contextServiceLocator)
        {
            Field<PlayerType>(
                "player",
                arguments: new QueryArguments(new QueryArgument<IntGraphType> { Name = "id" }),
                resolve: context => contextServiceLocator.PlayerRepository.Get(context.GetArgument<int>("id")));

            Field<PlayerType>(
                "randomPlayer",
                resolve: context => contextServiceLocator.PlayerRepository.GetRandom());

            Field<ListGraphType<PlayerType>>(
                "players",
                resolve: context => contextServiceLocator.PlayerRepository.All());

            Field<ListGraphType<PlayerType>>(
                "playersByName",
                arguments: new QueryArguments(new QueryArgument<StringGraphType> { Name = "playerName" }),
                resolve: context => contextServiceLocator.PlayerRepository.Get(context.GetArgument<string>("playerName")));

             Field<ListGraphType<LeagueType>>(
                "leagues",
                resolve: context => contextServiceLocator.LeagueRepository.All());
            
            
            Field<ListGraphType<SkaterStatisticTotalsType>>(
                "playersCareerStats",
                resolve: context => contextServiceLocator.SkaterStatisticRepository.GetAllCareerStats());

            Field<SkaterStatisticTotalsType>(
                "playerCareerStats",
                arguments: new QueryArguments(new QueryArgument<IntGraphType> { Name = "id" }),
                resolve: context => contextServiceLocator.SkaterStatisticRepository.GetCareerStats(context.GetArgument<int>("id")));
        }
    }
}


 