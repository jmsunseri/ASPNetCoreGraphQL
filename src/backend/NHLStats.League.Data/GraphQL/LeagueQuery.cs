using GraphQL.Types;
using NHLStats.Leagues.Data.EF;

namespace NHLStats.Leagues.Data.GraphQL 
{
    public class LeagueQuery : ObjectGraphType
    {
        public LeagueQuery(LeagueServiceLocator contextServiceLocator)
        {
           
             Field<ListGraphType<LeagueType>>(
                "leagues",
                resolve: context => contextServiceLocator.LeagueRepository.All());

        }
    }
}


 