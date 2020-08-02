import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { retry, catchError } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class MovieListService {
  baseURL = "https://ghibliapi.herokuapp.com/films";
  constructor(private http: HttpClient) { }

  getMoviesList() {
    return this.http.get(this.baseURL).pipe(
      retry(5),
      catchError(error => {
        return error;
      })
    );
  }
}
