using System.Collections.Generic;

namespace MusicStore.Services
{
    public interface IOrderService
    {
        Order Save(Order order);
        void Delete(Order order);
        Order GetById(long id);
        IList<Order> GetList();
    }
}
