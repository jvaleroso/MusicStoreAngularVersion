using System.Collections.Generic;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using AutoMapper;
using MusicStore.Services;
using MusicStore.Web.Models;

namespace MusicStore.Web.Controllers.Api
{
    public class GenreController : ApiController
    {
        private readonly IGenreService _genreService;

        public GenreController(IGenreService genreService)
        {
            _genreService = genreService;
        }

        [HttpGet]
        public HttpResponseMessage Get()
        {
            var genres = Mapper.Map<IList<GenreViewModel>>(_genreService.GetList());
            return Request.CreateResponse(HttpStatusCode.OK, genres);
        }

        [HttpPost]
        public HttpResponseMessage CreateGenre(Genre genre)
        {
            var savedGenre = _genreService.Save(genre);
            return Request.CreateResponse(HttpStatusCode.OK, savedGenre);
        }
    }
}
