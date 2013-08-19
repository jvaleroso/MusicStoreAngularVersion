using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Core.Repository
{
    public class Repository<T> : IRepository<T> where T : class
    {
        public void Save(T entity)
        {
            using (var session = NHibernateBase.OpentSession())
            {
                using (var tx = session.BeginTransaction())
                {
                    try
                    {
                        session.Save(entity);
                    }
                    catch
                    {
                        tx.Rollback();
                    }

                    tx.Commit();
                }
            }
        }

        public void Update(T entity)
        {
            using (var session = NHibernateBase.OpentSession())
            {
                using (var tx = session.BeginTransaction())
                {
                    try
                    {
                        session.Update(entity);
                    }
                    catch
                    {
                        tx.Rollback();
                    }

                    tx.Commit();
                }
            }
        }

        public void Delete(T entity)
        {
            using (var session = NHibernateBase.OpentSession())
            {
                using (var tx = session.BeginTransaction())
                {
                    try
                    {
                        session.Delete(entity);
                    }
                    catch
                    {
                        tx.Rollback();
                    }

                    tx.Commit();
                }
            }
        }

        public IList<T> GetList()
        {
            using (var session = NHibernateBase.OpentSession())
            {
                return session.QueryOver<T>().List();
            }
        }

        public T GetById(int id)
        {
            using (var session = NHibernateBase.OpentSession())
            {
                return session.Get<T>(id);
            }
        }
    }
}
