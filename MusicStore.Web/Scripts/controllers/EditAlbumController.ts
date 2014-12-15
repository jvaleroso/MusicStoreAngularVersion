module MusicStore.Controllers {

    export class EditAlbumController {
        private album: Models.Album;
        private artists: Array<Models.Artist>;
        private genres: Models.Genre[];

        constructor(
            private $routeParams: IAlbumParams,
            private $location: ng.ILocationService,
            private albumService: MusicStore.Services.AlbumService,
            private artistService: MusicStore.Services.ArtistService,
            private genreService: MusicStore.Services.GenreService) {


            if (isNaN($routeParams.albumId)) {
                this.$location.path('/StoreManager');
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
                this.$location.path('/StroreManager');
            }, (error) => {
                    console.log(error);
                });
        }
    }

    angular.module('musicStoreApp')
        .controller('EditAlbumController', [
            '$routeParams',
            '$location',
            'AlbumService',
            'ArtistService',
            'GenreService',
            EditAlbumController
        ]);
}