using FluentNHibernate.Mapping;
using Core.Entity;

namespace Core.Mapping
{
    public class ArtistMap : ClassMap<Artist>
    {
        public ArtistMap()
        {
            Id(artist => artist.Id).Not.Nullable();
            Map(artist => artist.Name).Not.Nullable().Length(20);
            HasMany(artist => artist.Albums)
                .Inverse()
                .Cascade.All();
        }

    }
}
