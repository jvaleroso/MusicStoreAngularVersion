(function () {
    var musicStoreApp = angular.module('musicStoreApp');

    musicStoreApp.controller('GenreListController', ['$scope', '$location', '$routeParams', 'Genre',
        function ($scope, $location, $routeParams, genre) {

            init();

            function init() {
                genre.query(function (response) {
                    $scope.genres = response;
                }, function (error) {
                    console.log(error);
                });
            }

            $scope.$on("GenreController_AddNewGenre", function () {
                genre.query(function (response) {
                    $scope.genres = response;
                }, function (error) {
                    console.log(error);
                });
            });

            $scope.$on('Genre_Selected', function (event, selectedGenre) {
                angular.forEach($scope.genres, function (item) {
                    if (item.name == selectedGenre) item.selected = true;
                    else item.selected = false;
                });

                
            });

        }]);
})();