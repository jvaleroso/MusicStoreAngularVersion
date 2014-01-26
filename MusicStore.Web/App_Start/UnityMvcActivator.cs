using System.Web.Http;
using MusicStore.Web.App_Start;
using Unity.WebApi;
using WebActivatorEx;

[assembly: PreApplicationStartMethod(typeof(UnityWebActivator), "Start")]

namespace MusicStore.Web.App_Start
{
    /// <summary>Provides the bootstrapping for integrating Unity with ASP.NET MVC.</summary>
    public static class UnityWebActivator
    {
        /// <summary>Integrates Unity when the application starts.</summary>
        public static void Start() 
        {
            var resolver = new UnityDependencyResolver(UnityConfig.GetConfiguredContainer());
            GlobalConfiguration.Configuration.DependencyResolver = resolver;
        }
    }
}