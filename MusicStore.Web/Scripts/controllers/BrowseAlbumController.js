var MusicStore;
(function (MusicStore) {
    (function (Controllers) {
        var BrowseAlbumController = (function () {
            function BrowseAlbumController($routeParams, albumService) {
                var _this = this;
                this.$routeParams = $routeParams;
                this.albumService = albumService;
                if ($routeParams.genre) {
                    this.albumService.getAlbumsByGenre($routeParams.genre).then(function (albums) {
                        _this.albums = albums;
                    }, function (error) {
                        console.log(error);
                    });
                } else {
                    this.initialize();
                }
            }
            BrowseAlbumController.prototype.initialize = function () {
                var _this = this;
                this.albumService.getAlbums().then(function (albums) {
                    _this.albums = albums;
                }, function (error) {
                    console.log(error);
                });
            };
            return BrowseAlbumController;
        })();
        Controllers.BrowseAlbumController = BrowseAlbumController;

        angular.module('musicStoreApp').controller('BrowseAlbumController', [
            '$routeParams',
            'AlbumService',
            BrowseAlbumController
        ]);
    })(MusicStore.Controllers || (MusicStore.Controllers = {}));
    var Controllers = MusicStore.Controllers;
})(MusicStore || (MusicStore = {}));
//# sourceMappingURL=BrowseAlbumController.js.map
