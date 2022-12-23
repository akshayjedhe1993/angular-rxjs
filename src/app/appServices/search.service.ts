import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Search } from '../appInterface/search';

@Injectable({
  providedIn: 'root',
})
export class SearchService {
  url = 'https://jsonplaceholder.typicode.com/photos';

  constructor(private http: HttpClient) {}

  getSearches(searchTerm): Observable<Search[]> {
    return this.http.get<Search[]>(this.url + '?q=' + searchTerm);
  }
}
