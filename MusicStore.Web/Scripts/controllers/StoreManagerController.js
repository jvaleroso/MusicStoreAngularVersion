(function () {
    var musicStoreApp = angular.module('musicStoreApp');

    musicStoreApp.controller('StoreManagerController', ['$scope', '$location', '$routeParams', 'StoreManager',
        function ($scope, $location, $routeParams, storeManager) {

            init();

            function init() {
                storeManager.getAlbums(function (response) {
                    $scope.albums = [];
                    $scope.albums = response;
                }, function (error) {
                    console.log(error);
                });
                storeManager.getArtist(function (response) {
                    $scope.artists = [];
                    $scope.artists = response;
                }, function (error) {
                    console.log(error);
                });
                storeManager.getGenres(function (response) {
                    $scope.genres = [];
                    $scope.genres = response;
                }, function (error) {
                    console.log(error);
                });
            }

            $scope.createAlbum = function () {
                storeManager.saveAlbum($scope.newAlbum, function success() {
                    storeManager.getAlbums(function(response) {
                        $scope.albums = [];
                        $scope.albums = response;
                    });
                }, function (error) {
                    console.log(error);
                });
            };
           
            $scope.editAlbum = function (album) {
                $scope.newAlbum = album;
            };
        }]);

})();


