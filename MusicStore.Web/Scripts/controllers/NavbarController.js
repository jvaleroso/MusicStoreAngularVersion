(function() {
    var musicStoreApp = angular.module('musicStoreApp');

    musicStoreApp.controller('NavbarController', ['$scope', '$location', function ($scope, $location) {

        $scope.getClass = function (path) {
            if ($location.path().substr(0, path.length) === path)
                return true;
            else
                return false;
        };
    }]);
})();


