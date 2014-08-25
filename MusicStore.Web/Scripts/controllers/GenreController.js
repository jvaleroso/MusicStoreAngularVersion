var MusicStore;
(function (MusicStore) {
    (function (Controllers) {
        var GenreController = (function () {
            function GenreController($rootScope, $location, $routeParams, genreService) {
                this.$rootScope = $rootScope;
                this.$location = $location;
                this.$routeParams = $routeParams;
                this.genreService = genreService;
                this.genres = genreService.getGenres();
            }
            GenreController.prototype.createNewGenre = function () {
                var newGenre = this.genreService.createGenre(this.genre);
                if (newGenre != null)
                    this.genreService.createGenre(newGenre);
            };

            GenreController.prototype.getClass = function (musicGenre) {
                return this.$routeParams.genre == musicGenre;
            };
            return GenreController;
        })();
        Controllers.GenreController = GenreController;

        angular.module('musicStoreApp').controller('GenreController', [
            '$rootScope',
            '$location',
            '$routeParams',
            'genreService',
            GenreController
        ]);
    })(MusicStore.Controllers || (MusicStore.Controllers = {}));
    var Controllers = MusicStore.Controllers;
})(MusicStore || (MusicStore = {}));
//# sourceMappingURL=GenreController.js.map
