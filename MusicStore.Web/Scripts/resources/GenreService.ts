module MusicStore.Services {

    export class GenreService {
        private genreService: restangular.IElement;

        constructor(
            private restangular: restangular.IElement) {
            this.genreService = restangular.all('genre');
        }

        getGenres(): MusicStore.Models.IGenre[] {
            var genreList: MusicStore.Models.IGenre[];
            this.genreService.getList().then((genres: MusicStore.Models.IGenre[]) => {
                genreList = genres;
            }, (error: Error) => {
                    console.log(error.message);
                });
            return genreList;
        }

        createGenre(genre: MusicStore.Models.IGenre) {
            var returnedGenre: MusicStore.Models.IGenre;

            this.genreService.post(genre).then((newGenre: MusicStore.Models.IGenre) => {
                returnedGenre = newGenre;
            }, (error: Error) => {
                    console.log(error.message);
                });
            return returnedGenre;
        }
    }

    angular.module('musicStoreApp')
        .service('GenreService', [
            'Restangular',
            GenreService
        ]);
}