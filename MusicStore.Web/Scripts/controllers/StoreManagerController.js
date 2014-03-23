(function () {
    var musicStoreApp = angular.module('musicStoreApp');

    musicStoreApp.controller('StoreManagerController', ['$scope', '$location', '$routeParams', 'StoreManager',
        function ($scope, $location, $routeParams, storeManager) {

            init();

            function init() {
                if (isNaN($routeParams.id)) {
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
                } else {

                    storeManager.get({ id: $routeParams.id }, function (album) {
                        $scope.album = album;
                    }, function (error) {
                        console.log(error);
                    });
                }
            }

            $scope.createAlbum = function (album) {
                storeManager.saveAlbum(album, function () {
                    storeManager.getAlbums(function (response) {
                        $scope.albums = [];
                        $scope.albums = response;
                    });
                }, function (error) {
                    console.log(error);
                });
            };

            $scope.viewDetails = function () {
                storeManager.get({ albumid: $routeParams.id }, function success(album) {
                    $scope.album = album;
                }, function (error) {
                    console.log(error);
                });
            };

            $scope.editAlbum = function (album) {
                $scope.newAlbum = album;
            };
        }]);

})();


