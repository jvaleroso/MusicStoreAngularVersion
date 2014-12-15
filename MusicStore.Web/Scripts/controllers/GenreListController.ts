module MusicStore.Controllers {

    export class GenreListController {
        private genres: MusicStore.Models.Genre[];
        private isSelected: boolean;
        private isLoadingGenre: boolean;

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

        public getClass(musicGenre: string) {
            return this.$routeParams.genre == musicGenre;
        }

        public initialize() {
            this.isLoadingGenre = true;
            this.genreService.getGenres().then(genres => {
                this.genres = genres;
                this.isLoadingGenre = false;
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

