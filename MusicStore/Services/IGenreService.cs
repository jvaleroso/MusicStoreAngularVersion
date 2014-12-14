using System.Collections.Generic;
using System.IO;

namespace MusicStore.Services
{
    public interface IGenreService
    {
        Genre Save(Genre genre);
        void Delete(Genre genre);
        Genre GetById(long id);
        IList<Genre> GetList();
        bool ImportGenreConfig(Stream memoryStream);
        void ExportGenreConfig(Stream memortStream);
    }
}
