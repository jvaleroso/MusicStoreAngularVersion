using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace MusicStore.NHibernate.Repo
{
    public class AlbumRepo
    {
        public virtual long Id { get; set; }
        public virtual string Title { get; set; }
        public virtual decimal Price { get; set; }
        public virtual string AlbumArtURL { get; set; }
        public virtual ArtistRepo Artist { get; set; }
        public virtual GenreRepo Genre { get; set; }
        public virtual DateTime DateCreated { get; set; }
    }
}
