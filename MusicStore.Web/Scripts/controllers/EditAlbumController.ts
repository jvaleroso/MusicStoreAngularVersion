module MusicStore.Controllers {

    export class EditAlbumController {
        private album: Models.Album;
        private artists: Array<Models.Artist>;
        private genres: Models.Genre[];

        constructor(
            private $routeParams: IAlbumParams,
            private $window: ng.IWindowService,
            private albumService: MusicStore.Services.AlbumService,
            private artistService: MusicStore.Services.ArtistService,
            private genreService: MusicStore.Services.GenreService) {


            if (isNaN($routeParams.albumId)) {
                this.$window.location.href = "#/StoreManager";
            }
            else {
                this.albumService.getAlbumById($routeParams.albumId).then(album => {
                    this.album = album;
                    this.initialize();
                },
                (error) => {
                    console.log(error);
                });
            }
        }

        public initialize() {
            this.genreService.getGenres().then(genres => {
                this.genres = genres;
                this.album.genre = _.find(this.genres, (g) => {
                    return g.id == this.album.genre.id;
                });
            }, (error) => {
                    console.log(error);
                });

            this.artistService.getArtists().then(response => {
                this.artists = response;
                this.album.artist = _.find(this.artists, (a) => {
                    return a.id == this.album.artist.id;
                });
            },
                (error) => {
                    console.log(error);
                });
        }

        public updateAlbum() {
            this.albumService.updateAlbum(this.album).then(() => {
                this.$window.location.href = "#/StoreManager";
            }, (error) => {
                    console.log(error);
                });
        }
    }

    angular.module('musicStoreApp')
        .controller('EditAlbumController', [
            '$routeParams',
            '$window',
            'AlbumService',
            'ArtistService',
            'GenreService',
            EditAlbumController
        ]);
}