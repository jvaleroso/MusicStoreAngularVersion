module MusicStore.Controllers {

    export interface IArtistParam extends ng.route.IRouteParamsService {
        artistId: string;
    }

    export class ArtistController {
        private baseArtists: restangular.IElement;
        private artists: MusicStore.Models.IArtist[];
        private artist: MusicStore.Models.IArtist;

        constructor(
            private artistService: MusicStore.Services.ArtistService,
            private $location: ng.ILocationService,
            private $routeParam: IArtistParam) {

            this.artists = artistService.getArtists();
        }

        createNewArtist() {
            var newArtist = this.artistService.createArtist(this.artist);
            if (newArtist != null) this.artists.push(newArtist);
        }
    }

    angular.module('musicStoreApp')
        .controller('ArtistController', [
            'artistService',
            '$location',
            '$routeParam',
            ArtistController
        ]);
} 