using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Net.Http.Headers;
using System.Threading.Tasks;
using System.Web.Http;
using MusicStore.Services;

namespace MusicStore.Web.Controllers.Api
{
    public class ArtistController : ApiController
    {
        private static readonly HashSet<string> ValidContentTypes =
            new HashSet<string>(StringComparer.OrdinalIgnoreCase) { "text/csv", "text/plain", "application/vnd.ms-excel" };
        private readonly IArtistService _artistService;

        public ArtistController(IArtistService artistService)
        {
            _artistService = artistService;
        }

        public HttpResponseMessage Get()
        {
            var artist = _artistService.GetList();

            return Request.CreateResponse(HttpStatusCode.OK, artist.OrderBy(a => a.Name));
        }

        [HttpPost]
        public HttpResponseMessage CreateArtist(Artist artist)
        {
            var savedArtist = _artistService.Save(artist);

            return Request.CreateResponse(HttpStatusCode.OK, savedArtist);
        }

        [HttpPost]
        public async Task<HttpResponseMessage> UploadArtists()
        {
            if (!this.Request.Content.IsMimeMultipartContent())
                throw new HttpResponseException(HttpStatusCode.UnsupportedMediaType);

            var provider = new MultipartMemoryStreamProvider();
            await this.Request.Content.ReadAsMultipartAsync(provider);

            var httpContent = provider.Contents[0];
            if (!ValidContentTypes.Contains(httpContent.Headers.ContentType.ToString()))
                throw new HttpResponseException(HttpStatusCode.UnsupportedMediaType);

            var csvData = await httpContent.ReadAsStreamAsync();
            var result = this._artistService.UpdloadArtists(csvData);

            if (!result)
                throw new Exception("Error in parsing files");

            var response = this.Request.CreateResponse(HttpStatusCode.OK, new { Status = "Success" });
            response.Content.Headers.ContentType = new MediaTypeHeaderValue("text/plain");
            return response;

        }

        [HttpGet]
        public HttpResponseMessage DownloadArtists()
        {
            byte[] output;
            using (var stream = new MemoryStream())
            {
                this._artistService.DownloadArtists(stream);
                stream.Flush();
                output = stream.ToArray();
            }

            var result = new HttpResponseMessage(HttpStatusCode.OK) { Content = new ByteArrayContent(output) };
            result.Content.Headers.ContentType = new MediaTypeHeaderValue("application/octet-stream");
            result.Content.Headers.ContentDisposition = new ContentDispositionHeaderValue("attachment")
            {
                FileName = string.Format("{0}-Artists.csv", DateTime.Now.ToString("yyyyMMdd-hhmmss"))
            };

            return result;
        }
    }
}
