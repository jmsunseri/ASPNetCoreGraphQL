 
using NHLStats.Leagues.Data.GraphQL;
using GraphQL.Types;

namespace NHLStats.SkaterStats.Data.GraphQL
{
    public class SkaterStatisticType : ObjectGraphType<SkaterStatistic>
    {
        public SkaterStatisticType()
        {
            Field(x => x.Id);
            Field(x => x.SeasonId);
            Field(x => x.Season.Name).Name("season");
            Field(x => x.League.Abbreviation).Name("league");
            Field(x => x.Team.Name).Name("team");
            // graphql-dotnet can't currently automatically infer int16 so need to resolve manually
            Field(x => x.GamesPlayed);
            Field(x => x.Goals);
            Field(x => x.Assists);
            Field(x => x.Points); 
            // needed a resolver because it is a nullable int
            Field<IntGraphType>("plusMinus",
                resolve: context => context.Source.PlusMinus);

            Field<LeagueType>("leagueObject",
                resolve: context => context.Source.League);

        }
    }
}

 
