(function () {
    var musicStoreApp = angular.module('musicStoreApp');

    musicStoreApp.factory('Genre', ['$resource', function ($resource) {
        return $resource('/api/genre/', {}, {
            createGenre: { method: 'POST', url: '/api/genre/creategenre', isArray: false }
        });
    }]);
})();