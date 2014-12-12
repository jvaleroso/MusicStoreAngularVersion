var MusicStore;
(function (MusicStore) {
    (function (Controllers) {
        var GenreListController = (function () {
            function GenreListController($scope, $location, $routeParams, genreService) {
                var _this = this;
                this.$scope = $scope;
                this.$location = $location;
                this.$routeParams = $routeParams;
                this.genreService = genreService;
                $scope.$on('GenreController_AddNewGenre', function () {
                    _this.genreService.getGenres().then(function (genres) {
                        _this.genres = genres;
                    }, function (error) {
                        console.log(error);
                    });
                });

                $scope.$on('Genre_Selected', function (event, selectedGenre) {
                    angular.forEach(_this.genres, function (item) {
                        if (item.name == selectedGenre)
                            _this.isSelected = true;
                        else
                            _this.isSelected = false;
                    });
                });
            }
            GenreListController.prototype.getClass = function (musicGenre) {
                return this.$routeParams.genre == musicGenre;
            };
            return GenreListController;
        })();
        Controllers.GenreListController = GenreListController;

        angular.module('musicStoreApp').controller('GenreListController', [
            '$scope',
            '$location',
            '$routeParams',
            'GenreService',
            GenreListController
        ]);
    })(MusicStore.Controllers || (MusicStore.Controllers = {}));
    var Controllers = MusicStore.Controllers;
})(MusicStore || (MusicStore = {}));
//# sourceMappingURL=GenreListController.js.map
