(function () {
    var musicStoreApp = angular.module('musicStoreApp');

    musicStoreApp.controller('GenreController', ['$scope', '$location', '$routeParams', 'Genre',
        function ($scope, $location, $routeParams, genre) {
            genre.query(function (response) {
                $scope.genres = response;
            }, function (error) {
                console.log(error);
            });
            
            $scope.createNewGenre = function () {
                genre.createGenre($scope.newGenre, function () {
                    $location.path('/StoreManager');
                }, function (error) {
                    console.log(error);
                });
            };
            
            $scope.getClass = function (musicGenre) {
                if ($routeParams.genre == musicGenre) return true;
                else return false;
            };
        }]);
})();

