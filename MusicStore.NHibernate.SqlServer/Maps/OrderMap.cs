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
    public class OrderMap : ClassMapping<OrderRepo>
    {
        public OrderMap()
        {
            Table("Order");
            Id(c => c.Id, m => m.Generator(Generators.Native));
            Property(c => c.Username, m =>
            {
                m.NotNullable(true);
                m.Length(30);
            });
            Property(c => c.FirstName, m =>
            {
                m.NotNullable(true);
                m.Length(30);
            });
            Property(c => c.LastName, m =>
            {
                m.NotNullable(true);
                m.Length(30);
            });
            Property(c => c.Phone, m =>
            {
                m.NotNullable(true);
                m.Length(25);
            }); Property(c => c.Email, m =>
            {
                m.NotNullable(true);
                m.Length(25);
            });
            Property(c => c.Address, m =>
            {
                m.NotNullable(true);
                m.Length(100);
            });
            Property(c => c.City, m =>
            {
                m.NotNullable(true);
                m.Length(25);
            });
            Property(c => c.State, m =>
            {
                m.NotNullable(true);
                m.Length(25);
            });
            Property(c => c.PostalCode, m =>
            {
                m.NotNullable(true);
                m.Length(10);
            });
            Property(c => c.Country, m =>
            {
                m.NotNullable(true);
                m.Length(25);
            });
            Property(c => c.OrderDate, m => m.NotNullable(true));
            Property(c => c.Total, m =>
            {
                m.NotNullable(true);
                m.Column(c => c.SqlType("NUMERIC(19,5)"));
            });
            //Bag(c => c.OrderDetails, m =>
            //{
            //    m.Cascade(Cascade.DeleteOrphans);
            //    m.Inverse(true);
            //    m.Key(k => k.Column("OrderId"));
            //    m.Fetch(CollectionFetchMode.Select);
            //    m.Lazy(CollectionLazy.NoLazy);
            //}, ce => ce.OneToMany());

        }
    }
}
