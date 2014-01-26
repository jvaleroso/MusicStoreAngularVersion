using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

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
