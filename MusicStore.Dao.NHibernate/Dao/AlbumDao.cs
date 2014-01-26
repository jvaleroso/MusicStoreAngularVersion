using AutoMapper;
using MusicStore.Data;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using MusicStore.NHibernate.Repo;

namespace MusicStore.NHibernate.Dao
{
    public class AlbumDao : IAlbumDao
    {
        public Album Save(Album album)
        {
            var albumRepo = Mapper.Map<AlbumRepo>(album);
            NH.Run(s => s.SaveOrUpdate(albumRepo));
            return Mapper.Map<Album>(albumRepo);
        }

        public void Delete(Album album)
        {
            var albumRepo = Mapper.Map<AlbumRepo>(album);
            NH.Run(s => s.Delete(albumRepo));
        }

        public Album GetById(long id)
        {
            return Mapper.Map<Album>(NH.Select(s => s.Get<AlbumRepo>(id)));
        }

        public IList<Album> GetList()
        {
            return Mapper.Map<IList<Album>>(NH.Select(s => s.QueryOver<AlbumRepo>().List()));
        }

        public IList<Album> GetByGenre(string genre)
        {
            return Mapper.Map<IList<Album>>(NH.Select(s => s.QueryOver<AlbumRepo>()
                .JoinQueryOver(album => album.Genre)
                .Where(g=>g.Name == genre).List()));
        }
    }
}
