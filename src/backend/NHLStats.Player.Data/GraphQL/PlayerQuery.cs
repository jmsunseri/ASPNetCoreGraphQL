using GraphQL.Types;
using  NHLStats.Players.Data.EF;

namespace NHLStats.Players.Data.GraphQL
{
    public class PlayerQuery : ObjectGraphType
    {
        public PlayerQuery(PlayerServiceLocator contextServiceLocator)
        {
            Field<PlayerType>(
                "player",
                arguments: new QueryArguments(new QueryArgument<IntGraphType> { Name = "id" }),
                resolve: context => contextServiceLocator.PlayerRepository.Get(context.GetArgument<int>("id")));

            Field<PlayerType>(
                "randomPlayer",
                resolve: context => contextServiceLocator.PlayerRepository.GetRandom());

            Field<PlayerListType>(
                "playersList",
                arguments: new QueryArguments(
                    new QueryArgument<IntGraphType> { Name = "pageSize" }, 
                    new QueryArgument<IntGraphType> { Name = "page" }
                    ),
                resolve: context => contextServiceLocator.PlayerRepository.All(
                    context.GetArgument<int>("pageSize"), 
                    context.GetArgument<int>("page")));

            Field<PlayerListType>(
                "playersListByName",
                arguments: new QueryArguments(
                    new QueryArgument<StringGraphType> { Name = "playerName" },
                    new QueryArgument<IntGraphType> { Name = "pageSize" }, 
                    new QueryArgument<IntGraphType> { Name = "page" }
                    ),
                resolve: context => contextServiceLocator.PlayerRepository.Get(
                    context.GetArgument<string>("playerName"),
                    context.GetArgument<int>("pageSize"), 
                    context.GetArgument<int>("page")
                    ));
        }
    }
}


 