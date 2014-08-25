module MusicStore.Models {

    export interface IAlbum {
        id: string;
        title: string;
        price: number;
        albumArtUrl: string;
        artist: IArtist;
        genre: IGenre;
        dateCreated: Date;
    }
}