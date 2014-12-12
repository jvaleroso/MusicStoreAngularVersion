using System.Collections.Generic;
using System.IO;

namespace MusicStore.Services
{
    public interface IArtistService
    {
        Artist Save(Artist artist);
        void Delete(Artist artist);
        Artist GetById(long id);
        IList<Artist> GetList();
        bool UpdloadArtistConfig(Stream memoryStream);
        void ExportArtistConfig(Stream memortStream);
    }
}
