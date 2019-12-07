 
using GraphQL;
using GraphQL.Types;
using GraphQL.Utilities;
using System;

namespace NHLStats.SkaterStats.Data.GraphQL
{
    public class SkaterStatsSchema : Schema
    {

        public SkaterStatsSchema(IServiceProvider provider) : base(provider)
        {
            Query = provider.GetRequiredService<SkaterStatsQuery>();
        }
    }
}


 