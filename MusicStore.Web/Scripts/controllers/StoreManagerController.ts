module MusicStore.Controllers {

    export interface IAlbumParam extends ng.route.IRouteParamsService {
        albumId: number;
    }
    export class StoreManagerController {
        private albums: Array<MusicStore.Models.IAlbum>;
        private genres: Array<MusicStore.Models.IGenre>;
        private artists: Array<MusicStore.Models.IArtist>;
        private album: MusicStore.Models.IAlbum;

        constructor(
            private $location: ng.ILocationService,
            private $routeParams: IAlbumParam,
            private albumService: MusicStore.Services.AlbumService,
            private genreService: MusicStore.Services.GenreService,
            private artistService: MusicStore.Services.ArtistService) {

            if (isNaN($routeParams.albumId)) {
                this.genres = this.genreService.getGenres();
                this.albums = this.albumService.getAlbums();
                this.artists = this.artistService.getArtists();
            } else {
                this.album = this.albumService.getAlbumById($routeParams.albumId);
            }
        }

        createAlbum(album: MusicStore.Models.IAlbum) {
            var newAlbum = this.albumService.createAlbum(album);
            this.albums.push(newAlbum);
        }

        viewDetails() {
            this.album = this.albumService.getAlbumById(this.$routeParams.albumId);
        }

        editAlbum(album: MusicStore.Models.IAlbum) {
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



