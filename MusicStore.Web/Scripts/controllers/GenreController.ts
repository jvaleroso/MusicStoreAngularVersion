/// <reference path="../typings/angular-file-upload/angular-file-upload.d.ts" />

module MusicStore.Controllers {
    export interface IGenreParam extends ng.route.IRouteParamsService {
        genre: string;
    }

    export class GenreController {
        private genres: MusicStore.Models.Genre[];
        private genre: MusicStore.Models.Genre;
        private isLoadingData: boolean;

        constructor(
            private $rootScope: ng.IRootScopeService,
            private $location: ng.ILocationService,
            private $routeParams: IGenreParam,
            private genreService: MusicStore.Services.GenreService,
            private $upload: ng.angularFileUpload.IUploadService) {

            this.initialize();
        }

        public createNewGenre(genre) {
            this.genreService.saveGenre(genre).then(() => {
                this.initialize();
            }, (error) => {
                    console.log(error);
                });
        }

        public downloadGenres() {
            location.href = 'api/genre/download';
        }

        public getClass(musicGenre: string) {
            return this.$routeParams.genre == musicGenre;
        }

        public initialize() {
            this.isLoadingData = true;
            this.genreService.getGenres().then(genres => {
                this.genres = genres;
                this.isLoadingData = false;
            }, (error) => {
                    console.log(error);
                });
        }

        public uploadGenres($files: File[]) {
            var uploads: ng.IPromise<any>[] = [];

            if ($files.length > 0) {

                var file = $files[0];
                uploads.push(this.$upload.upload<any>({
                    url: 'api/genre/upload',
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
        .controller('GenreController', [
            '$rootScope',
            '$location',
            '$routeParams',
            'GenreService',
            '$upload',
            GenreController
        ]);
}
