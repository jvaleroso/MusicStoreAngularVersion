module MusicStore.Controllers {
    export interface IGenreParam extends ng.route.IRouteParamsService {
        genre: string;
    }

    export class GenreController {
        private genres: MusicStore.Models.IGenre[];
        private genre: MusicStore.Models.IGenre;

        constructor(
            private $rootScope: ng.IRootScopeService,
            private $location: ng.ILocationService,
            private $routeParams: IGenreParam,
            private genreService: MusicStore.Services.GenreService) {

            this.initialize();
        }

        public createNewGenre(genre) {
            this.genreService.saveGenre(genre).then(() => {
                this.initialize();
            }, (error) => {
                    console.log(error);
                });
        }

        public downloadGenres() {
 
        }

        public getClass(musicGenre: string) {
            return this.$routeParams.genre == musicGenre;
        }

        public initialize() {
            this.genreService.getGenres().then(genres => {
                this.genres = genres;
            }, (error) => {
                    console.log(error);
                });
        }
    }

    angular.module('musicStoreApp')
        .controller('GenreController', [
            '$rootScope',
            '$location',
            '$routeParams',
            'genreService',
            GenreController
        ]);
}
