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
                this.albums = this.albumService.getAlbumsByGenre($routeParams.genre);
                $rootScope.$broadcast("Genre_Selected", $routeParams.genre);
            } else {
                this.albums = albumService.getAlbums();
            }
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