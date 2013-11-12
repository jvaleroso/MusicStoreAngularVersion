/// <reference path="../core.js" />


app.controller('NavbarController', function ($scope, $location) {

    $scope.getClass = function(path) {
        if ($location.path().substr(0, path.length) === path)
            return true;
        else
            return false;
    };
});

app.controller('HomeController', function ($scope, $location) {

});

app.controller('StoreController', function ($scope, $location, $routeParams, storeFactory) {
    $scope.genre = $routeParams.genre;
    $scope.path = $location.path();

    initialize();

    function initialize() {
        if ($routeParams.genre != undefined)
            $scope.albums = storeFactory.browseByGenre({ genre: $routeParams.genre });
        else
            $scope.albums = storeFactory.getNewestAlbums();
    }

});


app.controller('GenreController', function ($scope, $location, $routeParams, genreFactory) {
    $scope.genres = genreFactory.getGenres();
    $scope.getClass = function(genre) {
        if ($routeParams.genre == genre)
            return true;
        else
            return false;
    };
});

app.controller('AdminController', function($scope, $location, $routeParams) {
 
    
});


app.controller('StoreManagerController', function ($scope, $location, $routeParams, storeManagerFactory) {
    $scope.albums = storeManagerFactory.albums.query();
    $scope.genres = storeManagerFactory.genres.query();
    $scope.artists = storeManagerFactory.artists.query();
    $scope.artist = [];
    $scope.genre = [];
    $scope.album = {
        title: "",
        price: "",
        albumArtURL: "",
        dateCreated: new Date(),
        genre: [],
        album: []
    };

    $scope.save = function (album) {
        storeManagerFactory.album.save(album, function success() {
            $scope.albums = storeManagerFactory.albums.query();
            $scope.album = [];
        }, function err() { });
    }
});


