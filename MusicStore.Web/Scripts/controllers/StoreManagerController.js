var MusicStore;
(function (MusicStore) {
    (function (Controllers) {
        var StoreManagerController = (function () {
            function StoreManagerController($location, $routeParams, albumService, genreService, artistService) {
                var _this = this;
                this.$location = $location;
                this.$routeParams = $routeParams;
                this.albumService = albumService;
                this.genreService = genreService;
                this.artistService = artistService;
                if (isNaN($routeParams.albumId)) {
                    this.initialize();
                } else {
                    this.albumService.getAlbumById($routeParams.albumId).then(function (album) {
                        _this.album = album;
                    }, function (error) {
                        console.log(error);
                    });
                }
            }
            StoreManagerController.prototype.initialize = function () {
                var _this = this;
                this.albumService.getAlbums().then(function (albums) {
                    _this.albums = albums;
                }, function (error) {
                    console.log(error);
                });

                this.genreService.getGenres().then(function (genres) {
                    _this.genres = genres;
                }, function (error) {
                    console.log(error);
                });

                this.artistService.getArtists().then(function (response) {
                    _this.artists = response;
                }, function (error) {
                    console.log(error);
                });
            };

            StoreManagerController.prototype.saveAlbum = function (album) {
                var _this = this;
                this.albumService.saveAlbum(album).then(function () {
                    _this.albumService.getAlbums().then(function (albums) {
                        _this.albums = albums;
                    }, function (error) {
                        console.log(error);
                    });
                });
            };

            StoreManagerController.prototype.viewDetails = function () {
                var _this = this;
                this.albumService.getAlbumById(this.$routeParams.albumId).then(function (album) {
                    _this.album = album;
                }, function (error) {
                    console.log(error);
                });
            };

            StoreManagerController.prototype.editAlbum = function (album) {
                this.album = album;
            };
            return StoreManagerController;
        })();
        Controllers.StoreManagerController = StoreManagerController;

        angular.module('musicStoreApp').controller('StoreManagerController', [
            '$location',
            '$routeParams',
            'AlbumService',
            'GenreService',
            'ArtistService',
            StoreManagerController
        ]);
    })(MusicStore.Controllers || (MusicStore.Controllers = {}));
    var Controllers = MusicStore.Controllers;
})(MusicStore || (MusicStore = {}));
//# sourceMappingURL=StoreManagerController.js.map
