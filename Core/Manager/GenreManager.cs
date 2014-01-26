using MusicStore;
using Core.Repository;
using NHibernate;
using NHibernate.Criterion;
using System.Collections;

namespace Core.Manager
{
    public class GenreManager : Repository<Genre>
    {
        public Genre GetGenreByName(string name)
        {
            using (var session = NHibernateBase.OpentSession())
            {
                var queryOver = GetQueryForGenre(name);
                return queryOver.GetExecutableQueryOver(session).SingleOrDefault();
            }
        }

        public IList GetGenreandAlbums()
        {
            using (var session = NHibernateBase.OpentSession())
            {
                IList result;
                using (var tx = session.BeginTransaction())
                {
                    IQuery query = session.CreateQuery(
                        "from Genre as genre " +
                        "inner join genre.Albums as album");

                    result = query.List();
                    tx.Commit();
                }

                return result;
            }
        }


        private QueryOver<Genre, Genre> GetQueryForGenre(string genreName)
        {
            var query = QueryOver.Of<Genre>();
            if (!string.IsNullOrWhiteSpace(genreName))
                query.And(genre => genre.Name == genreName);

            return query;
        }
    }
}
