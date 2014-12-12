var MusicStore;
(function (MusicStore) {
    (function (Services) {
        var GenreService = (function () {
            function GenreService(restangular) {
                this.restangular = restangular;
                this.genreService = this.restangular.all('api/genre');
            }
            GenreService.prototype.getGenres = function () {
                return this.genreService.getList();
            };

            GenreService.prototype.saveGenre = function (genre) {
                return this.genreService.customPOST(genre);
            };

            GenreService.prototype.downloadGenre = function () {
                return this.genreService.customGET('downloadGenre');
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
