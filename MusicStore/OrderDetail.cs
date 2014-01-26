namespace MusicStore
{
    public sealed class OrderDetail
    {
        public int Id { get; set; }
        public int Quantity { get; set; }
        public decimal UnitPrice { get; set; }
        public Album Album { get; set; }
        public Order Order { get; set; }
    }
}
