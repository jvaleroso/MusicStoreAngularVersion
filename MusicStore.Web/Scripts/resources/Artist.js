(function () {
    var musicStoreApp = angular.module('musicStoreApp');

    musicStoreApp.factory('Artist', ['$resource', function ($resource) {
        return $resource('/api/Artist/');
    }]);
})();