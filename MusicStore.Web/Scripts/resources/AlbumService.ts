module MusicStore.Services {

    export class AlbumService {
        private albumService: restangular.IElement;

        constructor(
            private restangular: restangular.IElement) {
            this.albumService = restangular.all('api/album');
        }

        public getAlbums() {
            return this.albumService.getList();
        }

        public getAlbumsByGenre(genre: string) {
            return this.albumService.customGETLIST('', { genre: genre });
        }

        public getAlbumById(id: number) {
            return this.albumService.customGET('', { id: id });
        }

        public saveAlbum(album: Models.Album) {
            return this.albumService.customPOST(album);
        }

        public updateAlbum(album: Models.Album) {
            return this.albumService.customPUT(album);
        }

        public deleteAlbum(id: number) {
            return this.albumService.customDELETE('', { id: id });
        }

    }

    angular.module('musicStoreApp')
        .service('AlbumService', [
            'Restangular',
            AlbumService
        ]);
}