var MusicStore;
(function (MusicStore) {
    (function (Controllers) {
        var DeleteAlbumController = (function () {
            function DeleteAlbumController($routeParams, $location, albumService) {
                var _this = this;
                this.$routeParams = $routeParams;
                this.$location = $location;
                this.albumService = albumService;
                if (isNaN(this.$routeParams.albumId)) {
                    this.$location.path('/StoreManager');
                } else {
                    this.albumService.getAlbumById($routeParams.albumId).then(function (album) {
                        _this.album = album;
                    }, function (error) {
                        _this.$location.path('/StoreManager');
                        console.error(error);
                    });
                }
            }
            DeleteAlbumController.prototype.deleteAlbum = function () {
                var _this = this;
                this.albumService.deleteAlbum(this.$routeParams.albumId).then(function () {
                    _this.$location.path('/StroreManager');
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
            'AlbumService',
            DeleteAlbumController
        ]);
    })(MusicStore.Controllers || (MusicStore.Controllers = {}));
    var Controllers = MusicStore.Controllers;
})(MusicStore || (MusicStore = {}));
//# sourceMappingURL=DeleteAlbumController.js.map
