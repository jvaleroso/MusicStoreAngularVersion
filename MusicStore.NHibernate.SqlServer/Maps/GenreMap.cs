using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using MusicStore.NHibernate.Repo;
using NHibernate.Mapping;
using NHibernate.Mapping.ByCode;
using NHibernate.Mapping.ByCode.Conformist;

namespace MusicStore.NHibernate.SqlServer.Maps
{
    public class GenreMap:ClassMapping<GenreRepo>
    {
        public GenreMap()
        {
            Table("Genre");
            Id(c=>c.Id, m=>m.Generator(Generators.Native));
            Property(c => c.Name, m =>
            {
                m.NotNullable(true);
                m.Length(50);
            });
            Property(c=>c.Description, m =>
            {
                m.NotNullable(false);
                m.Length(255);
            });
            Bag(c => c.Albums, m =>
            {
                m.Cascade(Cascade.DeleteOrphans);
                m.Inverse(true);
                m.Key(k => k.Column("Genre_Id"));
                m.Fetch(CollectionFetchMode.Select);
                m.Lazy(CollectionLazy.NoLazy);
            }, ce => ce.OneToMany());
        }
    }
}
