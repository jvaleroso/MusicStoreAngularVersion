using System.Collections.Generic;

namespace Core.Repository
{
    public interface IRepository<T>
    {
        void Save(T entity);
        void Update(T entity);
        void Delete(T entity);
        IList<T> GetList();
        T GetById(int id);
    }
}
