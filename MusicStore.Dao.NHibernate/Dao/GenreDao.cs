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
    public class GenreDao: IGenreDao
    {
        public Genre Save(Genre genre)
        {
            var genreRepo = Mapper.Map<GenreRepo>(genre);
            NH.Run(s => s.SaveOrUpdate(genreRepo));
            return Mapper.Map<Genre>(genreRepo);
        }

        public void Delete(Genre genre)
        {
            NH.Run(s => s.Delete(Mapper.Map<GenreRepo>(genre)));
        }

        public Genre GetById(long id)
        {
            return Mapper.Map<Genre>(NH.Select(s => s.Get<GenreRepo>(id)));
        }

        public IList<Genre> GetList()
        {
            return Mapper.Map<IList<Genre>>(NH.Select(s => s.QueryOver<GenreRepo>().List()));
        }
    }
}
