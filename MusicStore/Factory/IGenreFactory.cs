namespace MusicStore.Factory
{
    public interface IGenreFactory
    {
        Genre CreateGenre(string name, string description);
    }
}
