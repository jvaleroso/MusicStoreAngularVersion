using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace MusicStore.Services
{
    public interface IArtistFactory
    {
        Artist CreateArtist(string name);
    }
}
