using Core.Entity;
using FluentNHibernate.Mapping;

namespace Core.Mapping
{
    public class AlbumMap: ClassMap<Album>
    {
        public AlbumMap()
        {
            Id(album => album.Id).Not.Nullable();
            Map(album => album.Title).Not.Nullable();
            Map(album => album.Price).CustomSqlType("numeric(28,9)").Not.Nullable();
            Map(album => album.AlbumArtURL).Not.Nullable();
            References(album => album.Artist);
            References(album => album.Genre);
        }
    }
}
