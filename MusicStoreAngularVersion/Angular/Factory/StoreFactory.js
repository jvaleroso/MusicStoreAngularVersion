/// <reference path="../core.js" />

app.factory('storeFactory', function ($resource) {
    var url = "Api/Store/";

    return $resource(url, {}, {
        browseByGenre: { method: 'GET', params: { genre:'rock'}, isArray: true}
    });

});