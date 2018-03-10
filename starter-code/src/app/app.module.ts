import { MoviesService } from './../app/shared/services/movies.service'
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { MyHomeComponentComponent } from './components/misc/home/my-home-component/my-home-component.component';
import { MyMovieComponentComponent } from './components/movies/my-movie-component/my-movie-component.component';
import { routes } from './app.routes';
import { MyMovieListComponentComponent } from './components/movies/my-movie-list-component/my-movie-list-component.component';

@NgModule({
  declarations: [
    AppComponent,
    MyHomeComponentComponent,
    MyMovieComponentComponent,
    MyMovieListComponentComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routes)
  ],
  providers: [MoviesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
