import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { API_URL, API_KEY } from '../shared/shared-data';

@Injectable()
export class DashboardService {
  constructor(private http: HttpClient) {}

  getLatestTheaterMovies() {
    const today = new Date();
    const tempLastMonth = new Date();
    const lastMonth = new Date(tempLastMonth.setFullYear(tempLastMonth.getFullYear(), tempLastMonth.getMonth() - 1));

    // date query date range

    const startDte = `${lastMonth.getFullYear()}-${lastMonth.getMonth() + 1}-${lastMonth.getDate()}`;
    const endDte = `${today.getFullYear()}-${today.getMonth() + 1}-${today.getDate()}`;

    // query parameters

    const dateQuery = `primary_release_date.gte=${startDte}&primary_release_date.lte=${endDte}`;
    const sortQuery = 'sort_by=popularity.desc&primary_release_date.desc';

    const url = `${API_URL}/3/discover/movie?api_key=${API_KEY}&${dateQuery}&${sortQuery}`;

    return this.http.get(url);
  }

  getHighestRatedMovies() {
    const url = `${API_URL}/3/discover/movie?api_key=${API_KEY}&certification_country=US&sort_by=vote_average.desc&&vote_count.gte=5000`;

    return this.http.get(url);
  }
}
