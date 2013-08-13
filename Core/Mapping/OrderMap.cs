using FluentNHibernate.Mapping;
using Core.Entity;

namespace Core.Mapping
{
    public class OrderMap : ClassMap<Order>
    {
        public OrderMap()
        {
            Id(order => order.Id).Not.Nullable();
            Map(order => order.FirstName).Not.Nullable();
            Map(order => order.LastName).Not.Nullable();
            Map(order => order.OrderDate).Not.Nullable();
            Map(order => order.Phone).Not.Nullable();
            Map(order => order.PostalCode).Not.Nullable();
            Map(order => order.City).Not.Nullable();
            Map(order => order.State).Not.Nullable();
            Map(order => order.Address).Not.Nullable();
            Map(order => order.Country).Not.Nullable();
            Map(order => order.Email).Not.Nullable();
            Map(order => order.Total).Not.Nullable();
            Map(order => order.Username).Not.Nullable();
            HasMany(order => order.OrderDetails)
                .Inverse()
                .Cascade.All();
        }
    }
}
