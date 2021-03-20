import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { retry, catchError, delay, retryWhen, tap } from "rxjs/operators";
import { HttpClient, HttpErrorResponse, HttpParams } from "@angular/common/http";
import { MovieSearchResult } from '../models/movie-search-result.model';
import { TVSearchResult } from '../models/tv-search-result.model';
import { MovieDetail } from '../models/movie-detail.model';
import { TVDetail } from '../models/tv-detail.model';

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
      params: this.buildSearchParams(query)
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
      params: this.buildSearchParams(query)
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

  buildSearchParams(query: string): HttpParams {
    return new HttpParams()
    .set("query", query)
    .set("api_key", localStorage.getItem("api_key"));
  }

  getMovieDetail(id: number): Observable<MovieDetail> {
    return this.httpClient.get<MovieDetail>(`${this.rootUri}movie`, {
      params: this.buildDetailParams(id)
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

  getTVDetail(id: number): Observable<TVDetail> {
    return this.httpClient.get<TVDetail>(`${this.rootUri}tv`, {
      params: this.buildDetailParams(id)
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

  buildDetailParams(id: number): HttpParams {
    return new HttpParams()
    .set("id", id.toString())
    .set("api_key", localStorage.getItem("api_key"));
  }
}
