using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using AutoMapper;
using MusicStore.NHibernate.Repo;

namespace MusicStore.Web.App_Start
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