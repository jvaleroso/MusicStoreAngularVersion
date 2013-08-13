using System.Collections.Generic;
using System.Runtime.Serialization;

namespace Core.Entity
{
    [KnownType(typeof(Artist))]
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
