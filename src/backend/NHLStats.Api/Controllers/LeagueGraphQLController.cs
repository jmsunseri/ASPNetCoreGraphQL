

using GraphQL;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Mvc;
using NHLStats.Api.Models;
using NHLStats.Leagues.Data.GraphQL;
using System;
using System.Threading.Tasks;

namespace NHLStats.Api.Controllers
{
    [Route("league/graphql")] 
    public class LeagueGraphQLController : Controller
    {
        private readonly IDocumentExecuter _documentExecuter;
        private readonly LeagueSchema _leagueSchema;

        public LeagueGraphQLController(LeagueSchema leagueSchema, IDocumentExecuter documentExecuter)
        {
            _leagueSchema = leagueSchema;
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
                Schema = _leagueSchema,
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
