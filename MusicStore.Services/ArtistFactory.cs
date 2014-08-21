using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace MusicStore.Services
{
    public class ArtistFactory : IArtistFactory
    {
        public Artist CreateArtist(string name)
        {
            return new Artist()
            {
                Name = name
            };
        }
    }
}
