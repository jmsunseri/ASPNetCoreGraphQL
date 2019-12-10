

using GraphQL;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Mvc;
using NHLStats.Api.Models;
using NHLStats.Core.Models;
using NHLStats.Players.Data.GraphQL;
using System;
using System.Threading.Tasks;

namespace NHLStats.Api.Controllers
{
    [Route("hockey-player/graphql")] 
    public class PlayerGraphQLController : Controller
    {
        private readonly IDocumentExecuter _documentExecuter;
        private readonly GraphSchema<PlayerQuery,PlayerMutation> _playerSchema;

        public PlayerGraphQLController(GraphSchema<PlayerQuery,PlayerMutation> playerSchema, IDocumentExecuter documentExecuter)
        {
            _playerSchema = playerSchema;
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
                Schema = _playerSchema,
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
