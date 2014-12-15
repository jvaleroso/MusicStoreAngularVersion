var MusicStore;
(function (MusicStore) {
    (function (Controllers) {
        var EditAlbumController = (function () {
            function EditAlbumController($routeParams, $location, albumService, artistService, genreService) {
                var _this = this;
                this.$routeParams = $routeParams;
                this.$location = $location;
                this.albumService = albumService;
                this.artistService = artistService;
                this.genreService = genreService;
                if (isNaN($routeParams.albumId)) {
                    this.$location.path('/StoreManager');
                } else {
                    this.albumService.getAlbumById($routeParams.albumId).then(function (album) {
                        _this.album = album;
                        _this.initialize();
                    }, function (error) {
                        console.log(error);
                    });
                }
            }
            EditAlbumController.prototype.initialize = function () {
                var _this = this;
                this.genreService.getGenres().then(function (genres) {
                    _this.genres = genres;
                    _this.album.genre = _.find(_this.genres, function (g) {
                        return g.id == _this.album.genre.id;
                    });
                }, function (error) {
                    console.log(error);
                });

                this.artistService.getArtists().then(function (response) {
                    _this.artists = response;
                    _this.album.artist = _.find(_this.artists, function (a) {
                        return a.id == _this.album.artist.id;
                    });
                }, function (error) {
                    console.log(error);
                });
            };

            EditAlbumController.prototype.updateAlbum = function () {
                var _this = this;
                this.albumService.updateAlbum(this.album).then(function () {
                    _this.$location.path('/StroreManager');
                }, function (error) {
                    console.log(error);
                });
            };
            return EditAlbumController;
        })();
        Controllers.EditAlbumController = EditAlbumController;

        angular.module('musicStoreApp').controller('EditAlbumController', [
            '$routeParams',
            '$location',
            'AlbumService',
            'ArtistService',
            'GenreService',
            EditAlbumController
        ]);
    })(MusicStore.Controllers || (MusicStore.Controllers = {}));
    var Controllers = MusicStore.Controllers;
})(MusicStore || (MusicStore = {}));
//# sourceMappingURL=EditAlbumController.js.map
