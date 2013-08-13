using AutoMapper;
using Core.Entity;
using Core.Manager;
using System.Collections.Generic;
using System.Net;
using System.Net.Http;
using System.Web.Http;
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
            //var albums = new AlbumManager().GetAlbumsByGenre(genre);
            //_genre.Albums = new List<Album>();
            //var albumVm = new List<AlbumViewModel>();
            //Mapper.CreateMap<Album, AlbumViewModel>().ForMember(x => x.ArtistName, m => m.MapFrom(album => album.Artist.Name));
            //Mapper.CreateMap<Album, AlbumViewModel>().ForMember(x => x.GenreName, m => m.MapFrom(album => album.Genre.Name));

            //foreach (var album in albums)
            //    albumVm.Add(Mapper.DynamicMap<Album, AlbumViewModel>(album));

            var _genre = new GenreManager().GetGenreByName(genre);
            var json = JsonConvert.SerializeObject(_genre);

           HttpResponseMessage response = Request.CreateResponse(HttpStatusCode.OK, _genre);
           return response;
        }
    }
}
