﻿ 

using GraphQL.Types;
using NHLStats.Api.Helpers;
using NHLStats.Core.Models;

namespace NHLStats.Api.Models
{
    public class NHLStatsMutation : ObjectGraphType
    {
        public NHLStatsMutation(ContextServiceLocator contextServiceLocator)
        {
            Name = "PlayerMutation";

            Field<PlayerType>(
                "createPlayer",
                arguments: new QueryArguments(
                    new QueryArgument<NonNullGraphType<PlayerInputType>> { Name = "player" }
                ),
                resolve: context =>
                {
                    var player = context.GetArgument<Player>("player");
                    return contextServiceLocator.PlayerRepository.Add(player);
                });
            
            Field<IntGraphType>(
                "deletePlayer",
                arguments: new QueryArguments(
                    new QueryArgument<NonNullGraphType<IntGraphType>> { Name = "id" }
                ),
                resolve: context =>
                {
                    var id = context.GetArgument<int>("id");
                    return contextServiceLocator.PlayerRepository.Delete(id);
                });
        }
    }
}
