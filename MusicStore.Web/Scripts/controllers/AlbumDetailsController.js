var MusicStore;
(function (MusicStore) {
    (function (Controllers) {
        var AlbumDetailsController = (function () {
            function AlbumDetailsController($routeParams, albumService) {
                var _this = this;
                this.$routeParams = $routeParams;
                this.albumService = albumService;
                if (this.$routeParams.albumId) {
                    this.albumService.getAlbumById(this.$routeParams.albumId).then(function (album) {
                        _this.album = album;
                    }, function (err) {
                        console.log(err);
                    });
                }
            }
            return AlbumDetailsController;
        })();
        Controllers.AlbumDetailsController = AlbumDetailsController;

        angular.module('musicStoreApp').controller('AlbumDetailsController', [
            '$routeParams',
            'AlbumService',
            AlbumDetailsController
        ]);
    })(MusicStore.Controllers || (MusicStore.Controllers = {}));
    var Controllers = MusicStore.Controllers;
})(MusicStore || (MusicStore = {}));
//# sourceMappingURL=AlbumDetailsController.js.map
