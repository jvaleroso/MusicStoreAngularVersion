using System;
using System.Collections.Generic;
using System.IO;
using System.Net;
using System.Net.Http;
using System.Net.Http.Headers;
using System.Threading.Tasks;
using System.Web.Http;
using AutoMapper;
using MusicStore.Services;
using MusicStore.Web.Models;

namespace MusicStore.Web.Controllers.Api
{
    [RoutePrefix("api/genre")]
    public class GenreController : ApiController
    {
        private readonly IGenreService _genreService;
        private static readonly HashSet<string> ValidContentTypes =
            new HashSet<string>(StringComparer.OrdinalIgnoreCase)
            {"text/csv", "text/plain", "application/vnd.ms-excel"};

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

        [HttpGet]
        [Route("api/genre/download")]
        public IHttpActionResult DownloadGenres()
        {
            using (var stream = new MemoryStream())
            {
                _genreService.ExportGenreConfig(stream);
                stream.Flush();
                var output = stream.ToArray();

                if (output.Length <= 0) return NotFound();

                var result = new HttpResponseMessage(HttpStatusCode.OK) { Content = new ByteArrayContent(output) };
                result.Content.Headers.ContentType = new MediaTypeHeaderValue("application/octet-stream");
                result.Content.Headers.ContentDisposition = new ContentDispositionHeaderValue("attachment")
                {
                    FileName = string.Format("{0}-Genres.csv", DateTime.Now.ToString("yyyyMMdd-hhmmss"))
                };

                return this.ResponseMessage(result);
            }

        }

        [Route("api/genre/upload")]
        [HttpPost]
        public async Task<HttpResponseMessage> UploadGenres()
        {
            if (!Request.Content.IsMimeMultipartContent())
                throw new HttpResponseException(HttpStatusCode.UnsupportedMediaType);

            var provider = new MultipartMemoryStreamProvider();
            await this.Request.Content.ReadAsMultipartAsync(provider);

            var httpContent = provider.Contents[0];
            if (!ValidContentTypes.Contains(httpContent.Headers.ContentType.ToString()))
                throw new HttpResponseException(HttpStatusCode.UnsupportedMediaType);

            var csvData = await httpContent.ReadAsStreamAsync();
            var result = this._genreService.ImportGenreConfig(csvData);

            if (!result)
                throw new Exception("Error in parsing files");

            var response = this.Request.CreateResponse(HttpStatusCode.OK, new { Status = "Success" });
            response.Content.Headers.ContentType = new MediaTypeHeaderValue("text/plain");
            return response;

        }
    }
}
