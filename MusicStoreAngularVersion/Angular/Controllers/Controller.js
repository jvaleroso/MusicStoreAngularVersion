/// <reference path="../core.js" />

app.controller('NavbarController', function ($scope, $location) {

    $scope.getClass = function (path) {
        if ($location.path().substr(0, path.length) === path)
            return true;
        else
            return false;
    };
});

app.controller('HomeController', function () { });

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
    $scope.getClass = function (genre) {
        if ($routeParams.genre == genre)
            return true;
        else
            return false;
    };
});

app.controller('AdminController', function () { });

app.controller('StoreManagerController', function ($scope, $location, $routeParams, storeManagerFactory) {
    $scope.albums = storeManagerFactory.albums.query();
    $scope.genres = storeManagerFactory.genres.query();
    $scope.artists = storeManagerFactory.artists.query();
    $scope.selectedArtist = [];
    $scope.selectedGenre = [];
    $scope.album = {
        Title: '',
        Price: '',
        AlbumArtURL: '',
        DateCreated: new Date(),
        Genre: [],
        Artist: []
    };

    $scope.operation = '';

    $scope.save = function (album) {
        if ($scope.operation === 'insert') {
            storeManagerFactory.album.save(album, function success() {
                $scope.albums = storeManagerFactory.albums.query();
                $scope.album = [];
            }, function err() {
            });

        } else if ($scope.operation === 'update') {
            storeManagerFactory.updatedAlbum.update(album, function success() {
            }, function err() {
            });
        }
    };

    $scope.edit = function (id) {
        $scope.operation = 'update';

        for (var i = 0; i < $scope.albums.length; i++) {
            if ($scope.albums[i].Id === id) {
                $scope.album = $scope.albums[i];
                break;
            }
        }
    };

    $scope.setOperation = function (operation) {
        $scope.operation = operation;
        if (operation == 'insert') {
            $scope.album = {
                Title: '',
                Price: '',
                AlbumArtURL: '',
                DateCreated: new Date(),
                Genre: [],
                Artist: []
            };
        }
    };
});