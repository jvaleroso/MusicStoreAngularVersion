using MusicStore.Data;
using System.Collections.Generic;

namespace MusicStore.Services
{
    public class CartService : ICartService
    {
        private readonly ICartDao _cartDao;

        public CartService(ICartDao cartDao)
        {
            _cartDao = cartDao;
        }

        public Cart Save(Cart cart)
        {
            return _cartDao.Save(cart);
        }

        public void Delete(Cart genre)
        {
            _cartDao.Delete(genre);
        }

        public Cart GetById(long id)
        {
            return _cartDao.GetById(id);
        }

        public IList<Cart> GetList()
        {
            return _cartDao.GetList();
        }
    }
}
