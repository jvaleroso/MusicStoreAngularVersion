(function () {
    var musicStoreApp = angular.module('musicStoreApp');

    musicStoreApp.controller('AlbumDetailsController', ['$scope', '$routeParams', 'StoreManager',
        function ($scope, $routeParams, storeManager) {

            init();

            function init() {
                storeManager.getById({Id: $routeParams.id},function (response) {
                    $scope.album = response;
                }, function (error) {
                    console.log(error);
                });
            }
        }]);

})();


