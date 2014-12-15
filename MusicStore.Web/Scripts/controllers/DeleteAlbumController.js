var MusicStore;
(function (MusicStore) {
    (function (Controllers) {
        var DeleteAlbumController = (function () {
            function DeleteAlbumController($routeParams, $location, $window, albumService) {
                var _this = this;
                this.$routeParams = $routeParams;
                this.$location = $location;
                this.$window = $window;
                this.albumService = albumService;
                if (isNaN(this.$routeParams.albumId)) {
                    this.$window.location.href = "#/StoreManager";
                } else {
                    this.albumService.getAlbumById($routeParams.albumId).then(function (album) {
                        _this.album = album;
                    }, function (error) {
                        _this.$window.location.href = "#/StoreManager";
                        console.error(error);
                    });
                }
            }
            DeleteAlbumController.prototype.deleteAlbum = function () {
                var _this = this;
                this.albumService.deleteAlbum(this.$routeParams.albumId).then(function () {
                    _this.$window.location.href = "#/StoreManager";
                }, function (error) {
                    console.error(error);
                });
            };
            return DeleteAlbumController;
        })();
        Controllers.DeleteAlbumController = DeleteAlbumController;

        angular.module('musicStoreApp').controller('DeleteAlbumController', [
            '$routeParams',
            '$location',
            '$window',
            'AlbumService',
            DeleteAlbumController
        ]);
    })(MusicStore.Controllers || (MusicStore.Controllers = {}));
    var Controllers = MusicStore.Controllers;
})(MusicStore || (MusicStore = {}));
//# sourceMappingURL=DeleteAlbumController.js.map
