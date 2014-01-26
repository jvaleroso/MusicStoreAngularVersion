using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using MusicStore.Services;

namespace MusicStore.Web.Controllers.Api
{
    public class ArtistController : ApiController
    {
        private readonly IArtistService _artistService;

        public ArtistController(IArtistService artistService)
        {
            _artistService = artistService;
        }

        public HttpResponseMessage Get()
        {
            var artist = _artistService.GetList();

            return Request.CreateResponse(HttpStatusCode.OK, artist.OrderBy(a => a.Name));
        }

        [HttpPost]
        public HttpResponseMessage CreateArtist(Artist artist)
        {
            var savedArtist = _artistService.Save(artist);

            return Request.CreateResponse(HttpStatusCode.OK, savedArtist);
        }
    }
}
