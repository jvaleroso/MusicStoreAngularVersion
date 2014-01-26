using System;

namespace MusicStore
{
    public sealed class Cart
    {
        public long Id { get; set; }
        public string CartId { get; set; }
        public int Count { get; set; }
        public DateTime DateCreated { get; set; }
        public Album Album { get; set; }
    }
}
