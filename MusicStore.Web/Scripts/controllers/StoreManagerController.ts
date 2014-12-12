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
                this.initialzie();
            }
            else {
                this.albumService.getAlbumById($routeParams.albumId).then(album => {
                    this.album = album;
                },
                (error) => {
                    console.log(error);
                });
            }
        }

        public initialzie() {
            this.albumService.getAlbums().then(albums => {
                this.albums = albums;
            }, (error) => {
                    console.log(error);
                });

            this.genreService.getGenres().then(genres => {
                this.genres = genres;
            }, (error) => {
                    console.log(error);
                });

            this.artistService.getArtists().then(response => {
                this.artists = response;
            },
                (error) => {
                    console.log(error);
                });
        }

        saveAlbum(album: MusicStore.Models.IAlbum) {
            this.albumService.saveAlbum(album).then(() => {
                this.albumService.getAlbums().then(albums => {
                    this.albums = albums;
                }, (error) => {
                    console.log(error);
                });
            });

        }

        viewDetails() {
            this.albumService.getAlbumById(this.$routeParams.albumId).then(album => {
                this.album = album;
            },
                (error) => {
                    console.log(error);
                });
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



