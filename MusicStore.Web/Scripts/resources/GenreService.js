var MusicStore;
(function (MusicStore) {
    (function (Services) {
        var GenreService = (function () {
            function GenreService(restangular) {
                this.restangular = restangular;
                this.genreService = restangular.all('genre');
            }
            GenreService.prototype.getGenres = function () {
                var genreList;
                this.genreService.getList().then(function (genres) {
                    genreList = genres;
                }, function (error) {
                    console.log(error.message);
                });
                return genreList;
            };

            GenreService.prototype.createGenre = function (genre) {
                var returnedGenre;

                this.genreService.post(genre).then(function (newGenre) {
                    returnedGenre = newGenre;
                }, function (error) {
                    console.log(error.message);
                });
                return returnedGenre;
            };
            return GenreService;
        })();
        Services.GenreService = GenreService;

        angular.module('musicStoreApp').service('GenreService', [
            'Restangular',
            GenreService
        ]);
    })(MusicStore.Services || (MusicStore.Services = {}));
    var Services = MusicStore.Services;
})(MusicStore || (MusicStore = {}));
//# sourceMappingURL=GenreService.js.map
