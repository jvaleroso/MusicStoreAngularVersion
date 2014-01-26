using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using AutoMapper;

namespace MusicStore.Web.App_Start
{
    public class ViewModelAutoMapperProfile : Profile
    {
        protected override void Configure()
        {
            Mapper.CreateMap<DateTime, DateTimeOffset>()
                .ConvertUsing(d => DateTime.SpecifyKind(d, DateTimeKind.Utc));
            Mapper.CreateMap<DateTimeOffset, DateTime>()
                .ConvertUsing(v => v.UtcDateTime);
        }
    }
}