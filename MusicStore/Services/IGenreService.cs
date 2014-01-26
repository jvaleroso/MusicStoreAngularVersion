using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace MusicStore.Services
{
    public interface IGenreService
    {
        Genre Save(Genre genre);
        void Delete(Genre genre);
        Genre GetById(long id);
        IList<Genre> GetList();
    }
}
