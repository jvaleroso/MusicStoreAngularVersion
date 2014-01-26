using MusicStore.NHibernate.Repo;
using NHibernate.Mapping.ByCode;
using NHibernate.Mapping.ByCode.Conformist;

namespace MusicStore.NHibernate.SqlServer.Maps
{
    public class CartMap : ClassMapping<CartRepo>
    {
        public CartMap()
        {
            Table("Cart");
            Id(c => c.Id, m => m.Generator(Generators.Native));
            Property(c => c.CartId, m => { m.NotNullable(true); m.Length(50); });
            Property(c => c.Count, m => m.NotNullable(true));
            Property(c => c.DateCreated, m => m.NotNullable(true));
            ManyToOne(c => c.Album, m =>
            {
                m.Column("Album_Id");
                m.Cascade(Cascade.None);
                m.Lazy(LazyRelation.NoLazy);
                m.Fetch(FetchKind.Select);
            });
        }
    }
}
