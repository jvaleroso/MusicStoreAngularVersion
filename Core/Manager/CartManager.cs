using Core.Entity;
using Core.Repository;
using NHibernate;
using NHibernate.Criterion;
using NHibernate.SqlCommand;
using System;
using System.Collections.Generic;

namespace Core.Manager
{
    public class CartManager : Repository<Cart>
    {

        public int RemoveFromCart(int id, string shoppingCartId)
        {
            using (var session = NHibernateBase.OpentSession())
            {
                using (var tx = session.BeginTransaction())
                {
                    var cartItem = session.QueryOver<Cart>()
                        .Where(c => c.Id == id && c.CartId == shoppingCartId)
                        .JoinQueryOver(c => c.Album)
                        .SingleOrDefault();

                    int itemCount = 0;

                    if (cartItem != null)
                    {
                        if (cartItem.Count > 1)
                        {
                            cartItem.Count--;
                            itemCount = cartItem.Count;
                            session.Update(cartItem);
                        }
                        else
                            session.Delete(cartItem);

                        tx.Commit();
                    }

                    return itemCount;
                }
            }
        }

        public void EmptyCart(string shoppingCartId)
        {
            using (var session = NHibernateBase.OpentSession())
            {
                using (session.BeginTransaction())
                {
                    var cartItems = session.QueryOver<Cart>().Where(c => c.CartId == shoppingCartId).List();

                    foreach (var cartItem in cartItems)
                        session.Delete(cartItem);
                }
            }
        }

        public IList<Cart> GetCartItems(string shoppingCartId)
        {
            var queryOver = GetQueryOverByCartId(shoppingCartId);

            using (var session = NHibernateBase.OpentSession())
            {
                return queryOver.GetExecutableQueryOver(session).List();
            }
        }

        public QueryOver<Cart, Cart> GetQueryOverByCartId(string cartId = "", int id = 0, int albumId = 0)
        {
            Cart cartAlias = null;
            Album albumAlias = null;

            var query = QueryOver.Of<Cart>()
                .JoinAlias(cart => cart.Album, () => albumAlias, JoinType.InnerJoin);

            if (id != 0)
                query.And(() => cartAlias.Id == id);

            if (!string.IsNullOrWhiteSpace(cartId) && id == 0)
                query.And(() => cartAlias.CartId == cartId);

            if (albumId != 0 && id == 0)
                query.And(() => albumAlias.Id == albumId);

            return query;
        }

        public Cart GetUniqueCartWithAlbumByCartId(int id)
        {
            var query = GetQueryOverByCartId("", id);
            using (var session = NHibernateBase.OpentSession())
            {
                return query.GetExecutableQueryOver(session).SingleOrDefault();
            }
        }


        public int GetCount(string shoppingCartId)
        {
            using (var session = NHibernateBase.OpentSession())
            {
                int? count = session.QueryOver<Cart>()
                    .Where(c => c.CartId == shoppingCartId)
                    .SelectList(list => list
                        .SelectSum(c => c.Count))
                        .SingleOrDefault<int>();
                return (int) count;
            }
        }

        public void AddToCart(Album album, string shoppingCartId)
        {
            using (var session = NHibernateBase.OpentSession())
            {
                using (var tx = session.BeginTransaction())
                {
                    Cart cartItem = session.QueryOver<Cart>()
                                        .Where(c => c.CartId == shoppingCartId)
                                        .And(c => c.Album.Id == album.Id)
                                        .SingleOrDefault();

                    if (cartItem == null)
                    {
                        cartItem = new Cart
                        {
                            Album = album,
                            CartId = shoppingCartId,
                            Count = 1,
                            DateCreated = DateTime.Now
                        };
                        session.Save(cartItem);
                    }

                    else
                    {
                        cartItem.Count++;
                        session.Update(cartItem);
                    }

                    tx.Commit();
                }
            }
        }

        public decimal GetTotal(string shoppingCartId)
        {
            using (var session = NHibernateBase.OpentSession())
            {
                IQuery query = session.CreateQuery(
                      "select Sum(album.Price * cart.Count)" +
                      "from Cart as cart inner join cart.Album as album where cart.CartId = :cartId");

                query.SetParameter("cartId", shoppingCartId);

                var total = query.UniqueResult<decimal>();
                return total;

            }
        }

        public int CreateOrder(Entity.Order order, string shoppingCartId)
        {
            decimal orderTotal = 0;

            var cartItems = GetCartItems(shoppingCartId);

            foreach (var item in cartItems)
            {
                var orderDetails = new OrderDetail
                {
                    Album = item.Album,
                    Order = order,
                    UnitPrice = item.Album.Price,
                    Quantity = item.Count
                };

                new OrderDetailsManager().Save(orderDetails);

                orderTotal += (item.Count * item.Album.Price);
            }

            order.Total = orderTotal;

            new OrderManager().Save(order);

            EmptyCart(shoppingCartId);

            return order.Id;

        }

        public void MigrateCart(string username, string shoppingCartId)
        {
            using (var session = NHibernateBase.OpentSession())
            {
                var shoppingCart = session.QueryOver<Cart>().Where(c => c.CartId == shoppingCartId).List();

                foreach (Cart cart in shoppingCart)
                {
                    cart.CartId = username;
                    session.Update(cart);
                }
            }
        }
    }
}
