using System;

namespace MusicStore
{
    public class Cart
    {
        public virtual int Id { get; set; }
        public virtual string CartId { get; set; }
        public virtual int Count { get; set; }
        public virtual DateTime DateCreated { get; set; }

        public virtual Album Album { get; set; }

        public Cart()
        {
            Album = new Album();
        }
    }
}
