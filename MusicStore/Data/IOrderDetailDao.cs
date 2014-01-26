using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace MusicStore.Data
{
    public interface IOrderDetailDao
    {
        OrderDetail Save(OrderDetail orderDetail);
        void Delete(OrderDetail orderDetail);
        OrderDetail GetById(long id);
        IList<OrderDetail> GetList();
    }
}
