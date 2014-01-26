using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using MusicStore.NHibernate.Repo;
using NHibernate.Mapping.ByCode;
using NHibernate.Mapping.ByCode.Conformist;

namespace MusicStore.NHibernate.SqlServer.Maps
{
    public class OrderDetailMap : ClassMapping<OrderDetailRepo>
    {
        public OrderDetailMap()
        {
            Table("OrderDetail");
            Id(c => c.Id, m => m.Generator(Generators.Native));
            Property(c => c.Quantity, m => m.NotNullable(true));
            Property(c => c.UnitPrice, m =>
            {
                m.NotNullable(true);
                m.Column(c => c.SqlType("NUMERIC(19,5)"));
            });
            ManyToOne(c => c.Album, m =>
            {
                m.Column("Album_Id");
                m.Cascade(Cascade.None);
                m.Lazy(LazyRelation.NoLazy);
                m.Fetch(FetchKind.Select);
            });
            ManyToOne(c => c.Order, m =>
            {
                m.Column("Order_Id");
                m.Cascade(Cascade.None);
                m.Lazy(LazyRelation.NoLazy);
                m.Fetch(FetchKind.Select);
            });
        }
    }
}
