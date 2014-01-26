(function () {
    var musicStoreApp = angular.module('musicStoreApp');

    musicStoreApp.controller('StoreController', ['$scope', '$location', '$routeParams', 'Store',
        function ($scope, $location, $routeParams, store) {
            $scope.genre = $routeParams.genre;
            $scope.path = $location.path();

            initialize();

            function initialize() {
                if ($routeParams.genre != undefined)
                    store.browseByGenre({ genre: $routeParams.genre }, function (response) {
                        $scope.albums = response;
                    }, function (error) {
                        console.log(error);
                    });
                else {
                    store.query(function (response) {
                        $scope.albums = response;
                    }, function (error) {
                        console.log(error);
                    });
                }
            }
            

        }]);
})();

