﻿using Core.Entity;
using Core.Repository;
using NHibernate.Criterion;
using NHibernate.SqlCommand;
using System.Collections.Generic;

namespace Core.Manager
{
    public class AlbumManager : Repository<Album>
    {
        public IList<Album> GetAlbumsByGenre(string genre)
        {
            using (var session = NHibernateBase.OpentSession())
            {
                var queryOver = GetQueryOverByArtistOrGenre(genre);
                return queryOver.GetExecutableQueryOver(session).List();
            }
        }

        public IList<Album> GetAllAlbums()
        {
            var queryOver = GetQueryOverByArtistOrGenre();

            using (var session = NHibernateBase.OpentSession())
            {
                return queryOver.GetExecutableQueryOver(session).List();
            }
        }

        public Album GetAlbumWithGenreById(int id)
        {
            var queryOver = GetQueryOverByArtistOrGenre("", "", id);
            using (var session = NHibernateBase.OpentSession())
            {
                return queryOver.GetExecutableQueryOver(session).SingleOrDefault();
            }
        }


        //public IList<Album> GetTopSellingAlbums(int count)
        //{
        //    Album albumAlias = null;
        //    OrderDetail orderDetailsAlias = null;

        //    var queryOver = QueryOver.Of<Album>(() => albumAlias)
        //        .JoinAlias(() => albumAlias.OrderDetails, () => orderDetailsAlias, JoinType.InnerJoin)
        //        .Select(Projections.Group<Album>(a => a.Id))
        //        .OrderBy(Projections.Count<Album>(a => a.OrderDetails))
        //        .Desc.Take(5);

        //    using (var session = NHibernateBase.OpentSession())
        //    {
        //        return queryOver.GetExecutableQueryOver(session).List();
        //    }
        //}


        public QueryOver<Album, Album> GetQueryOverByArtistOrGenre(string genreName = "", string artistName = "", int albumId = 0)
        {
            Artist artistAlias = null;
            Genre genreAlias = null;
            Album albumAlias = null;
            OrderDetail odAlias = null;

            var queryOver = QueryOver.Of(() => albumAlias)
                .JoinAlias(() => albumAlias.Genre, () => genreAlias, JoinType.LeftOuterJoin)
                .JoinAlias(() => albumAlias.Artist, () => artistAlias, JoinType.LeftOuterJoin);

            if (!string.IsNullOrWhiteSpace(genreName))
                queryOver.And(() => genreAlias.Name == genreName);

            if (!string.IsNullOrWhiteSpace(artistName))
                queryOver.And(() => artistAlias.Name == artistName);

            if (albumId != 0)
                queryOver.Where(() => albumAlias.Id == albumId);

            return queryOver;
        }
    }
}
