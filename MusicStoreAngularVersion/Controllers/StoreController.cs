using System.Linq;
using System.Web.Http;
using AutoMapper;
using Core.Entity;
using Core.Manager;
using System.Collections.Generic;
using System.Net;
using System.Net.Http;
using Newtonsoft.Json;

namespace MusicStoreAngularVersion.Controllers
{
    public class StoreController : ApiController
    {
        // GET api/store
        public IEnumerable<string> Get()
        {
            return new[] { "value1", "value2" };
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

            Mapper.CreateMap<Album, AlbumViewModel>().ForMember(x => x.ArtistName, m => m.MapFrom(album => album.Artist.Name));
            Mapper.CreateMap<Album, AlbumViewModel>().ForMember(x => x.GenreName, m => m.MapFrom(album => album.Genre.Name));

            var albumViewModels = albums.Select(Mapper.DynamicMap<Album, AlbumViewModel>).ToList();

            return this.Request.CreateResponse(HttpStatusCode.OK, albumViewModels);
        }
    }
}
