using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using AutoMapper;
using MusicStore.Data;
using MusicStore.NHibernate.Repo;

namespace MusicStore.NHibernate.Dao
{
    public class ArtistDao: IArtistDao
    {
        public Artist Save(Artist artist)
        {
            var artistRepo = Mapper.Map<ArtistRepo>(artist);
            NH.Run(s => s.SaveOrUpdate(artistRepo));
            return Mapper.Map<Artist>(artistRepo);
        }

        public void Delete(Artist artist)
        {
            NH.Run(s => s.Delete(Mapper.Map<ArtistRepo>(artist)));
        }

        public Artist GetById(long id)
        {
            return Mapper.Map<Artist>(NH.Select(s => s.Get<AlbumRepo>(id)));
        }

        public IList<Artist> GetList()
        {
            return Mapper.Map<IList<Artist>>(NH.Select(s => s.QueryOver<ArtistRepo>().List()));
        }
    }
}
