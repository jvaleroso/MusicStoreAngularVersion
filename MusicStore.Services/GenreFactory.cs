using MusicStore.Factory;

namespace MusicStore.Services
{
    public class GenreFactory : IGenreFactory
    {
        public Genre CreateGenre(string name, string description)
        {
            return new Genre
            {
                Name = name,
                Description = description
            };
        }
    }
}
