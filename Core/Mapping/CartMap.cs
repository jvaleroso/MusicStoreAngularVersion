using FluentNHibernate.Mapping;
using MusicStore;

namespace Core.Mapping
{
    public class CartMap : ClassMap<Cart>
    {
        public CartMap()
        {
            Id(cart => cart.Id).Not.Nullable();
            Map(cart => cart.CartId).Not.Nullable();
            Map(cart => cart.DateCreated).Not.Nullable();
            Map(cart => cart.Count).Not.Nullable();
            References(cart => cart.Album);
        }
    }
}
