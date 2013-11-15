using System.Collections.Generic;

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
                        tx.Commit();
                    }
                    catch
                    {
                        tx.Rollback();
                    }
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
                        tx.Commit();
                    }
                    catch
                    {
                        tx.Rollback();
                    }
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
                        tx.Commit();
                    }
                    catch
                    {
                        tx.Rollback();
                    }
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
