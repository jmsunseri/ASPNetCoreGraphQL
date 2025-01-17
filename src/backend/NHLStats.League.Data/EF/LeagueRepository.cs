﻿using System.Collections.Generic;
using System.Threading.Tasks;
using NHLStats.Data;
using Microsoft.EntityFrameworkCore;



namespace NHLStats.Leagues.Data.EF
{
    public class LeagueRepository : ILeagueRepository
    {
        private readonly NHLStatsContext _db;

        public LeagueRepository(NHLStatsContext db)
        {
            _db = db;
        }

        public async Task<League> Get(int id)
        {
            return await _db.Leagues.FirstOrDefaultAsync(p => p.Id == id);
        }

        public async Task<List<League>> All()
        {
            return await _db.Leagues.ToListAsync();
        }

        public async Task<League> Add(League league)
        {
            await _db.Leagues.AddAsync(league);
            await _db.SaveChangesAsync();
            return league;
        }
    }
}
