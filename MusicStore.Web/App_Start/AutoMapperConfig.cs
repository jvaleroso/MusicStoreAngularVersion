using AutoMapper;
using MusicStore.NHibernate.Repo;

namespace MusicStore.Web
{
    public static class AutoMapperConfig
    {
        public static void Initialize()
        {
            Mapper.Initialize(config =>
            {
                config.AddProfile<NHRepoAutoMapperProfile>();
                config.AddProfile<ViewModelAutoMapperProfile>();
            });
        }
    }
}