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
            return this.albumService.getList('', { genre: genre });
        }

        getAlbumById(id: number) {
            return this.albumService.customGET('', { id: id });
        }

        saveAlbum(album: MusicStore.Models.IAlbum) {
            return this.albumService.customPOST(album);
        }
    }

    angular.module('musicStoreApp')
        .service('AlbumService', [
            'Restangular',
            AlbumService
        ]);
}