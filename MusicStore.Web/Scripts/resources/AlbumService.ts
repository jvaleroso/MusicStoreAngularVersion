module MusicStore.Services {

    export class AlbumService {
        private albumService: restangular.IElement;

        constructor(
            private restangular: restangular.IElement) {
            this.albumService = restangular.all('album');
        }

        getAlbums(): MusicStore.Models.IAlbum[] {
            var albumList: MusicStore.Models.IAlbum[];
            this.albumService.getList().then((albums: MusicStore.Models.IAlbum[]) => {
                albumList = albums;
            }, (error: Error) => {
                    console.log(error);
                });
            return albumList;
        }

        getAlbumsByGenre(genre: string): MusicStore.Models.IAlbum[] {
            var albumList: MusicStore.Models.IAlbum[];
            this.albumService.getList('album', { genre: genre })
                .then((albums: MusicStore.Models.IAlbum[]) => {
                    albumList = albums;
                }, (error: Error) => {
                    console.log(error);
                });
            return albumList;
        }

        getAlbumById(id: number): MusicStore.Models.IAlbum {
            var album: MusicStore.Models.IAlbum;

            this.restangular.one('album', id).get().then((returnedAlbum: MusicStore.Models.IAlbum) => {
                album = returnedAlbum;
            }, (error: Error) => {
                    console.log(error);
                });

            return album;
        }

        createAlbum(album: MusicStore.Models.IAlbum) {
            var returnedAlbum: MusicStore.Models.IAlbum;

            this.albumService.post(album).then((newAlbum: MusicStore.Models.IAlbum) => {
                returnedAlbum = newAlbum;
            }, (error: Error) => {
                    console.log(error.message);
                });
            return returnedAlbum;
        }
    }

    angular.module('musicStoreApp')
        .service('AlbumService', [
            'Restangular',
            AlbumService
        ]);
}