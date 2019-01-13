import { Photo } from './photo';

export class Album {
  userId: number;
  id: number;
  title:	string;
  photos?: Photo[];

  addPhotos(photos: Photo[]) {
    this.photos = photos;
  }
}