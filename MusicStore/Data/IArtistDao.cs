using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace MusicStore.Data
{
    public interface IArtistDao
    {
        Artist Save(Artist artist);
        void Delete(Artist artist);
        Artist GetById(long id);
        IList<Artist> GetList();
    }
}
