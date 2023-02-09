import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { MediaItemResponse } from '../interfaces/media';

// it tells Angular to make an instance of this service to use in this NgModule and it's children modules.
@Injectable({
  providedIn: 'root'
})
export class MediaItemService {
  
  constructor(private http: HttpClient) {}

  get(medium) {
    const getOptions = {
      params: {medium}
    }

    // http.get returns http response object in Observable wrap
    // Для предварительного преобразования отправляемых объектом Observable данных 
    // или преобразования и управления самими Observable используются специальные функции - операторы,
    // они указываются в методе pipe()
    return this.http.get<MediaItemResponse>('mediaitems', getOptions)
    .pipe(map((response: MediaItemResponse) => {return response.mediaItems; }))
  }

  add(mediaItem) {
    return this.http.post('mediaitems', mediaItem)
  }

  delete(mediaItem) {
    return this.http.delete(`mediaitems/${mediaItem.id}`)
  }
}