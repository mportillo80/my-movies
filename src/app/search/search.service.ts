import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { API_URL, API_KEY } from '../shared/shared-data';

@Injectable()
export class SearchService {
  constructor(private http: HttpClient) {}

  searchMovies(movieName: string, year: number) {
    const movieQuery = (movieName) ? `&query=${movieName}` : '';
    const yearQuery = (year) ? `&year=${year}` : '';
    const url = `${API_URL}/3/search/movie?api_key=${API_KEY}${movieQuery}${yearQuery}`;

    return this.http.get(url);
  }
}
