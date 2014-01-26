using System;
using Microsoft.Practices.Unity;
using Microsoft.Practices.Unity.Configuration;
using MusicStore.Data;
using MusicStore.NHibernate.Dao;
using MusicStore.Services;

namespace MusicStore.Web.App_Start
{
    /// <summary>
    /// Specifies the Unity configuration for the main container.
    /// </summary>
    public class UnityConfig
    {
        private static readonly Lazy<IUnityContainer> Container = new Lazy<IUnityContainer>(CreateContainer);

        /// <summary>
        /// Gets the configured Unity container.
        /// </summary>
        public static IUnityContainer GetConfiguredContainer()
        {
            return Container.Value;
        }

        public static UnityContainer CreateContainer()
        {
            var container = new UnityContainer();
            container.RegisterInstance(container);

            #region MusicStore Dao

            container.RegisterType<IAlbumDao, AlbumDao>(new ContainerControlledLifetimeManager());
            container.RegisterType<IGenreDao, GenreDao>(new ContainerControlledLifetimeManager());
            container.RegisterType<IArtistDao, ArtistDao>(new ContainerControlledLifetimeManager());
            container.RegisterType<ICartDao, CartDao>(new ContainerControlledLifetimeManager());
            container.RegisterType<IOrderDao, OrderDao>(new ContainerControlledLifetimeManager());
            container.RegisterType<IOrderDetailDao, OrderDetailDao>(new ContainerControlledLifetimeManager());

            #endregion //MusicStore Dao

            #region MusicStore Services

            container.RegisterType<IAlbumService, AlbumService>(new ContainerControlledLifetimeManager());
            container.RegisterType<IGenreService, GenreService>(new ContainerControlledLifetimeManager());
            container.RegisterType<IArtistService, ArtistService>(new ContainerControlledLifetimeManager());
            container.RegisterType<ICartService, CartService>(new ContainerControlledLifetimeManager());

            #endregion //MusicStore Services

            return container;
        }
    }
}
