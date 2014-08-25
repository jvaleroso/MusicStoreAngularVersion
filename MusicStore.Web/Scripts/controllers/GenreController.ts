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

            this.genres = genreService.getGenres();
        }

        createNewGenre() {
            var newGenre = this.genreService.createGenre(this.genre);
            if (newGenre != null) this.genreService.createGenre(newGenre);
        }

        getClass(musicGenre: string) {
            return this.$routeParams.genre == musicGenre;
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
