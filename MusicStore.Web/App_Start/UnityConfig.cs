using System;
using Microsoft.Practices.Unity;
using MusicStore.Data;
using MusicStore.NHibernate.Dao;
using MusicStore.Services;

namespace MusicStore.Web
{
    /// <summary>
    /// Specifies the Unity configuration for the main container.
    /// </summary>
    public class UnityConfig
    {
        #region Unity Container
        private static readonly Lazy<IUnityContainer> Container = new Lazy<IUnityContainer>(() =>
        {
            var container = new UnityContainer();
            RegisterTypes(container);
            return container;
        });

        /// <summary>
        /// Gets the configured Unity container.
        /// </summary>
        public static IUnityContainer GetConfiguredContainer()
        {
            return Container.Value;
        }
        #endregion

        /// <summary>Registers the type mappings with the Unity container.</summary>
        /// <param name="container">The unity container to configure.</param>
        /// <remarks>There is no need to register concrete types such as controllers or API controllers (unless you want to 
        /// change the defaults), as Unity allows resolving a concrete type even if it was not previously registered.</remarks>
        public static void RegisterTypes(IUnityContainer container)
        {
            // NOTE: To load from web.config uncomment the line below. Make sure to add a Microsoft.Practices.Unity.Configuration to the using statements.
            // container.LoadConfiguration();

            // TODO: Register your types here
            // container.RegisterType<IProductRepository, ProductRepository>();

            #region MusicStore Dao

            container.RegisterType<IAlbumDao, AlbumDao>(new ContainerControlledLifetimeManager());
            container.RegisterType<IGenreDao, GenreDao>(new ContainerControlledLifetimeManager());
            container.RegisterType<IArtistDao, ArtistDao>(new ContainerControlledLifetimeManager());
            container.RegisterType<ICartDao, CartDao>(new ContainerControlledLifetimeManager());
            container.RegisterType<IOrderDao, OrderDao>(new ContainerControlledLifetimeManager());
            container.RegisterType<IOrderDetailDao, OrderDetailDao>(new ContainerControlledLifetimeManager());
            // NOTE: To load from web.config uncomment the line below. Make sure to add a Microsoft.Practices.Unity.Configuration to the using statements.
            // container.LoadConfiguration();

            #endregion //MusicStore Dao

            #region MusicStore Services

            container.RegisterType<IAlbumService, AlbumService>(new ContainerControlledLifetimeManager());
            container.RegisterType<IGenreService, GenreService>(new ContainerControlledLifetimeManager());
            container.RegisterType<IArtistService, ArtistService>(new ContainerControlledLifetimeManager());
            container.RegisterType<ICartService, CartService>(new ContainerControlledLifetimeManager());
            container.RegisterType<IArtistFactory, ArtistFactory>(new ContainerControlledLifetimeManager());

            #endregion //MusicStore Services

        }
    }
}
