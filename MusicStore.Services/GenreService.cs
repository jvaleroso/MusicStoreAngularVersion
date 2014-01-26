using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using MusicStore.Data;

namespace MusicStore.Services
{
    public class GenreService: IGenreService
    {
        private readonly IGenreDao _genreDao;

        public GenreService(IGenreDao genreDao)
        {
            _genreDao = genreDao;
        }

        public Genre Save(Genre genre)
        {
            return _genreDao.Save(genre);
        }

        public void Delete(Genre genre)
        {
           _genreDao.Delete(genre);
        }

        public Genre GetById(long id)
        {
           return _genreDao.GetById(id);
        }

        public IList<Genre> GetList()
        {
            return _genreDao.GetList();
        }
    }
}
