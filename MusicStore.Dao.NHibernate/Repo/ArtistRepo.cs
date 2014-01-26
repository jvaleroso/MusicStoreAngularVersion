using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace MusicStore.NHibernate.Repo
{
    public class ArtistRepo
    {
        public virtual long Id { get; set; }
        public virtual string Name { get; set; }
    }
}
