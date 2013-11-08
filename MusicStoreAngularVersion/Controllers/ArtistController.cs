using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using Core.Manager;

namespace MusicStoreAngularVersion.Controllers
{
    public class ArtistController : ApiController
    {
        public HttpResponseMessage Get()
        {
            var artist = new ArtistManager().GetList();

            return Request.CreateResponse(HttpStatusCode.OK, artist.OrderBy(a => a.Name));
        }
    }
}
