using System.Net.Http;
using System.Web.Http;
using HttpMethodConstraint = System.Web.Http.Routing.HttpMethodConstraint;

namespace MusicStore.Web
{
    public static class WebApiConfig
    {
        public static void Register(HttpConfiguration config)
        {
            config.Routes.MapHttpRoute("GetArtists",
                "api/genre",
                new { controller = "Genre", action = "Get" },
                new { httpMethod = new HttpMethodConstraint(HttpMethod.Get) });

            config.Routes.MapHttpRoute("DownloadArtists",
                "api/artist/download",
                new { controller = "Artist", action = "DownloadArtists" },
                new { httpMethod = new HttpMethodConstraint(HttpMethod.Get) });


            config.Routes.MapHttpRoute("UploadArtists",
                "api/artist/upload",
                new { controller = "Artist", action = "UploadArtists" },
                new { httpMethod = new HttpMethodConstraint(HttpMethod.Post) });

            config.Routes.MapHttpRoute("GetGenres",
                "api/artist",
                new { controller = "Artist", action = "GetArtist" },
                new { httpMethod = new HttpMethodConstraint(HttpMethod.Get) });

            config.Routes.MapHttpRoute("DownloadGenres",
                "api/genre/download",
                new { controller = "Genre", action = "DownloadGenres" },
                new { httpMethod = new HttpMethodConstraint(HttpMethod.Get) });

            config.Routes.MapHttpRoute("UploadGenres",
                "api/genre/upload",
                new { controller = "Genre", action = "UploadGenres" },
                new { httpMethod = new HttpMethodConstraint(HttpMethod.Post) });

            config.Routes.MapHttpRoute("DefaultApi", "api/{controller}/{id}", new { id = RouteParameter.Optional });
        }
    }
}
