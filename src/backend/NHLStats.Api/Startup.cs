//using GraphiQl;
using GraphQL;
using GraphQL.Types;
using GraphQL.Http;
using GraphQL.Server;
using GraphQL.Server.Ui.Playground;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using NHLStats.Data;
using NHLStats.Leagues;
using NHLStats.Leagues.Data.EF;
using NHLStats.Leagues.Data.GraphQL;
using NHLStats.Players;
using NHLStats.Players.Data.EF;
using NHLStats.Players.Data.GraphQL;
using NHLStats.SkaterStats;
using NHLStats.SkaterStats.Data.EF;
using NHLStats.SkaterStats.Data.GraphQL;
using Swashbuckle.AspNetCore.Swagger;
using System.Linq;

namespace NHLStats.Api
{
    public class Startup
    {
        public Startup(IConfiguration configuration)
        {
            Configuration = configuration;
        }

        public IConfiguration Configuration { get; }

        // This method gets called by the runtime. Use this method to add services to the container.
        public void ConfigureServices(IServiceCollection services)
        {
            services.AddMvc().SetCompatibilityVersion(CompatibilityVersion.Version_2_2); ;
           
            services.AddHttpContextAccessor();
            services.AddSingleton<LeagueServiceLocator>();
            services.AddSingleton<PlayerServiceLocator>();
            services.AddSingleton<SkaterStatsServiceLocator>();
            services.AddDbContext<NHLStatsContext>(options => options.UseSqlServer(Configuration["ConnectionStrings:NHLStatsDb"]));
            services.AddTransient<IPlayerRepository, PlayerRepository>();
            services.AddTransient<ISkaterStatisticRepository, SkaterStatisticRepository>();
            services.AddTransient<ILeagueRepository, LeagueRepository>();
            services.AddTransient<IDocumentExecuter, DocumentExecuter>();
            services.AddSingleton<PlayerQuery>();
            services.AddSingleton<PlayerMutation>();
            services.AddSingleton<SkaterStatsQuery>();
            services.AddSingleton<LeagueQuery>();
            services.AddSingleton<SkaterStatisticTotalsType>();
            services.AddSingleton<PlayerType>();
            services.AddSingleton<PlayerListType>();
            services.AddSingleton<LeagueType>();
            services.AddSingleton<PlayerInputType>();
            services.AddSingleton<SkaterStatisticType>();
            services.AddSingleton<PlayerSchema>();
            services.AddSingleton<LeagueSchema>();
            services.AddSingleton<SkaterStatsSchema>();
            services.AddSingleton<IDocumentWriter, DocumentWriter>();

            services.AddGraphQL()
                .AddGraphTypes(typeof(PlayerSchema).Assembly, ServiceLifetime.Singleton)
                .AddGraphTypes(typeof(SkaterStatsSchema).Assembly, ServiceLifetime.Singleton)
                .AddGraphTypes(typeof(LeagueSchema).Assembly, ServiceLifetime.Singleton);




            //.AddGraphTypes(typeof(LeagueSchema));


            services.AddCors(options => {
                options.AddPolicy("foo", builder => {
                    builder
                    .AllowAnyHeader()
                    .AllowAnyOrigin()
                    .AllowAnyMethod();
                });
            });

            services.AddSwaggerGen(c =>
            {
                c.SwaggerDoc("v1", new Info() { Title = "My API", Version = "v1" });
            });

        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IHostingEnvironment env, NHLStatsContext db)
        {
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
            }

            app.UseCors("foo");

            app.UseGraphQL<PlayerSchema>(path: "/hockey-player/graphql");
            app.UseGraphQLPlayground(new GraphQLPlaygroundOptions
            {
                GraphQLEndPoint = "/hockey-player/graphql",
                Path = "/hockey-player/playground",
            });
            app.UseGraphQL<LeagueSchema>(path: "/league/graphql");
            app.UseGraphQLPlayground(new GraphQLPlaygroundOptions
            {
                GraphQLEndPoint = "/league/graphql",
                Path = "/league/playground",
            });

            app.UseGraphQL<SkaterStatsSchema>(path: "/stats/graphql");
            app.UseGraphQLPlayground(new GraphQLPlaygroundOptions
            {
                GraphQLEndPoint = "/stats/graphql",
                Path = "/stats/playground",
            });

            app.UseSwagger();

            app.UseSwaggerUI(c =>
            {
                c.SwaggerEndpoint("/swagger/v1/swagger.json", "My API V1");
            });

            app.UseMvc();
            db.EnsureSeedData();
        }
    }
}
