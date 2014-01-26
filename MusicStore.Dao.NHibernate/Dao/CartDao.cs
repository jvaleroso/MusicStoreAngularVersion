using System.Collections.Generic;
using AutoMapper;
using MusicStore.Data;
using MusicStore.NHibernate.Repo;

namespace MusicStore.NHibernate.Dao
{
    public class CartDao : ICartDao
    {
        public Cart Save(Cart cart)
        {
            var artistRepo = Mapper.Map<CartRepo>(cart);
            NH.Run(s => s.SaveOrUpdate(cart));
            return Mapper.Map<Cart>(artistRepo);
        }

        public void Delete(Cart cart)
        {
            NH.Run(s => s.Delete(Mapper.Map<CartRepo>(cart)));
        }

        public Cart GetById(long id)
        {
            return Mapper.Map<Cart>(NH.Select(s => s.Get<CartRepo>(id)));
        }

        public IList<Cart> GetList()
        {
            return Mapper.Map<IList<Cart>>(NH.Select(s => s.QueryOver<CartRepo>().List()));
        }
    }
}
