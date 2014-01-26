using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace MusicStore.NHibernate.Repo
{
    public class CartRepo
    {
        public virtual long Id { get; set; }
        public virtual string CartId { get; set; }
        public virtual int Count { get; set; }
        public virtual DateTime DateCreated { get; set; }
        public virtual AlbumRepo Album { get; set; }
    }
}
