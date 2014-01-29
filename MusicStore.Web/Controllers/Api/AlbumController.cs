using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using AutoMapper;
using MusicStore.Services;
using MusicStore.Web.Models;

namespace MusicStore.Web.Controllers.Api
{
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

        public HttpResponseMessage GetAlbumByGenre(string genre)
        {
            var albums = _albumService.GetByGenre(genre);
            return Request.CreateResponse(HttpStatusCode.OK, albums.OrderBy(a => a.Title));
        }

    }
}
