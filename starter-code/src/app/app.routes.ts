import { MyHomeComponentComponent } from './components/misc/home/my-home-component/my-home-component.component';
import { MyMovieComponentComponent } from './components/movies/my-movie-component/my-movie-component.component';
import { MyMovieListComponentComponent } from './components/movies/my-movie-list-component/my-movie-list-component.component';
import { Routes } from '@angular/router';

export const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: MyMovieListComponentComponent },
    { path: 'movie/:id', component: MyMovieComponentComponent }
    // { path: 'contacts/:id', component: ContactItemComponent },
];
