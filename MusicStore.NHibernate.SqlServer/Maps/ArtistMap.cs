using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using MusicStore.NHibernate.Repo;
using NHibernate.Cfg.XmlHbmBinding;
using NHibernate.Mapping.ByCode;
using NHibernate.Mapping.ByCode.Conformist;

namespace MusicStore.NHibernate.SqlServer.Maps
{
    public class ArtistMap:ClassMapping<ArtistRepo>
    {
        public ArtistMap()
        {
            Table("Artist");
            Id(c=>c.Id, m=>m.Generator(Generators.Native));
            Property(c => c.Name, m =>
            {
                m.NotNullable(true);
                m.Length(50);
            });
        }
    }
}
