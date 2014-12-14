/// <reference path="../typings/angular-file-upload/angular-file-upload.d.ts" />

module MusicStore.Controllers {

    export interface IArtistParam extends ng.route.IRouteParamsService {
        artistId: string;
    }

    export class ArtistController {
        private artists: MusicStore.Models.IArtist[];
        private artist: MusicStore.Models.IArtist;
        private isLoadingData: boolean;

        constructor(
            private artistService: MusicStore.Services.ArtistService,
            private $location: ng.ILocationService,
            private $routeParam: IArtistParam,
            private $upload: ng.angularFileUpload.IUploadService) {

            this.initialize();
        }

        public initialize() {
            this.isLoadingData = true;
            this.artistService.getArtists().then(response => {
                this.artists = response;
                this.isLoadingData = false;
            },
            (error) => {
                console.log(error);
            });
        }

        public createNewArtist() {
            this.artistService.saveArtist(this.artist).then(() => {
                this.initialize();
            });

        }

        public downloadArtist() {
            location.href = '/api/artist/download';
        }

        public uploadArtists($files: File[]) {
            var uploads: ng.IPromise<any>[] = [];

            if ($files.length > 0) {

                var file = $files[0];
                uploads.push(this.$upload.upload<any>({
                    url: 'api/artist/upload',
                    headers: { 'Accept': 'application/json, text/plain, */*' },
                    method: 'post',
                    file: file
                }).progress((event: any) => {
                    console.log('progress');
                }).then(success => {
                        console.log(success.data);
                        this.initialize();
                    }
                ).catch(err => {
                    console.error(err);
                }));
            }
        }
    }

    angular.module('musicStoreApp')
        .controller('ArtistController', [
            'ArtistService',
            '$location',
            '$routeParams',
            '$upload',
            ArtistController
        ]);
} 