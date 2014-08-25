var MusicStore;
(function (MusicStore) {
    (function (Controllers) {
        var StoreController = (function () {
            function StoreController($rootScope, $location, $routeParams, albumService) {
                this.$rootScope = $rootScope;
                this.$location = $location;
                this.$routeParams = $routeParams;
                this.albumService = albumService;
                this.genre = $routeParams.genre;
                this.path = $location.path();

                if ($routeParams.genre != null) {
                    this.albums = this.albumService.getAlbumsByGenre($routeParams.genre);
                    $rootScope.$broadcast("Genre_Selected", $routeParams.genre);
                } else {
                    this.albums = albumService.getAlbums();
                }
            }
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
