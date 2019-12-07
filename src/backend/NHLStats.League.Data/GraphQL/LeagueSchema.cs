 
using GraphQL;
using GraphQL.Types;
using GraphQL.Utilities;
using System;

namespace NHLStats.Leagues.Data.GraphQL
{
    public class LeagueSchema : Schema
    {
        public LeagueSchema(IServiceProvider provider): base(provider)
        {
            Query = provider.GetRequiredService<LeagueQuery>();
        }
    }
}


 