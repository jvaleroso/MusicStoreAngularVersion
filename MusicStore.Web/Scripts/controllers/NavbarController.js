(function() {
    var musicStoreApp = angular.module('musicStoreApp');

    musicStoreApp.controller('NavbarController', ['$scope', '$location', function ($scope, $location) {

        $scope.getClass = function (path) {
            var url = $location.path();
            if (url.substr(0, path.length) === path && path.length === url.length)
                return true;
            else
                return false;
        };
    }]);
})();


