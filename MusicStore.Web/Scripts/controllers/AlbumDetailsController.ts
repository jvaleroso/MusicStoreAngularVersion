module MusicStore.Controllers {

    export interface IAlbumParams extends ng.route.IRouteParamsService {
        albumId:number;
    }

    export class AlbumDetailsController {
        private album: MusicStore.Models.IAlbum;

        constructor(
            private $routeParams: IAlbumParams,
            private albumService: MusicStore.Services.AlbumService) {

            this.album = this.albumService.getAlbumById($routeParams.albumId);
        }
    }
}