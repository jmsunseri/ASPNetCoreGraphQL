
using GraphQL.Types;
using NHLStats.Core.Models;


namespace NHLStats.Players.Data.GraphQL
{
    public class PagedListType<T,G> : ObjectGraphType<PagedList<T>> where G : IObjectGraphType
    {
        public PagedListType()
        {
            Field(x => x.TotalPages);
            Field<ListGraphType<G>>(name: "items", resolve: context => context.Source.Enumerable);

        }
    }
}
