module MusicStore.Controllers {
    export class BrowseAlbumController {
        private albums: Models.Album[];

        constructor(
            private $routeParams: IGenreParam,
            private albumService: MusicStore.Services.AlbumService) {

            if ($routeParams.genre) {
                this.albumService.getAlbumsByGenre($routeParams.genre).then(albums => {
                    this.albums = albums;
                },
                (error) => {
                    console.log(error);
                });
            }
            else {
                this.initialize();
            }
        }

        public initialize() {
            this.albumService.getAlbums().then(albums => {
                this.albums = albums;
            }, (error) => {
                    console.log(error);
                });
        }
    }

    angular.module('musicStoreApp')
        .controller('BrowseAlbumController', [
            '$routeParams',
            'AlbumService',
            BrowseAlbumController
        ]);
}