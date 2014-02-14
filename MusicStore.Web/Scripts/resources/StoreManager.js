(function () {
    var musicStoreApp = angular.module('musicStoreApp');

    musicStoreApp.factory('StoreManager', ['$resource', function ($resource) {
        return $resource('/api/storemanager/', {}, {
            getGenres: { method: 'GET', url: '/api/genre/', isArray: true },
            getArtist: { method: 'GET', url: '/api/artist/', isArray: true },
            saveArtist: { method: 'POST', url: '/api/artist', isArray: false },
            saveAlbum: { method: 'POST', url: '/api/album/createalbum', isArray: false },
            getAlbums: { method: 'GET', url: '/api/album/', isArray: true },
            getById: { method: 'GET', params: { id: '' }, url: '/api/album/details/:id', isArray: false },
        });
    }]);
})();