import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { map, catchError } from 'rxjs/operators';
import { MediaItemResponse } from '../interfaces/media';
import { throwError } from 'rxjs';

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
    .pipe(
      map((response: MediaItemResponse) => {return response.mediaItems; }),
      catchError(this.handleError)
    )
  }

  add(mediaItem) {
    return this.http.post('mediaitems', mediaItem)
    .pipe(catchError(this.handleError))
  }

  delete(mediaItem) {
    return this.http.delete(`mediaitems/${mediaItem.id}`)
    .pipe(catchError(this.handleError))
  }

  private handleError(error: HttpErrorResponse) {
    console.log("Error: ", error.message)
    return throwError("A data error occured. Please try again.")
  }
}