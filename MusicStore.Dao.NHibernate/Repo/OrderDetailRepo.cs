using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace MusicStore.NHibernate.Repo
{
    public class OrderDetailRepo
    {
        public virtual long Id { get; set; }
        public virtual int Quantity { get; set; }
        public virtual decimal UnitPrice { get; set; }
        public virtual AlbumRepo Album { get; set; }
        public virtual OrderRepo Order { get; set; }
    }
}
