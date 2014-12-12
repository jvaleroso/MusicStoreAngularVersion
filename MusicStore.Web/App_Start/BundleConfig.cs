using System.Web.Optimization;

namespace MusicStore.Web
{
    public class BundleConfig
    {
        // For more information on bundling, visit http://go.microsoft.com/fwlink/?LinkId=301862
        public static void RegisterBundles(BundleCollection bundles)
        {
            bundles.Add(new ScriptBundle("~/bundles/jquery").Include(
                "~/Scripts/jquery-{version}.js"));

            bundles.Add(new ScriptBundle("~/bundles/jqueryval").Include(
                "~/Scripts/jquery.validate*"));

            // Use the development version of Modernizr to develop with and learn from. Then, when you're
            // ready for production, use the build tool at http://modernizr.com to pick only the tests you need.
            bundles.Add(new ScriptBundle("~/bundles/modernizr").Include(
                "~/Scripts/modernizr-*"));

            bundles.Add(new ScriptBundle("~/bundles/bootstrap").Include(
                "~/Scripts/bootstrap.min.js"));

            bundles.Add(new StyleBundle("~/Content/bootstrap").Include(
                "~/Content/bootstrap.min.css",
                "~/Content/bootstrap-theme.min.css",
                "~/Content/site.css"));

            bundles.Add(new StyleBundle("~/Content/fontawesome").Include(
                "~/Content/font-awesome.css"));

            bundles.Add(new StyleBundle("~/Content/jQueryFileUpload").Include(
                "~/Content/jQuery.FileUpload/css/jquery.fileupload.css",
                "~/Content/jQuery.FileUpload/css/jquery.fileupload-ui.css"));

            bundles.Add(new StyleBundle("~/Content/themes/base/css").IncludeDirectory("~/Content/themes/base", "*.css"));

            bundles.Add(new ScriptBundle("~/bundles/angular").Include(
                "~/Scripts/angular.js",
                "~/Scripts/angular-route.js",
                "~/Scripts/angular-resource.js"));

            bundles.Add(new ScriptBundle("~/bundles/restangular").Include(
                "~/Scripts/restangular.js",
                "~/Scripts/lodash.js"
                ));

            bundles.Add(new ScriptBundle("~/bundles/musicstore-app").Include(
                "~/Scripts/app.js",
                "~/Scripts/resources/GenreService.js",
                "~/Scripts/resources/ArtistService.js",
                "~/Scripts/resources/AlbumService.js",
                "~/Scripts/controllers/GenreController.js",
                "~/Scripts/controllers/GenreListController.js",
                "~/Scripts/controllers/HomeController.js",
                "~/Scripts/controllers/NavbarController.js",
                "~/Scripts/controllers/StoreController.js",
                "~/Scripts/controllers/StoreManagerController.js",
                "~/Scripts/controllers/AlbumDetailsController.js",
                "~/Scripts/controllers/ArtistController.js"));

        }
    }
}