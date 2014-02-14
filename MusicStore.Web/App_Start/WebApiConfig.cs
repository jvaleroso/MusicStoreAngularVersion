using System.Web.Http;
using System.Web.Routing;

namespace MusicStore.Web.App_Start
{
    public static class WebApiConfig
    {
        public static void Register(HttpConfiguration config)
        {
            config.Routes.MapHttpRoute(
                "StoreAlbumRequests",
                "api/album",
                new { controller = "Album", action = "GetByGenre" },
                new { httpMethod = new HttpMethodConstraint("POST") });

            config.Routes.MapHttpRoute(
                "Genre",
                "api/genre",
                new { controller = "Genre", action = "Get" },
                new { httpMethod = new HttpMethodConstraint("GET") });

            config.Routes.MapHttpRoute(
                "AlbumRequest",
                "api/store",
                new { controller = "Album", action = "GetAlbumByGenre" },
                new { httpMethod = new HttpMethodConstraint("GET") });

            config.Routes.MapHttpRoute(
                "GetAlbumById",
                "api/album/details",
                new {controller = "Album", action = "GetById"},
                new {httpMethod = new HttpMethodConstraint("GET")});

            config.Routes.MapHttpRoute(
                "CreateAlbum",
                "api/album/createalbum",
                new { controller = "Album", action = "CreateAlbum" },
                new {httpMethod = new HttpMethodConstraint("POST")});

            config.Routes.MapHttpRoute(
                "CreateArtist",
                "api/Artist",
                new { controller = "Artist", action = "CreateArtist" },
                new { httpMethod = new HttpMethodConstraint("POST") });

            config.Routes.MapHttpRoute(
                "CreateGenre",
                "api/genre/creategenre",
                new { controller = "Genre", action = "CreateGenre" },
                new { httpMethod = new HttpMethodConstraint("POST") });

            config.Routes.MapHttpRoute(
                name: "DefaultApi",
                routeTemplate: "api/{controller}/{id}",
                defaults: new { id = RouteParameter.Optional }
                );
        }
    }
}
