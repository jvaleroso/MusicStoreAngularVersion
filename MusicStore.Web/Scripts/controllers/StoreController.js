var MusicStore;
(function (MusicStore) {
    (function (Controllers) {
        var StoreController = (function () {
            function StoreController(albumService) {
                this.albumService = albumService;
                this.initialize();
            }
            StoreController.prototype.initialize = function () {
                var _this = this;
                this.albumService.getAlbums().then(function (albums) {
                    _this.albums = albums;
                }, function (error) {
                    console.error(error);
                });
            };
            return StoreController;
        })();
        Controllers.StoreController = StoreController;

        angular.module('musicStoreApp').controller('StoreController', [
            'AlbumService',
            StoreController
        ]);
    })(MusicStore.Controllers || (MusicStore.Controllers = {}));
    var Controllers = MusicStore.Controllers;
})(MusicStore || (MusicStore = {}));
//# sourceMappingURL=StoreController.js.map
