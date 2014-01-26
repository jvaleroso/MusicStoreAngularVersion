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
            //var albumViewModels = MapAlbums(albums);
            return Request.CreateResponse(HttpStatusCode.OK, albums.OrderBy(a => a.Title));
        }

        public void PutAlbum(Album album)
        {
            if (album != null)
                _albumService.Save(album);
        }

        private IEnumerable<AlbumViewModel> MapAlbums(IEnumerable<Album> albums)
        {
            Mapper.CreateMap<Album, AlbumViewModel>()
                .ForMember(x => x.ArtistName, m => m.MapFrom(album => album.Artist.Name))
                .ForMember(x => x.GenreName, m => m.MapFrom(album => album.Genre.Name));

            return albums.Select(Mapper.DynamicMap<Album, AlbumViewModel>).ToList();
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
            //var albumViewModels = MapAlbums(albums);
            return Request.CreateResponse(HttpStatusCode.OK, albums.OrderBy(a => a.Title));
        }

    }
}
