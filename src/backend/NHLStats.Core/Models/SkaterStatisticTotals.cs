 

namespace NHLStats.Core.Models
{
    public class SkaterStatisticTotals
    {
        public int PlayerId { get; set; }
        public int GamesPlayed { get; set; }
        public int Goals { get; set; }
        public int Assists { get; set; }
        public int Points { get; set; }
        public int PenaltyMinutes { get; set; }
        public int? PlusMinus { get; set; }

        public Player Player { get; set; }

    }
}
