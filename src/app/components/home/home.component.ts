import { Component, OnInit } from '@angular/core';
import { MovieService } from '../../services/movie.service';
import { Movie } from '../../models/Movie';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  movies: Movie[];

  title: string;
  found = false;
  constructor(private movieService: MovieService) {}

  ngOnInit() {}

  findMovies(e, name) {
    e.preventDefault();
    this.found = true;
    console.log(name, this.found);
    this.movieService.getMovies(name).subscribe(movie => {
      console.log(movie);
      this.movies = movie.results;
    });
  }
}
