/// <reference path="../typings/angular-file-upload/angular-file-upload.d.ts" />
var MusicStore;
(function (MusicStore) {
    (function (Controllers) {
        var GenreController = (function () {
            function GenreController($rootScope, $location, $routeParams, genreService, $upload) {
                this.$rootScope = $rootScope;
                this.$location = $location;
                this.$routeParams = $routeParams;
                this.genreService = genreService;
                this.$upload = $upload;
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
                location.href = 'api/genre/download';
            };

            GenreController.prototype.getClass = function (musicGenre) {
                return this.$routeParams.genre == musicGenre;
            };

            GenreController.prototype.initialize = function () {
                var _this = this;
                this.isLoadingData = true;
                this.genreService.getGenres().then(function (genres) {
                    _this.genres = genres;
                    _this.isLoadingData = false;
                }, function (error) {
                    console.log(error);
                });
            };

            GenreController.prototype.uploadGenres = function ($files) {
                var _this = this;
                var uploads = [];

                if ($files.length > 0) {
                    var file = $files[0];
                    uploads.push(this.$upload.upload({
                        url: 'api/genre/upload',
                        headers: { 'Accept': 'application/json, text/plain, */*' },
                        method: 'post',
                        file: file
                    }).progress(function (event) {
                        console.log('progress');
                    }).then(function (success) {
                        console.log(success.data);
                        _this.initialize();
                    }).catch(function (err) {
                        console.error(err);
                    }));
                }
            };
            return GenreController;
        })();
        Controllers.GenreController = GenreController;

        angular.module('musicStoreApp').controller('GenreController', [
            '$rootScope',
            '$location',
            '$routeParams',
            'GenreService',
            '$upload',
            GenreController
        ]);
    })(MusicStore.Controllers || (MusicStore.Controllers = {}));
    var Controllers = MusicStore.Controllers;
})(MusicStore || (MusicStore = {}));
//# sourceMappingURL=GenreController.js.map
