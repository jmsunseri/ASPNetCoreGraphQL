using System;
using System.Collections.Generic;

namespace NHLStats.Core.Models
{
    public class PagedList<T>
    {
        public int TotalPages { get; set; }
        public IEnumerable<T> Enumerable { get; set; }
        
    }
}

