﻿var MusicStore;
(function (MusicStore) {
    (function (Controllers) {
        var CreateAlbumController = (function () {
            function CreateAlbumController($location, $window, albumService, artistService, genreService) {
                this.$location = $location;
                this.$window = $window;
                this.albumService = albumService;
                this.artistService = artistService;
                this.genreService = genreService;
                this.initialize();
            }
            CreateAlbumController.prototype.saveAlbum = function () {
                var _this = this;
                this.albumService.saveAlbum(this.album).then(function () {
                    _this.$window.location.href = "#/StoreManager";
                }, function (error) {
                    console.log(error);
                });
            };

            CreateAlbumController.prototype.initialize = function () {
                var _this = this;
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
            return CreateAlbumController;
        })();
        Controllers.CreateAlbumController = CreateAlbumController;

        angular.module('musicStoreApp').controller('CreateAlbumController', [
            '$location',
            '$window',
            'AlbumService',
            'ArtistService',
            'GenreService',
            CreateAlbumController
        ]);
    })(MusicStore.Controllers || (MusicStore.Controllers = {}));
    var Controllers = MusicStore.Controllers;
})(MusicStore || (MusicStore = {}));
//# sourceMappingURL=CreateAlbumController.js.map
