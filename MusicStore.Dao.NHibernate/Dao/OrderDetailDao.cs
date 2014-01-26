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
    public class OrderDetailDao : IOrderDetailDao
    {
        public OrderDetail Save(OrderDetail orderDetail)
        {
            var orderDetailRepo = Mapper.Map<OrderDetailRepo>(orderDetail);
            NH.Run(s => s.SaveOrUpdate(orderDetailRepo));
            return Mapper.Map<OrderDetail>(orderDetailRepo);
        }

        public void Delete(OrderDetail orderDetail)
        {
            NH.Run(s => s.Delete(Mapper.Map<OrderDetailRepo>(orderDetail)));
        }

        public OrderDetail GetById(long id)
        {
            return Mapper.Map<OrderDetail>(NH.Select(s => s.Get<OrderDetail>(id)));
        }

        public IList<OrderDetail> GetList()
        {
            return Mapper.Map<IList<OrderDetail>>(NH.Select(s => s.QueryOver<OrderDetailRepo>().List()));
        }
    }
}
