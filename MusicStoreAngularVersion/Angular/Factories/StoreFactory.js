/// <reference path="../core.js" />
app.factory('storeFactory', function ($resource) {
    var url = 'Api/Store/';

    return $resource(url, {},
        {
            browseByGenre: { method: 'GET', params: { genre: '' }, isArray: true },
            getNewestAlbum: { method: 'GET', isArray: true }
        });
});

app.factory('genreFactory', function ($resource) {
    var url = 'Api/Genre/';

    return $resource(url, {},
        {
            getGenres: { method: 'GET', isArray: true }
        });

});
