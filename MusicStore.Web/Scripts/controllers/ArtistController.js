var MusicStore;
(function (MusicStore) {
    (function (Controllers) {
        var ArtistController = (function () {
            function ArtistController(artistService, $location, $routeParam) {
                this.artistService = artistService;
                this.$location = $location;
                this.$routeParam = $routeParam;
                this.artists = artistService.getArtists();
            }
            ArtistController.prototype.createNewArtist = function () {
                var newArtist = this.artistService.createArtist(this.artist);
                if (newArtist != null)
                    this.artists.push(newArtist);
            };
            return ArtistController;
        })();
        Controllers.ArtistController = ArtistController;

        angular.module('musicStoreApp').controller('ArtistController', [
            'artistService',
            '$location',
            '$routeParam',
            ArtistController
        ]);
    })(MusicStore.Controllers || (MusicStore.Controllers = {}));
    var Controllers = MusicStore.Controllers;
})(MusicStore || (MusicStore = {}));
//# sourceMappingURL=ArtistController.js.map
