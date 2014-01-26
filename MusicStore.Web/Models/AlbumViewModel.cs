using System;
namespace MusicStore.Web.Models
{
    public class AlbumViewModel
    {
        public int Id { get; set; }
        public string Title { get; set; }
        public decimal Price { get; set; }
        public string AlbumArtURL { get; set; }
        public string ArtistName { get; set; }
        public string GenreName { get; set; }
    }
}