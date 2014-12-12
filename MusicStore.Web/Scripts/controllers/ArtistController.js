var MusicStore;
(function (MusicStore) {
    (function (Controllers) {
        var ArtistController = (function () {
            function ArtistController(artistService, $location, $routeParam) {
                this.artistService = artistService;
                this.$location = $location;
                this.$routeParam = $routeParam;
                this.initialize();
            }
            ArtistController.prototype.initialize = function () {
                var _this = this;
                this.artistService.getArtists().then(function (response) {
                    _this.artists = response;
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
                //this.artistService.downloadArtist().then(() => {}, (error) => {
                //    console.log(error);
                //});
                location.href = '/api/artist/download';
            };

            ArtistController.prototype.uploadArtists = function () {
                var _this = this;
                $('#uploadConfig').fileupload({
                    url: '/api/variable-udf-configuration/upload?type=' + this.configTypeSelected,
                    acceptFileTyples: /(\.|\/)(csv)$/i,
                    dataType: 'json',
                    maxFileSize: 10485760,
                    sequentialUploads: false,
                    add: function (e, data) {
                        if (data.files.length > 0 && data.files[0].size > 10485760) {
                            _this.uploadMessage = 'Sorry but we cannot upload your csv file. Please make sure your file is less than 1MB.';
                            _this.$scope.$apply(function () {
                                _this.initilialize();
                                $('#udfModal').modal('show');
                            });
                        } else {
                            data.submit();
                        }
                    },
                    success: function (message) {
                        _this.uploadMessage = message;
                        _this.$scope.$apply(function () {
                            _this.initilialize();
                            $('#udfModal').modal('show');
                        });
                    }
                });
            };
            return ArtistController;
        })();
        Controllers.ArtistController = ArtistController;

        angular.module('musicStoreApp').controller('ArtistController', [
            'ArtistService',
            '$location',
            '$routeParams',
            ArtistController
        ]);
    })(MusicStore.Controllers || (MusicStore.Controllers = {}));
    var Controllers = MusicStore.Controllers;
})(MusicStore || (MusicStore = {}));
//# sourceMappingURL=ArtistController.js.map
