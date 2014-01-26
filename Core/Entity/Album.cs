using System;

namespace MusicStore
{
    public sealed class Album
    {
        public int Id { get; set; }
        public string Title { get; set; }
        public decimal Price { get; set; }
        public string AlbumArtURL { get; set; }
        public Artist Artist { get; set; }
        public Genre Genre { get; set; }
        public DateTime DateCreated { get; set; }
    }
}
