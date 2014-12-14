module MusicStore.Controllers {

    export class GenreListController {
        private genres: MusicStore.Models.IGenre[];
        private isSelected: boolean;

        constructor(
            private $scope: ng.IScope,
            private $location: ng.ILocationService,
            private $routeParams: IGenreParam,
            private genreService: MusicStore.Services.GenreService) {

            $scope.$on('GenreController_AddNewGenre', () => {
                this.genreService.getGenres().then(genres => {
                    this.genres = genres;
                }, (error) => {
                    console.log(error);
                });
            });

            $scope.$on('Genre_Selected', (event, selectedGenre) => {
                angular.forEach(this.genres, (item) => {
                    if (item.name == selectedGenre) this.isSelected = true;
                    else this.isSelected = false;
                });
            });

            this.initialize();
        }

        getClass(musicGenre: string) {
            return this.$routeParams.genre == musicGenre;
        }

        initialize() {
            this.genreService.getGenres().then(genres => {
                this.genres = genres;
            }, (error) => {
                console.log(error);
            });
        }
    }

    angular.module('musicStoreApp')
        .controller('GenreListController', [
            '$scope',
            '$location',
            '$routeParams',
            'GenreService',
            GenreListController
        ]);

}

