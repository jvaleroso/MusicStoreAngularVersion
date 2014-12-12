var MusicStore;
(function (MusicStore) {
    (function (Controllers) {
        var GenreController = (function () {
            function GenreController($rootScope, $location, $routeParams, genreService) {
                this.$rootScope = $rootScope;
                this.$location = $location;
                this.$routeParams = $routeParams;
                this.genreService = genreService;
                this.initialize();
            }
            GenreController.prototype.createNewGenre = function (genre) {
                var _this = this;
                this.genreService.saveGenre(genre).then(function () {
                    _this.initialize();
                }, function (error) {
                    console.log(error);
                });
            };

            GenreController.prototype.downloadGenres = function () {
            };

            GenreController.prototype.getClass = function (musicGenre) {
                return this.$routeParams.genre == musicGenre;
            };

            GenreController.prototype.initialize = function () {
                var _this = this;
                this.genreService.getGenres().then(function (genres) {
                    _this.genres = genres;
                }, function (error) {
                    console.log(error);
                });
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
