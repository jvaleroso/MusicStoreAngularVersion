var MusicStore;
(function (MusicStore) {
    (function (Controllers) {
        var StoreManagerController = (function () {
            function StoreManagerController($location, $routeParams, albumService) {
                this.$location = $location;
                this.$routeParams = $routeParams;
                this.albumService = albumService;
                this.initialize();
            }
            StoreManagerController.prototype.initialize = function () {
                var _this = this;
                this.isLoadingData = true;
                this.albumService.getAlbums().then(function (albums) {
                    _this.albums = albums;
                    _this.isLoadingData = false;
                }, function (error) {
                    console.log(error);
                });
            };

            StoreManagerController.prototype.deleteAlbum = function (album) {
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
