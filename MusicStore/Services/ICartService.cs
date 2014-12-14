using System.Collections.Generic;

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
