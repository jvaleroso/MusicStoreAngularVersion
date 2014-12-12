var MusicStore;
(function (MusicStore) {
    (function (Controllers) {
        var StoreController = (function () {
            function StoreController($rootScope, $location, $routeParams, albumService) {
                var _this = this;
                this.$rootScope = $rootScope;
                this.$location = $location;
                this.$routeParams = $routeParams;
                this.albumService = albumService;
                this.genre = $routeParams.genre;
                this.path = $location.path();

                if ($routeParams.genre != null) {
                    this.albumService.getAlbumsByGenre($routeParams.genre).then(function (albums) {
                        _this.albums = albums;
                        $rootScope.$broadcast("Genre_Selected", $routeParams.genre);
                    }, function (error) {
                        console.log(error);
                    });
                } else {
                    this.initialize();
                }
            }
            StoreController.prototype.initialize = function () {
                var _this = this;
                this.albumService.getAlbums().then(function (albums) {
                    _this.albums = albums;
                }, function (error) {
                    console.log(error);
                });
            };
            return StoreController;
        })();
        Controllers.StoreController = StoreController;

        angular.module('musicStoreApp').controller('StoreController', [
            '$rootScope',
            '$location',
            '$routeParams',
            'AlbumService',
            StoreController
        ]);
    })(MusicStore.Controllers || (MusicStore.Controllers = {}));
    var Controllers = MusicStore.Controllers;
})(MusicStore || (MusicStore = {}));
//# sourceMappingURL=StoreController.js.map
