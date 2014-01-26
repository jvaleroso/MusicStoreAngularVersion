using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace MusicStore.Services
{
    public interface ICartService
    {
        Cart Save(Cart cart);
        void Delete(Cart genre);
        Cart GetById(long id);
        IList<Cart> GetList();
    }
}
