(function () {
    var musicStoreApp = angular.module('musicStoreApp');

    musicStoreApp.controller('ArtistController', ['$scope', '$location', '$routeParams', 'Artist',
        function ($scope, $location, $routeParams, artist) {

            init();

            function init() {
                artist.query(function (response) {
                    $scope.artists = response;
                }, function(error) {
                    console.log(error);
                });
            }

            $scope.createNewArtist = function () {
                artist.save($scope.newArtist, function () {
                    $location.path('/StoreManager');
                }, function (error) {
                    console.log(error);
                });
            };
        }]);

})();


