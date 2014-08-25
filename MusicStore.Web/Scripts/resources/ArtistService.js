//(function () {
//    var musicStoreApp = angular.module('musicStoreApp');
var MusicStore;
(function (MusicStore) {
    //    musicStoreApp.factory('Artist', ['$resource', function ($resource) {
    //        return $resource('/api/Artist/');
    //    }]);
    //})();
    (function (Services) {
        var ArtistService = (function () {
            function ArtistService(restangular) {
                this.restangular = restangular;
                this.artistService = restangular.all('artist');
            }
            ArtistService.prototype.getArtists = function () {
                var artistList;
                this.artistService.getList().then(function (artists) {
                    artistList = artists;
                }, function (error) {
                    console.log(error.message);
                });
                return artistList;
            };

            ArtistService.prototype.createArtist = function (artist) {
                var returnedArtist;

                this.artistService.post(artist).then(function (newArtist) {
                    returnedArtist = newArtist;
                }, function (error) {
                    console.log(error);
                    returnedArtist = null;
                });

                return returnedArtist;
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
