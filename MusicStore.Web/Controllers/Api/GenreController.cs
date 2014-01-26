using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using MusicStore.Services;

namespace MusicStore.Web.Controllers.Api
{
    public class GenreController : ApiController
    {
        private readonly IGenreService _genreService;

        public GenreController(IGenreService genreService)
        {
            _genreService = genreService;
        }

        [HttpGet]
        public HttpResponseMessage Get()
        {
            var genres = _genreService.GetList();
            return Request.CreateResponse(HttpStatusCode.OK, genres.OrderBy(genre => genre.Name));
        }

        [HttpPost]
        public HttpResponseMessage CreateGenre(Genre genre)
        {
             _genreService.Save(genre);
            return Request.CreateResponse(HttpStatusCode.OK, genre);
        }
    }
}
