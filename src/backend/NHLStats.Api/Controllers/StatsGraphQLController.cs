

using GraphQL;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Mvc;
using NHLStats.Api.Models;
using NHLStats.Leagues.Data.GraphQL;
using NHLStats.SkaterStats.Data.GraphQL;
using System;
using System.Threading.Tasks;
using NHLStats.Core.Models;

namespace NHLStats.Api.Controllers
{
    [Route("stats/graphql")] 
    public class StatsGraphQLController : Controller
    {
        private readonly IDocumentExecuter _documentExecuter;
        private readonly QueryGraphSchema<SkaterStatsQuery> _statsSchema;

        public StatsGraphQLController( QueryGraphSchema<SkaterStatsQuery> statsSchema, IDocumentExecuter documentExecuter)
        {
            _statsSchema = statsSchema;
            _documentExecuter = documentExecuter;
        }

        [HttpPost]
        [EnableCors("foo")]
        public async Task<IActionResult> Post([FromBody] GraphQLQuery query)
        {
            if (query == null) { throw new ArgumentNullException(nameof(query)); }
            var inputs = query.Variables.ToInputs();
            var executionOptions = new ExecutionOptions
            {
                Schema = _statsSchema,
                Query = query.Query,
                Inputs = inputs
            };

            var result = await _documentExecuter.ExecuteAsync(executionOptions).ConfigureAwait(false);

            if (result.Errors?.Count > 0)
            {
                return BadRequest(result);
            }

            return Ok(result);
        }
    }
}
