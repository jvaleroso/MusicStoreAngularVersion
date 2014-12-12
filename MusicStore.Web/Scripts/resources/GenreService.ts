module MusicStore.Services {

    export class GenreService {
        private genreService: restangular.IElement;

        constructor(private restangular: restangular.IElement) {
            this.genreService = this.restangular.all('api/genre');
        }

        public getGenres() {
            return this.genreService.getList();
        }

        public saveGenre(genre: MusicStore.Models.IGenre) {
            return this.genreService.customPOST(genre);
        }

        public downloadGenre() {
            return this.genreService.customGET('downloadGenre');
        }
    }

    angular.module('musicStoreApp')
        .service('GenreService', [
            'Restangular',
            GenreService
        ]);
}