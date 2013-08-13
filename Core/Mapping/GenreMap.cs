using FluentNHibernate.Mapping;
using Core.Entity;

namespace Core.Mapping
{
    public class GenreMap : ClassMap<Genre>
    {
        public GenreMap()
        {
            Id(genre => genre.Id).Not.Nullable();
            Map(genre => genre.Name).Not.Nullable();
            Map(genre => genre.Description).Nullable();
            HasMany(genre => genre.Albums)
                .Inverse()
                .Cascade.All();
        }
    }
}
