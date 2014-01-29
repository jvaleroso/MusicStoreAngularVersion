using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using AutoMapper;
using MusicStore.Web.Models;

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
            Mapper.CreateMap<Genre, GenreViewModel>();
            Mapper.CreateMap<GenreViewModel, Genre>();
            //Mapper.CreateMap<Album, AlbumViewModel>()
            //    .ForMember(x => x.ArtistName, m => m.MapFrom(album => album.Artist.Name))
            //    .ForMember(x => x.GenreName, m => m.MapFrom(album => album.Genre.Name));
            //Mapper.CreateMap<AlbumViewModel, Album>();
        }


    }
}