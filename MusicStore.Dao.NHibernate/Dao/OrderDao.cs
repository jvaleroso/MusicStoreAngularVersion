using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using AutoMapper;
using MusicStore.Data;
using MusicStore.NHibernate.Repo;

namespace MusicStore.NHibernate.Dao
{
    public class OrderDao : IOrderDao
    {
        public Order Save(Order genre)
        {
            var orderRepo = Mapper.Map<OrderRepo>(genre);
            NH.Run(s => s.SaveOrUpdate(orderRepo));
            return Mapper.Map<Order>(orderRepo);
        }

        public void Delete(Order order)
        {
            NH.Run(s => s.Delete(Mapper.Map<OrderRepo>(order)));
        }

        public Order GetById(long id)
        {
            return Mapper.Map<Order>(NH.Select(s => s.Get<OrderRepo>(id)));
        }

        public IList<Order> GetList()
        {
            return Mapper.Map<IList<Order>>(NH.Select(s => s.QueryOver<OrderRepo>().List()));
        }
    }
}
