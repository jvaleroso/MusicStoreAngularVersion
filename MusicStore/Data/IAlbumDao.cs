using System.Collections.Generic;

namespace MusicStore.Data
{
    public interface IAlbumDao
    {
        Album Save(Album album);
        void Delete(Album album);
        Album GetById(long id);
        IList<Album> GetByGenre(string genre);
        IList<Album> GetList();
    }
}
