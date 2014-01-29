using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace MusicStore.Web.Models
{
    public class GenreViewModel
    {
        public long Id { get; set; }
        public string Name { get; set; }
        public string Description { get; set; }
        public bool Selected { get; set; }
    }
}