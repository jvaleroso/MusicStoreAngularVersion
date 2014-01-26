using System;
using System.Collections.Generic;
using System.Linq;
using System.Reflection;
using System.Text;
using System.Threading.Tasks;
using System.Xml.Linq;
using NHibernate;
using NHibernate.Cfg;
using NHibernate.Mapping.ByCode;
using NHibernate.Tool.hbm2ddl;

namespace MusicStore.NHibernate
{
    public static class NH
    {
        private static readonly ISessionFactory SessionFactory;

        static NH()
        {
            var config = new Configuration().Configure();
            var mappingAssembly = Assembly.Load("MusicStore.NHibernate.SqlServer");
            var mapper = new ModelMapper();
            mapper.AddMappings(mappingAssembly.GetExportedTypes());
            var mapping = mapper.CompileMappingForAllExplicitlyAddedEntities();
            config.AddDeserializedMapping(mapping, null);

            config.AddAssembly("MusicStore.NHibernate.SqlServer");

            new SchemaValidator(config).Validate();

            SessionFactory = config.BuildSessionFactory();
        }

        public static ISession NewSession()
        {
            return SessionFactory.OpenSession();
        }

        public static T Select<T>(Func<ISession, T> func)
        {
            using (var session = SessionFactory.OpenSession())
                return func(session);
        }

        public static void Run(Action<ISession> action)
        {
            using (var session = SessionFactory.OpenSession())
            {
                session.Transaction.Begin();
                try
                {
                    action(session);
                    session.Transaction.Commit();
                }
                catch (Exception)
                {
                    session.Transaction.Rollback();
                    throw;
                }
            }
        }
    }
}
