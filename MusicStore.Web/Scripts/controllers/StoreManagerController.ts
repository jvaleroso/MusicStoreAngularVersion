module MusicStore.Controllers {

    export class StoreManagerController {
        private albums: MusicStore.Models.Album[];
        private album: MusicStore.Models.Album;
        public isLoadingData: boolean;

        constructor(
            private $location: ng.ILocationService,
            private $routeParams: IAlbumParams,
            private albumService: MusicStore.Services.AlbumService) {

            this.initialize();
        }

        public initialize() {
            this.isLoadingData = true;
            this.albumService.getAlbums().then(albums => {
                this.albums = albums;
                this.isLoadingData = false;
            }, (error) => {
                    console.log(error);
                });
        }

        public deleteAlbum(album: MusicStore.Models.Album) {
            this.album = album;
        }
    }

    angular.module('musicStoreApp')
        .controller('StoreManagerController', [
            '$location',
            '$routeParams',
            'AlbumService',
            'GenreService',
            'ArtistService',
            StoreManagerController
        ]);
}



