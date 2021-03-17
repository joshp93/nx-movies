import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpParams } from "@angular/common/http";
import { SearchResult } from '../models/search-result.model';

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  private rootUri: string;
  constructor(private httpClient: HttpClient) {
    this.rootUri = "http://localhost:8080/";
  }

  getMovies(query: string): Observable<SearchResult> {
    return this.httpClient.get<SearchResult>(this.rootUri + 'api/v1/movies', { params: new HttpParams({fromString: `query=${query}`}) });
  }
}
