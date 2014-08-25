var MusicStore;
(function (MusicStore) {
    (function (Controllers) {
        var StoreManagerController = (function () {
            function StoreManagerController($location, $routeParams, albumService, genreService, artistService) {
                this.$location = $location;
                this.$routeParams = $routeParams;
                this.albumService = albumService;
                this.genreService = genreService;
                this.artistService = artistService;
                if (isNaN($routeParams.albumId)) {
                    this.genres = this.genreService.getGenres();
                    this.albums = this.albumService.getAlbums();
                    this.artists = this.artistService.getArtists();
                } else {
                    this.album = this.albumService.getAlbumById($routeParams.albumId);
                }
            }
            StoreManagerController.prototype.createAlbum = function (album) {
                var newAlbum = this.albumService.createAlbum(album);
                this.albums.push(newAlbum);
            };

            StoreManagerController.prototype.viewDetails = function () {
                this.album = this.albumService.getAlbumById(this.$routeParams.albumId);
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
