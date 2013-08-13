using System;
using System.Collections.Generic;
using System.Linq;
using System.Runtime.Serialization;
using System.Text;

namespace Core.Entity
{
    [KnownType(typeof(OrderDetail))]
    public class OrderDetail
    {
        public virtual int Id { get; set; }
        public virtual int Quantity { get; set; }
        public virtual decimal UnitPrice { get; set; }

        public virtual Album Album { get; set; }
        public virtual Order Order { get; set; }

        public OrderDetail()
        {
            Album = new Album();
            Order = new Order();
        }
    }
}
