
using GraphQL.Types;
using NHLStats.Core.Models;

namespace NHLStats.Players.Data.GraphQL
{
    public class PlayerListType : ObjectGraphType<PagedList<Player>>
    {
        public PlayerListType()
        {
            Field(x => x.TotalPages);
            Field<ListGraphType<PlayerType>>(name: "players", resolve: context => context.Source.Enumerable);
        }
    }
}
