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
                "api/artist",
                new {controller = "Artist", action = "GetArtist"},
                new {httpMethod = new HttpMethodConstraint(HttpMethod.Get)});

            config.Routes.MapHttpRoute("DownloadArtists",
                "api/artist/download",
                new { controller = "Artist", action = "DownloadArtists" },
                new { httpMethod = new HttpMethodConstraint(HttpMethod.Get) });


            config.Routes.MapHttpRoute("UploadArtists",
                "api/artist/upload",
                new { controller = "Artist", action = "UploadArtists" },
                new { httpMethod = new HttpMethodConstraint(HttpMethod.Get) });

            config.Routes.MapHttpRoute("DefaultApi", "api/{controller}/{id}", new { id = RouteParameter.Optional });
        }
    }
}
