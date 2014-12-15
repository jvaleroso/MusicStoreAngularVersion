module MusicStore.Controllers {

    export class DeleteAlbumController {
        private album: Models.Album;
        private artists: Array<Models.Artist>;
        private genres: Models.Genre[];

        constructor(
            private $routeParams: IAlbumParams,
            private $location: ng.ILocationService,
            private $window: ng.IWindowService,
            private albumService: Services.AlbumService) {

            if (isNaN(this.$routeParams.albumId)) {
                this.$window.location.href = "#/StoreManager";
            } else {
                this.albumService.getAlbumById($routeParams.albumId).then(album => {
                    this.album = album;
                },
                    (error) => {
                        this.$window.location.href = "#/StoreManager";
                        console.error(error);
                    });
            }
        }

        public deleteAlbum() {
            this.albumService.deleteAlbum(this.$routeParams.albumId).then(() => {
                this.$window.location.href = "#/StoreManager";
            }, (error) => {
                    console.error(error);
                });
        }
    }

    angular.module('musicStoreApp')
        .controller('DeleteAlbumController', [
            '$routeParams',
            '$location',
            '$window',
            'AlbumService',
            DeleteAlbumController
        ]);
}