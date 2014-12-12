module MusicStore.Services {
    export class ArtistService {
        private artistService: restangular.IElement;

        constructor(private restangular: restangular.IService) {
            this.artistService = this.restangular.all('api/artist');
        }

        public getArtists() {
            return this.artistService.customGETLIST('');
        }

        public saveArtist(artist: MusicStore.Models.IArtist) {
            return this.artistService.customPOST(artist);
        }

        public downloadArtist() {
            return this.artistService.customGET('download');
        }
    }

    angular.module('musicStoreApp')
        .service('ArtistService', [
            'Restangular',
            ArtistService
        ]);
}