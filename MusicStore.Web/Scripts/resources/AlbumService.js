var MusicStore;
(function (MusicStore) {
    (function (Services) {
        var AlbumService = (function () {
            function AlbumService(restangular) {
                this.restangular = restangular;
                this.albumService = restangular.all('album');
            }
            AlbumService.prototype.getAlbums = function () {
                var albumList;
                this.albumService.getList().then(function (albums) {
                    albumList = albums;
                }, function (error) {
                    console.log(error);
                });
                return albumList;
            };

            AlbumService.prototype.getAlbumsByGenre = function (genre) {
                var albumList;
                this.albumService.getList('album', { genre: genre }).then(function (albums) {
                    albumList = albums;
                }, function (error) {
                    console.log(error);
                });
                return albumList;
            };

            AlbumService.prototype.getAlbumById = function (id) {
                var album;

                this.restangular.one('album', id).get().then(function (returnedAlbum) {
                    album = returnedAlbum;
                }, function (error) {
                    console.log(error);
                });

                return album;
            };

            AlbumService.prototype.createAlbum = function (album) {
                var returnedAlbum;

                this.albumService.post(album).then(function (newAlbum) {
                    returnedAlbum = newAlbum;
                }, function (error) {
                    console.log(error.message);
                });
                return returnedAlbum;
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
