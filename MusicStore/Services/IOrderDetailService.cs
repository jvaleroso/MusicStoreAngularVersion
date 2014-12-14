using System.Collections.Generic;

namespace MusicStore.Services
{
    public interface IOrderDetailService
    {
        OrderDetail Save(OrderDetail orderDetail);
        void Delete(OrderDetail orderDetail);
        OrderDetail GetById(long id);
        IList<OrderDetail> GetList();
    }
}
