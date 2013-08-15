namespace MusicStoreAngularVersion.Models
{
    public class AlbumViewModel
    {
        public virtual int Id { get; set; }
        public virtual string Title { get; set; }
        public virtual decimal Price { get; set; }
        public virtual string AlbumArtURL { get; set; }
        public virtual string ArtistName { get; set; }
        public virtual string GenreName { get; set; }
    }
}