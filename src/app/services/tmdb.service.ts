import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { retry, catchError, delay, retryWhen, tap } from "rxjs/operators";
import { HttpClient, HttpErrorResponse, HttpParams } from "@angular/common/http";
import { MovieSearchResult } from '../models/movie-search-result.model';
import { TVSearchResult } from '../models/tv-search-result.model';

@Injectable({
  providedIn: 'root'
})
export class TMDBService {
  private rootUri: string;
  constructor(private httpClient: HttpClient) {
    this.rootUri = "http://localhost:8080/api/v1/";
  }

  getMovies(query: string): Observable<MovieSearchResult> {
    return this.httpClient.get<MovieSearchResult>(`${this.rootUri}movies`, {
      params: this.buildHttpParams(query)
    }).pipe(
      delay(2000),
      retry(1),
      catchError((error: HttpErrorResponse) => {
        let errorMessage = '';
        if (error.error instanceof ErrorEvent) {
          errorMessage = `Error: ${error.error.message}`;
        } else {
          errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
        }
        window.alert(errorMessage);
        return throwError(errorMessage);
      })
    )
  }

  getTVShows(query: string): Observable<TVSearchResult> {
    return this.httpClient.get<TVSearchResult>(`${this.rootUri}tv-shows`, {
      params: this.buildHttpParams(query)
    }).pipe(
      delay(2000),
      retry(1),
      catchError((error: HttpErrorResponse) => {
        let errorMessage = '';
        if (error.error instanceof ErrorEvent) {
          errorMessage = `Error: ${error.error.message}`;
        } else {
          errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
        }
        window.alert(errorMessage);
        return throwError(errorMessage);
      })
    )
  }

  buildHttpParams(query: string): HttpParams {
    return new HttpParams()
    .set("query", query)
    .set("api_key", localStorage.getItem("api_key"));
  }
}
