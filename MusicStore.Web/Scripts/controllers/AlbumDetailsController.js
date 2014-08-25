var MusicStore;
(function (MusicStore) {
    (function (Controllers) {
        var AlbumDetailsController = (function () {
            function AlbumDetailsController($routeParams, albumService) {
                this.$routeParams = $routeParams;
                this.albumService = albumService;
                this.album = this.albumService.getAlbumById($routeParams.albumId);
            }
            return AlbumDetailsController;
        })();
        Controllers.AlbumDetailsController = AlbumDetailsController;
    })(MusicStore.Controllers || (MusicStore.Controllers = {}));
    var Controllers = MusicStore.Controllers;
})(MusicStore || (MusicStore = {}));
//# sourceMappingURL=AlbumDetailsController.js.map
