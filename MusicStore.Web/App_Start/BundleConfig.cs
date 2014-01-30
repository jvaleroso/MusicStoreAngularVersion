using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Optimization;

namespace MusicStore.Web.App_Start
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
                "~/Scripts/respond.js",
                "~/Scripts/bootstrap.js"));

            bundles.Add(new StyleBundle("~/Content/css/bootstrap").Include(
                "~/Content/site.css",
                "~/Content/css/bootstrap.css",
                "~/Content/css/bootstrap-responsive.css"));

            bundles.Add(new ScriptBundle("~/bundles/angular").Include(
                "~/Scripts/angular.js",
                "~/Scripts/angular-route.js",
                "~/Scripts/angular-resource.js"));

            bundles.Add(new ScriptBundle("~/bundles/musicstore-app").Include(
                "~/Scripts/app.js",
                "~/Scripts/resources/Genre.js",
                "~/Scripts/resources/Store.js",
                "~/Scripts/resources/StoreManager.js",
                "~/Scripts/resources/Artist.js",
                "~/Scripts/controllers/GenreController.js",
                "~/Scripts/controllers/GenreListController.js",
                "~/Scripts/controllers/HomeController.js",
                "~/Scripts/controllers/NavbarController.js",
                "~/Scripts/controllers/StoreController.js",
                "~/Scripts/controllers/StoreManagerController.js",
                "~/Scripts/controllers/ArtistController.js"));

            BundleTable.EnableOptimizations = true;
        }
    }
}