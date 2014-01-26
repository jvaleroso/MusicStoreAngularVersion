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
    public class AlbumMap : ClassMapping<AlbumRepo>
    {
        public AlbumMap()
        {
            Table("Album");
            Id(c => c.Id, m => m.Generator(Generators.Native));
            Property(c => c.Title, m =>
            {
                m.NotNullable(true);
                m.Length(50);
            });
            Property(c => c.Price, m =>
            {
                m.NotNullable(true);
                m.Column(c => c.SqlType("NUMERIC(19,5)"));
            });
            Property(c => c.DateCreated, m => m.NotNullable(true));
            Property(c => c.AlbumArtURL, m => { m.NotNullable(true); m.Length(150); });
            ManyToOne(c => c.Artist, m =>
            {
                m.Column("Artist_Id");
                m.Cascade(Cascade.None);
                m.Lazy(LazyRelation.NoLazy);
                m.Fetch(FetchKind.Select);
            });
            ManyToOne(c => c.Genre, m =>
            {
                m.Column("Genre_Id");
                m.Cascade(Cascade.None);
                m.Lazy(LazyRelation.NoLazy);
                m.Fetch(FetchKind.Select);
            });
        }
    }
}
