using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using MusicStore.Data;

namespace MusicStore.Services
{
    public class ArtistService:IArtistService
    {
        private readonly IArtistDao _artistDao;

        public ArtistService(IArtistDao artistDao)
        {
            _artistDao = artistDao;
        }

        public Artist Save(Artist artist)
        {
            return _artistDao.Save(artist);
        }

        public void Delete(Artist artist)
        {
           _artistDao.Delete(artist);
        }

        public Artist GetById(long id)
        {
            return _artistDao.GetById(id);
        }

        public IList<Artist> GetList()
        {
            return _artistDao.GetList();
        }
    }
}
