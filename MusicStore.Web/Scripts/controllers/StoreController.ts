module MusicStore.Controllers {
    export class StoreController {
        private albums: Models.Album[];

        constructor(
            private albumService: MusicStore.Services.AlbumService) {

            this.initialize();
        }

        public initialize() {
            this.albumService.getAlbums().then(albums => {
                this.albums = albums;
            }, (error) => {
                    console.error(error);
                });
        }
    }

    angular.module('musicStoreApp')
        .controller('StoreController', [
            'AlbumService',
            StoreController
        ]);
}