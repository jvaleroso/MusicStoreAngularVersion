using Core.Repository;
using Core.Entity;

namespace Core.Manager
{
    public class OrderManager : Repository<Order>
    {
        public bool CheckIfUserHasOrders(int orderId, string username)
        {
            using (var session = NHibernateBase.OpentSession())
            {
                Order order = session.QueryOver<Order>()
                     .Where(o => o.Id == orderId)
                     .And(o => o.Username == username)
                     .SingleOrDefault();

                return order != null;
            }
        }

    }
}
