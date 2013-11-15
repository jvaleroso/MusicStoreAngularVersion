using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using Core.Manager;

namespace MusicStoreAngularVersion.Controllers
{
    public class GenreController : ApiController
    {
        public HttpResponseMessage Get()
        {
            var genres = new GenreManager().GetList();
            return Request.CreateResponse(HttpStatusCode.OK, genres.OrderBy(genre => genre.Name));
        }
    }
}
