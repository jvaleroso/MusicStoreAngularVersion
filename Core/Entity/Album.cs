using System;
namespace Core.Entity
{
    public class Album
    {
        public virtual int Id { get; set; }
        public virtual string Title { get; set; }
        public virtual decimal Price { get; set; }
        public virtual string AlbumArtURL { get; set; }
        public virtual Artist Artist { get; set; }
        public virtual Genre Genre { get; set; }
        public virtual DateTime DateCreated { get; set; }
    }
}
