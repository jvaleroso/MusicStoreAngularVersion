(function () {
    var musicStoreApp = angular.module('musicStoreApp');
    
    musicStoreApp.factory('Store', ['$resource', function ($resource) {
        return $resource('Api/album/', {}, {
            browseByGenre: { method: 'GET', params: { genre: '' }, isArray: true }
        });
    }]);
})();