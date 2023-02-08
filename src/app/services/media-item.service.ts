import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

// it tells Angular to make an instance of this service to use in this NgModule and it's children modules.
@Injectable({
  providedIn: 'root'
})
export class MediaItemService {
  mediaItems = [
    {
      id: 1,
      name: 'Firebug',
      medium: 'Series',
      category: 'Science Fiction',
      year: 2010,
      watchedOn: 1294166565384,
      isFavorite: false
    },
    {
      id: 2,
      name: 'The Small Tall',
      medium: 'Movies',
      category: 'Comedy',
      year: 2015,
      watchedOn: null,
      isFavorite: true
    }, {
      id: 3,
      name: 'The Redemption',
      medium: 'Movies',
      category: 'Action',
      year: 2016,
      watchedOn: null,
      isFavorite: false
    }, {
      id: 4,
      name: 'Hoopers',
      medium: 'Series',
      category: 'Drama',
      year: null,
      watchedOn: null,
      isFavorite: true
    }, {
      id: 5,
      name: 'Happy Joe: Cheery Road',
      medium: 'Movies',
      category: 'Action',
      year: 2015,
      watchedOn: 1457166565384,
      isFavorite: false
    }
  ];

  constructor(private http: HttpClient) {}

  get() {
    // http.get returns http response object in Observable wrap
    // Для предварительного преобразования отправляемых объектом Observable данных 
    // или преобразования и управления самими Observable используются специальные функции - операторы,
    // они указываются в методе pipe()
    return this.http.get<MediaItemResponse>('mediaitems')
    .pipe(map(response => {return response.mediaItems; }))
  }

  add(mediaItem) {
    this.mediaItems.push(mediaItem)
  }

  delete(mediaItem) {
    const index = this.mediaItems.indexOf(mediaItem)
    if (index > -1) {
      this.mediaItems.splice(index, 1)
    }
  }
}

interface MediaItem {
  id: number;
  name: string;
  medium: string;
  category: string;
  year: number;
  watchedOn: number;
  isFavorite: boolean;
}

interface MediaItemResponse {
  mediaItems: MediaItem[];
}