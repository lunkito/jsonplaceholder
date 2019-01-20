import { Album } from '../models/album';
import { Post } from '../models/post';

// ABSTRACT CLASS
export abstract class Converter {
   public static albumResponseToAlbum = (albumResponse: Album): Album => {
      return Converter.convertResponseToObject(albumResponse) as Album;
   }

   public static postResponseToPost = (postResponse: Post) => {
      return Converter.convertResponseToObject(postResponse) as Post;
   }

   private static convertResponseToObject = (input: object) => {
      const output = {};
      for (const key in input) {
         if (input.hasOwnProperty(key)) {
            output[key] = input[key];
         }
      }
      return output;
   }
}

// MODULE
export module ConverterModule {
   export const albumResponseToAlbum = (albumResponse: Album): Album => {
      return convertResponseToObject(albumResponse) as Album;
   };

   export const postResponseToPost = (postResponse: Post) => {
      return convertResponseToObject(postResponse) as Post;
   };

   const convertResponseToObject = (input: object) => {
      const output = {};
      for (const key in input) {
         if (input.hasOwnProperty(key)) {
            output[key] = input[key];
         }
      }
      return output;
   };
}