import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BeerApiService {
  private apiUrl = 'https://api.punkapi.com/v2/'
  constructor(private http: HttpClient) { }

  getBeers() {
    const url = this.apiUrl + 'beers?page=1&per_page=20'
    return this.http.get(url)
  }
  getBeer(id: number) {
    const url = this.apiUrl + '/beers/' + id
    return this.http.get(url)
  }
}
