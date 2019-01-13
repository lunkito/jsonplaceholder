import { Album } from '../models/album';

export class Converter {
   static albumResponseToAlbum = (albumResponse: Album): Album => {
      const album = new Album();
      album.id = albumResponse.id;
      album.userId = albumResponse.userId;
      album.title = albumResponse.title;
      album.photos = albumResponse.photos;
      return album;
   } 
}