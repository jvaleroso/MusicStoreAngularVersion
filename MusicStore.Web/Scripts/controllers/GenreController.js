(function () {
    var musicStoreApp = angular.module('musicStoreApp');

    musicStoreApp.controller('GenreController', ['$rootScope', '$scope', '$location', '$routeParams', 'Genre',
        function ($rootScope, $scope, $location, $routeParams, genre) {

            init();

            function init() {
                genre.query(function (response) {
                    $scope.genres = response;
                }, function (error) {
                    console.log(error);
                });
            }

            $scope.createNewGenre = function (newGenre) {
                genre.createGenre(newGenre, function () {
                    $rootScope.$broadcast('GenreController_AddNewGenre');
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

