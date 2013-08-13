using Core.Entity;
using Core.Repository;
using NHibernate;
using NHibernate.Criterion;
using NHibernate.SqlCommand;
using System.Collections;
using System.Collections.Generic;
using System.Linq;

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
            IList result;

            using (var session = NHibernateBase.OpentSession())
            {
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
            Genre genreAlias = null;
            IList<Album> albumAlias = null;

            var query = QueryOver.Of<Genre>(() => genreAlias)
                .JoinAlias(() => genreAlias.Albums, () => albumAlias, JoinType.InnerJoin);

            if (!string.IsNullOrWhiteSpace(genreName))
                query.And(() => genreAlias.Name == genreName);

            return query;

        }
    }
}
