module MusicStore.Controllers {
    export class StoreController {
        private baseAlbums: restangular.IElement;
        private albums: Array<MusicStore.Models.IAlbum>;
        private genre: string;
        private path: string;

        constructor(
            private $rootScope: ng.IRootScopeService,
            private $location: ng.ILocationService,
            private $routeParams: IGenreParam,
            private albumService: MusicStore.Services.AlbumService) {

            this.genre = $routeParams.genre;
            this.path = $location.path();

            if ($routeParams.genre != null) {
                this.albumService.getAlbumsByGenre($routeParams.genre).then(albums => {
                    this.albums = albums;
                    $rootScope.$broadcast("Genre_Selected", $routeParams.genre);
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
        .controller('StoreController', [
            '$rootScope',
            '$location',
            '$routeParams',
            'AlbumService',
            StoreController
        ]);
}