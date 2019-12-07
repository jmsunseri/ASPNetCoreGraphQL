 
using GraphQL;
using GraphQL.Types;
using GraphQL.Utilities;
using System;

namespace NHLStats.Players.Data.GraphQL
{
    public class PlayerSchema : Schema
    {
        public PlayerSchema(IServiceProvider provider) : base(provider)
        {
            Query = provider.GetRequiredService<PlayerQuery>();
            Mutation = provider.GetRequiredService<PlayerMutation>();
        }
    }
}


 