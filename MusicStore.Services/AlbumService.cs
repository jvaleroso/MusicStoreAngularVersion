using System.Collections.Generic;
using MusicStore.Data;

namespace MusicStore.Services
{
    public class AlbumService: IAlbumService
    {
        private readonly IAlbumDao _albumDao;

        public AlbumService(IAlbumDao albumDao)
        {
            _albumDao = albumDao;
        }

        public Album Save(Album album)
        {
            return _albumDao.Save(album);
        }

        public void Delete(Album album)
        {
            _albumDao.Delete(album);
        }

        public Album GetById(long id)
        {
            return _albumDao.GetById(id);
        }

        public IList<Album> GetList()
        {
            return _albumDao.GetList();
        }

        public IList<Album> GetByGenre(string genre)
        {
            return _albumDao.GetByGenre(genre);
        }
    }
}
