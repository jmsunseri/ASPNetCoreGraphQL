using System;
using GraphQL.Types;
using GraphQL.Utilities;

namespace NHLStats.Core.Models
{
    public class GraphSchema<Q,M> : Schema
        where Q : IObjectGraphType  
        where M : IObjectGraphType
    {
        public GraphSchema(IServiceProvider provider) : base(provider)
        {
            Query = provider.GetRequiredService<Q>();
            Mutation = provider.GetRequiredService<M>();
        }
        
    }

    public class QueryGraphSchema<Q> : Schema
        where Q : IObjectGraphType
    {
        public QueryGraphSchema(IServiceProvider provider) : base(provider)
        {
            Query = provider.GetRequiredService<Q>();
        }
        
    }

    public class MutationGraphSchema<M> : Schema
        where M : IObjectGraphType
    {
        public MutationGraphSchema(IServiceProvider provider) : base(provider)
        {
            Mutation = provider.GetRequiredService<M>();
        }
        
    }
}

