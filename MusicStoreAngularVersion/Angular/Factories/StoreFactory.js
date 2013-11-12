/// <reference path="../core.js" />
app.factory('storeFactory', function ($resource) {
    var url = 'Api/Album/';

    return $resource(url, {},
        {
            browseByGenre: { method: 'GET', params: { genre: '' }, isArray: true },
            getNewestAlbums: { method: 'GET', isArray: true }
        });
});

app.factory('genreFactory', function ($resource) {
    var url = 'Api/Genre/';

    return $resource(url, {},
        {
            getGenres: { method: 'GET', isArray: true }
        });

});

app.factory('storeManagerFactory', function ($resource) {

    var genreURL = 'Api/Genre/';
    var artistURL = 'Api/Artist/';
    var albumURL = 'Api/Album/';

    return {
        albums: $resource(albumURL, {}, { query: { method: 'GET', isArray: true } }),
        genres: $resource(genreURL, {}, { query: { method: 'GET', isArray: true } }),
        artists: $resource(artistURL, {}, { query: { method: 'GET', isArray: true } }),
        album: $resource(albumURL, {}, { save: { method: 'POST' } })
    };
});

