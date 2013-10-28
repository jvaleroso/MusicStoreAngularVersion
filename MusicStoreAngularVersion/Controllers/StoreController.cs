using System.Linq;
using System.Web.Http;
using AutoMapper;
using Core.Entity;
using Core.Manager;
using System.Collections.Generic;
using System.Net;
using System.Net.Http;
using MusicStoreAngularVersion.Models;

namespace MusicStoreAngularVersion.Controllers
{
    public class StoreController : ApiController
    {
         //GET api/store
        public HttpResponseMessage Get()
        {
            var albums = new AlbumManager().GetNewestAlbums();
            var albumViewModels = MapAlbums(albums);
            return Request.CreateResponse(HttpStatusCode.OK, albumViewModels);
        }

        // GET api/store/5
        public string Get(int id)
        {
            return "value";
        }

        // POST api/store
        public void Post([FromBody]string value)
        {
        }

        // PUT api/store/5
        public void Put(int id, [FromBody]string value)
        {
        }

        // DELETE api/store/5
        public void Delete(int id)
        {
        }

        public HttpResponseMessage Get(string genre)
        {
            var albums = new AlbumManager().GetAlbumsByGenre(genre);
            var albumViewModels = MapAlbums(albums);
            return Request.CreateResponse(HttpStatusCode.OK, albumViewModels);
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
