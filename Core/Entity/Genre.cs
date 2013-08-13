using System.Collections.Generic;
using System.Runtime.Serialization;

namespace Core.Entity
{
    public class Genre
    {
        public virtual int Id { get; set; }
        public virtual string Name { get; set; }
        public virtual string Description { get; set; }

        public virtual IList<Album> Albums { get; set; }

        public Genre()
        {
            Albums = new List<Album>();
        }
    }

    public class GenreViewModel
    {
        public virtual int Id { get; set; }
        public virtual string Name { get; set; }
        public virtual string Description { get; set; }
        public virtual IList<Album> Albums { get; set; }
    }
}
