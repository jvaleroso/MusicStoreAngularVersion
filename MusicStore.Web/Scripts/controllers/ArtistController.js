/// <reference path="../typings/angular-file-upload/angular-file-upload.d.ts" />
var MusicStore;
(function (MusicStore) {
    (function (Controllers) {
        var ArtistController = (function () {
            function ArtistController(artistService, $location, $routeParam, $upload) {
                this.artistService = artistService;
                this.$location = $location;
                this.$routeParam = $routeParam;
                this.$upload = $upload;
                this.initialize();
            }
            ArtistController.prototype.initialize = function () {
                var _this = this;
                this.isLoadingData = true;
                this.artistService.getArtists().then(function (response) {
                    _this.artists = response;
                    _this.isLoadingData = false;
                }, function (error) {
                    console.log(error);
                });
            };

            ArtistController.prototype.createNewArtist = function () {
                var _this = this;
                this.artistService.saveArtist(this.artist).then(function () {
                    _this.initialize();
                });
            };

            ArtistController.prototype.downloadArtist = function () {
                location.href = '/api/artist/download';
            };

            ArtistController.prototype.uploadArtists = function ($files) {
                var _this = this;
                var uploads = [];

                if ($files.length > 0) {
                    var file = $files[0];
                    uploads.push(this.$upload.upload({
                        url: 'api/artist/upload',
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
            return ArtistController;
        })();
        Controllers.ArtistController = ArtistController;

        angular.module('musicStoreApp').controller('ArtistController', [
            'ArtistService',
            '$location',
            '$routeParams',
            '$upload',
            ArtistController
        ]);
    })(MusicStore.Controllers || (MusicStore.Controllers = {}));
    var Controllers = MusicStore.Controllers;
})(MusicStore || (MusicStore = {}));
//# sourceMappingURL=ArtistController.js.map
