using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using AutoMapper;
using NHibernate.Mapping;

namespace MusicStore.NHibernate.Repo
{
    public class NHRepoAutoMapperProfile : Profile
    {
        protected override void Configure()
        {
            Mapper.CreateMap<Album, AlbumRepo>();
            Mapper.CreateMap<AlbumRepo, Album>();
            Mapper.CreateMap<Artist, ArtistRepo>();
            Mapper.CreateMap<ArtistRepo, Artist>();
            Mapper.CreateMap<Genre, GenreRepo>();
            Mapper.CreateMap<GenreRepo, Genre>();
            Mapper.CreateMap<Cart, CartRepo>();
            Mapper.CreateMap<CartRepo, Cart>();
            Mapper.CreateMap<Order, OrderRepo>();
            Mapper.CreateMap<OrderRepo, Order>();
            Mapper.CreateMap<OrderDetail, OrderDetailRepo>();
            Mapper.CreateMap<OrderDetailRepo, OrderDetail>();
        }
    }
}
