using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using AutoMapper;
using Core.Entity;
using Core.Manager;
using MusicStoreAngularVersion.Models;

namespace MusicStoreAngularVersion.Controllers
{
    public class StoreManagerController : ApiController
    {
        public HttpResponseMessage Get()
        {
            var albums = new AlbumManager().GetAllAlbums();
            var albumViewModels = MapAlbums(albums);
            return Request.CreateResponse(HttpStatusCode.OK, albumViewModels.OrderBy(a=>a.Title));
        }

        private IList<AlbumViewModel> MapAlbums(IEnumerable<Album> albums)
        {
            Mapper.CreateMap<Album, AlbumViewModel>()
                .ForMember(x => x.ArtistName, m => m.MapFrom(album => album.Artist.Name))
                .ForMember(x => x.GenreName, m => m.MapFrom(album => album.Genre.Name));

            return albums.Select(Mapper.DynamicMap<Album, AlbumViewModel>).ToList();
        }
    }
}
