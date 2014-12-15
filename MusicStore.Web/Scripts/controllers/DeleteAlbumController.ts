module MusicStore.Controllers {

    export class DeleteAlbumController {
        private album: Models.Album;
        private artists: Array<Models.Artist>;
        private genres: Models.Genre[];

        constructor(
            private $routeParams: IAlbumParams,
            private $location: ng.ILocationService,
            private albumService: Services.AlbumService) {

            if (isNaN(this.$routeParams.albumId)) {
                this.$location.path('/StoreManager');
            } else {
                this.albumService.getAlbumById($routeParams.albumId).then(album => {
                    this.album = album;
                },
                    (error) => {
                        this.$location.path('/StoreManager');
                        console.error(error);
                    });
            }
        }

        public deleteAlbum() {
            this.albumService.deleteAlbum(this.$routeParams.albumId).then(() => {
                this.$location.path('/StroreManager');
            }, (error) => {
                    console.error(error);
                });
        }
    }

    angular.module('musicStoreApp')
        .controller('DeleteAlbumController', [
            '$routeParams',
            '$location',
            'AlbumService',
            DeleteAlbumController
        ]);
}