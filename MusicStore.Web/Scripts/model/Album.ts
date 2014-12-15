module MusicStore.Models {

    export class  Album {
        id: string;
        title: string;
        price: number;
        albumArtUrl: string;
        artist: Artist;
        genre: Genre;
        dateCreated: Date;
    }
}