//(function () {
//    var musicStoreApp = angular.module('musicStoreApp');

//    musicStoreApp.factory('Artist', ['$resource', function ($resource) {
//        return $resource('/api/Artist/');
//    }]);
//})();

module MusicStore.Services {
    export class ArtistService {
        private artistService: restangular.IElement;

        constructor(
            private restangular: restangular.IService) {
            this.artistService = restangular.all('artist');
        }

        getArtists(): Models.IArtist[] {
            var artistList: Models.IArtist[];
            this.artistService.getList().then(
                (artists: MusicStore.Models.IArtist[]) => {
                    artistList = artists;
                }, (error: Error) => {
                    console.log(error.message);
                });
            return artistList;
        }

        createArtist(artist: MusicStore.Models.IArtist) {
            var returnedArtist: MusicStore.Models.IArtist;

            this.artistService.post(artist).then((newArtist: MusicStore.Models.IArtist) => {
                returnedArtist = newArtist;
            }, (error: Error) => {
                    console.log(error);
                    returnedArtist = null;
                });

            return returnedArtist;
        }
    }

    angular.module('musicStoreApp')
        .service('ArtistService', [
            'Restangular',
            ArtistService
        ]);
}