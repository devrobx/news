import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { MovieService } from 'src/app/services/movie.service';
import { Movie } from '../../models/Movie';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {
  movies: Movie[];
  movieTitle: Movie;

  title: string;
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private movie: MovieService
  ) {}

  ngOnInit() {}
}
