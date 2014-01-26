using MusicStore;
using FluentNHibernate.Cfg;
using FluentNHibernate.Cfg.Db;
using NHibernate;
using NHibernate.Dialect;
using NHibernate.Tool.hbm2ddl;

namespace Core.Repository
{
    public class NHibernateBase
    {
        private static ISessionFactory _session;

        private static ISessionFactory SessionFactory
        {
            get
            {
                if (_session == null)
                    InitializeSessionFactory();
                return _session;

            }
        }

        private static void InitializeSessionFactory()
        {

            _session = Fluently.Configure()
                .Database(MsSqlConfiguration.MsSql2005.Dialect<MsSql2012Dialect>()
                .ConnectionString("Data Source=localhost;Initial Catalog=music_store;Integrated Security=True")
                .ShowSql())
                .Mappings(m => m.FluentMappings.AddFromAssemblyOf<Album>())
                .ExposeConfiguration(cfg => new SchemaUpdate(cfg)
                .Execute(true, true))
                .BuildSessionFactory();
        }

        public static ISession OpentSession()
        {
            return SessionFactory.OpenSession();
        }
    }

}
