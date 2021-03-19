import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpParams } from "@angular/common/http";
import { MovieSearchResult } from '../models/movie-search-result.model';
import { TV } from '../models/tv.model';
import { TVSearchResult } from '../models/tv-search-result.model';

@Injectable({
  providedIn: 'root'
})
export class TMDBService {
  private rootUri: string;
  constructor(private httpClient: HttpClient) {
    this.rootUri = "http://localhost:8080/";
  }

  getMovies(query: string): Observable<MovieSearchResult> {
    return this.httpClient.get<MovieSearchResult>(this.rootUri + 'api/v1/movies', { params: new HttpParams({fromString: `query=${query}`}) });
  }

  getTVShows(query:string): Observable<TVSearchResult> {
    return this.httpClient.get<TVSearchResult>(this.rootUri + 'api/v1/tv-shows', { params: new HttpParams({fromString: `query=${query}`}) });
  }
}
