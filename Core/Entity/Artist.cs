using System.Collections.Generic;

namespace Core.Entity
{
    public class Artist
    {
        public virtual int Id { get; set; }
        public virtual string Name { get; set; }
        public virtual IList<Album> Albums { get; set; }

        public Artist()
        {
            Albums = new List<Album>();
        }
    }
}
