﻿
using System.Threading.Tasks;
using System.Collections.Generic;
using NHLStats.Core.Models;

namespace NHLStats.Core.Data
{
    public interface ISkaterStatisticRepository
    {
        Task<List<SkaterStatistic>> Get(int playerId);

        Task<SkaterStatisticTotals> GetCareerStats(int playerId);

        Task<IEnumerable<SkaterStatisticTotals>> GetAllCareerStats();

    }
}
