import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Movie } from '../models/Movie';
@Injectable({
  providedIn: 'root'
})
export class MovieService {
  constructor(private http: HttpClient) {}

  getMovies(title: string): Observable<Movie[]> {
    return this.http.get<Movie[]>(
      `https://api.themoviedb.org/3/search/movie?query=${title}&api_key=f9b276a8a665a41333c2def2f632a2e4`
    );
  }

  getMovie(title: string, id: string): Observable<Movie> {
    return this.http.get<Movie>(
      `https://api.themoviedb.org/3/search/movie?query=${title}&api_key=f9b276a8a665a41333c2def2f632a2e4`
    );
  }
}
