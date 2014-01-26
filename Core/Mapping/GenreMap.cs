using FluentNHibernate.Mapping;
using MusicStore;

namespace Core.Mapping
{
    public class GenreMap : ClassMap<Genre>
    {
        public GenreMap()
        {
            Id(genre => genre.Id).Not.Nullable();
            Map(genre => genre.Name).Not.Nullable();
            Map(genre => genre.Description).Nullable();
        }
    }
}
