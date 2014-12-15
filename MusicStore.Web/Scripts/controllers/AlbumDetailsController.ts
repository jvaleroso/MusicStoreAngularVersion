module MusicStore.Controllers {

    export interface IAlbumParams extends ng.route.IRouteParamsService {
        albumId: number;
    }

    export class AlbumDetailsController {
        private album: MusicStore.Models.Album;

        constructor(
            private $routeParams: IAlbumParams,
            private albumService: MusicStore.Services.AlbumService) {

            if (this.$routeParams.albumId) {
                this.albumService.getAlbumById(this.$routeParams.albumId).then((album) => {
                    this.album = album;
                }, (err) => {
                    console.log(err);
                });
            }
        }
    }

    angular.module('musicStoreApp')
        .controller('AlbumDetailsController', [
            '$routeParams',
            'AlbumService',
            AlbumDetailsController
        ]);
}