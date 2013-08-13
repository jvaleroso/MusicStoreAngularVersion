using FluentNHibernate.Mapping;
using Core.Entity;

namespace Core.Mapping
{
    public class OrderDetailMap : ClassMap<OrderDetail>
    {
        public OrderDetailMap()
        {
            Id(orderDetail => orderDetail.Id).Not.Nullable();
            Map(orderDetail => orderDetail.UnitPrice).Not.Nullable();
            Map(orderDetail => orderDetail.Quantity).Not.Nullable();

            References(orderDetail => orderDetail.Album).Not.Nullable();
            References(orderDetail => orderDetail.Order).Not.Nullable();
        }
    }
}
