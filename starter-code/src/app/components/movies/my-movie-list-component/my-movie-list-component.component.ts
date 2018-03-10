import { Movie } from './../../../shared/models/movies.model'
import { MoviesService } from './../../../shared/services/movies.service'
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'
import { Router } from '@angular/router';

@Component({
  selector: 'app-my-movie-list-component',
  templateUrl: './my-movie-list-component.component.html',
  styleUrls: ['./my-movie-list-component.component.css']
})

export class MyMovieListComponentComponent implements OnInit {
  movies: Array<Movie> = [];

  constructor(
    private router: Router,
    private moviesService: MoviesService) {}

  ngOnInit() {
    this.movies = this.moviesService.getMovies();
  }

  onClickPoster(id: number) {
    console.log("clickdone")
    this.router.navigate(['/movie', id]);
  }
}
