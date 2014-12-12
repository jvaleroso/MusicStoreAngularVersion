using System;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using MusicStore.Services;

namespace MusicStore.Web.Controllers.Api
{
    [RoutePrefix("api/album")]
    public class AlbumController : ApiController
    {
        private readonly IAlbumService _albumService;

        public AlbumController(IAlbumService albumService)
        {
            _albumService = albumService;
        }

        [HttpGet]
        public HttpResponseMessage GetAlbums()
        {
            var albums = _albumService.GetList();
            return Request.CreateResponse(HttpStatusCode.OK, albums.OrderBy(a => a.Title));
        }

        [HttpPost]
        public HttpResponseMessage CreateAlbum(Album album)
        {
            album.DateCreated = DateTime.Now;
            _albumService.Save(album);
            return Request.CreateResponse(HttpStatusCode.Created, album);
        }

        [HttpGet]
        public HttpResponseMessage GetAlbumByGenre(string genre)
        {
            var albums = _albumService.GetByGenre(genre);
            return Request.CreateResponse(HttpStatusCode.OK, albums.OrderBy(a => a.Title));
        }

        [HttpGet]
        public HttpResponseMessage GetById(long id)
        {
            var album = _albumService.GetById(id);
            return Request.CreateResponse(HttpStatusCode.OK, album);
        }

    }
}
