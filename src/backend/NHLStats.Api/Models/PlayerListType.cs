
using GraphQL.Types;
using NHLStats.Api.Helpers;
using NHLStats.Core.Models;

namespace NHLStats.Api.Models
{
    public class PlayerListType : ObjectGraphType<PagedList<Player>>
    {
        public PlayerListType(ContextServiceLocator contextServiceLocator)
        {
            Field(x => x.TotalPages);
            Field<ListGraphType<PlayerType>>(name: "players", resolve: context => context.Source.Enumerable);
        }
    }
}
