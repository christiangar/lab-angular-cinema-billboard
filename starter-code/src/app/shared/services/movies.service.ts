import { Injectable } from '@angular/core';
import { Movie } from './../models/movies.model'
import { movies } from './../data/sample-movies'

@Injectable()
export class MoviesService {


  movies: Array<Movie> = movies;

  constructor() { }

  getMovies(): Array<Movie> {
    return this.movies;
  }

  getById(id: number): Movie {
    return this.movies.find(movie => movie.id === id)
  }
}
