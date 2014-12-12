module MusicStore.Controllers {

    export interface IArtistParam extends ng.route.IRouteParamsService {
        artistId: string;
    }

    export class ArtistController {
        private artists: MusicStore.Models.IArtist[];
        private artist: MusicStore.Models.IArtist;

        constructor(
            private artistService: MusicStore.Services.ArtistService,
            private $location: ng.ILocationService,
            private $routeParam: IArtistParam) {

            this.initialize();
        }

        public initialize() {
            this.artistService.getArtists().then(response => {
                this.artists = response;
            },
                (error) => {
                    console.log(error);
                });
        }

        createNewArtist() {
            this.artistService.saveArtist(this.artist).then(() => {
                this.initialize();
            });

        }

        downloadArtist() {
            //this.artistService.downloadArtist().then(() => {}, (error) => {
            //    console.log(error);
            //});

            location.href = '/api/artist/download';
        }

        uploadArtists() {

            $('#uploadConfig').fileupload({
                url: '/api/variable-udf-configuration/upload?type=' + this.configTypeSelected,
                acceptFileTyples: /(\.|\/)(csv)$/i,
                dataType: 'json',
                maxFileSize: 10485760,
                sequentialUploads: false,
                add: (e, data) => {
                    if (data.files.length > 0 && data.files[0].size > 10485760) {
                        this.uploadMessage = 'Sorry but we cannot upload your csv file. Please make sure your file is less than 1MB.';
                        this.$scope.$apply(() => {
                            this.initilialize();
                            $('#udfModal').modal('show');
                        });
                    } else {
                        data.submit();
                    }
                },
                success: (message) => {
                    this.uploadMessage = message;
                    this.$scope.$apply(() => {
                        this.initilialize();
                        $('#udfModal').modal('show');
                    });
                }
            });

        }
    }

    angular.module('musicStoreApp')
        .controller('ArtistController', [
            'ArtistService',
            '$location',
            '$routeParams',
            ArtistController
        ]);
} 