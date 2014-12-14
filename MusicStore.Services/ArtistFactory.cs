using MusicStore.Factory;

namespace MusicStore.Services
{
    public class ArtistFactory : IArtistFactory
    {
        public Artist CreateArtist(string name)
        {
            return new Artist()
            {
                Name = name
            };
        }
    }
}
