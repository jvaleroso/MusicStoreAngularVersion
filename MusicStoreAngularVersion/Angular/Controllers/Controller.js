/// <reference path="../core.js" />


app.controller('NavbarController', function ($scope, $location) {
    $scope.getClass = function (path) {
        if ($location.path().substr(0, path.length) === path)
            return true;
        else
            return false;
    }
});

app.controller('HomeController', function ($scope, $location) {

});

app.controller('StoreController', function ($scope, $location, $routeParams, storeFactory) {
    $scope.genre = $routeParams.genre;
    $scope.path = $location.path();

    init();

    function init() {
        $scope.albums = storeFactory.browseByGenre({ genre: $routeParams.genre });
    }

});

app.controller('GenreController', function ($scope, $location) {
    $scope.genres = ['Acapella', 'Rock', 'Acoustic', 'Ballad'];
});


