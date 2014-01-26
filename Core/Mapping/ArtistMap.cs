using FluentNHibernate.Mapping;
using MusicStore;

namespace Core.Mapping
{
    public class ArtistMap : ClassMap<Artist>
    {
        public ArtistMap()
        {
            Id(artist => artist.Id).Not.Nullable();
            Map(artist => artist.Name).Not.Nullable().Length(20);
        }
    }
}
