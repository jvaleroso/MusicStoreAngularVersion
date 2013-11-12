using AutoMapper;
using Core.Entity;
using Core.Manager;
using MusicStoreAngularVersion.Models;
using System.Collections.Generic;
using System.Net;
using System.Linq;
using System.Net.Http;
using System.Web.Http;
using System.Web.Mvc;

namespace MusicStoreAngularVersion.Controllers
{
    public class AlbumController : ApiController
    {
        public HttpResponseMessage Get()
        {
            var albums = new AlbumManager().GetAllAlbums();
            var albumViewModels = MapAlbums(albums);
            return Request.CreateResponse(HttpStatusCode.OK, albumViewModels.OrderBy(a => a.Title));
        }

        private IEnumerable<AlbumViewModel> MapAlbums(IEnumerable<Album> albums)
        {
            Mapper.CreateMap<Album, AlbumViewModel>()
                .ForMember(x => x.ArtistName, m => m.MapFrom(album => album.Artist.Name))
                .ForMember(x => x.GenreName, m => m.MapFrom(album => album.Genre.Name));

            return albums.Select(Mapper.DynamicMap<Album, AlbumViewModel>).ToList();
        }

        public HttpResponseMessage Post(Album album)
        {
            new AlbumManager().Save(album);
            return Request.CreateResponse(HttpStatusCode.Created, album);
        }

    }
}
