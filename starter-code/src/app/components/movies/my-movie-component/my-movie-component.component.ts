import { Movie } from './../../../shared/models/movies.model'
import { MoviesService } from './../../../shared/services/movies.service'
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-my-movie-component',
  templateUrl: './my-movie-component.component.html',
  styleUrls: ['./my-movie-component.component.css']
})
export class MyMovieComponentComponent implements OnInit {

movie: Movie

  constructor(
    private MoviesService: MoviesService,
    private routes:  ActivatedRoute
  ) { }

  ngOnInit() {
    this.routes.
    params.
    subscribe(params => this.movie = this.MoviesService.getById(Number(params['id'])))
  }

}
