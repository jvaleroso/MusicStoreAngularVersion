var MusicStore;
(function (MusicStore) {
    (function (Services) {
        var AlbumService = (function () {
            function AlbumService(restangular) {
                this.restangular = restangular;
                this.albumService = restangular.all('api/album');
            }
            AlbumService.prototype.getAlbums = function () {
                return this.albumService.getList();
            };

            AlbumService.prototype.getAlbumsByGenre = function (genre) {
                return this.albumService.getList('', { genre: genre });
            };

            AlbumService.prototype.getAlbumById = function (id) {
                return this.albumService.customGET('', { id: id });
            };

            AlbumService.prototype.saveAlbum = function (album) {
                return this.albumService.customPOST(album);
            };
            return AlbumService;
        })();
        Services.AlbumService = AlbumService;

        angular.module('musicStoreApp').service('AlbumService', [
            'Restangular',
            AlbumService
        ]);
    })(MusicStore.Services || (MusicStore.Services = {}));
    var Services = MusicStore.Services;
})(MusicStore || (MusicStore = {}));
//# sourceMappingURL=AlbumService.js.map
