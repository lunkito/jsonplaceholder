import { Album } from '../models/album';
import { Post } from '../models/post';

export class Converter {
   static albumResponseToAlbum = (albumResponse: Album): Album => {
      return Converter.convertResponseToObject(albumResponse) as Album;
   }

   static postResponseToPost(postResponse: Post) {
      return Converter.convertResponseToObject(postResponse) as Post;
   }

   private static convertResponseToObject(input: object) {
      const output = {};
      for (const key in input) {
         if (input.hasOwnProperty(key)) {
            output[key] = input[key];
         }
      }
      return output;
   }
}