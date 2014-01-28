(function() {
    var musicStoreApp = angular.module('musicStoreApp');

    musicStoreApp.controller('GenreListController', ['$scope', '$location', '$routeParams', 'Genre',
        function($scope, $location, $routeParams, genre) {

            init();

            function init() {
                genre.query(function(response) {
                    $scope.genres = response;
                }, function(error) {
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
            
        }]);
})();
