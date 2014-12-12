var MusicStore;
(function (MusicStore) {
    (function (Services) {
        var ArtistService = (function () {
            function ArtistService(restangular) {
                this.restangular = restangular;
                this.artistService = this.restangular.all('api/artist');
            }
            ArtistService.prototype.getArtists = function () {
                return this.artistService.customGETLIST('');
            };

            ArtistService.prototype.saveArtist = function (artist) {
                return this.artistService.customPOST(artist);
            };

            ArtistService.prototype.downloadArtist = function () {
                return this.artistService.customGET('download');
            };
            return ArtistService;
        })();
        Services.ArtistService = ArtistService;

        angular.module('musicStoreApp').service('ArtistService', [
            'Restangular',
            ArtistService
        ]);
    })(MusicStore.Services || (MusicStore.Services = {}));
    var Services = MusicStore.Services;
})(MusicStore || (MusicStore = {}));
//# sourceMappingURL=ArtistService.js.map
