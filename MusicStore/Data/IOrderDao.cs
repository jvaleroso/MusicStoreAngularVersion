using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace MusicStore.Data
{
    public interface IOrderDao
    {
        Order Save(Order genre);
        void Delete(Order genre);
        Order GetById(long id);
        IList<Order> GetList();
    }
}
