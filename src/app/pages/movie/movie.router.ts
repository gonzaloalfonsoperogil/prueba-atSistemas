/**
 * @name movie.router
 * @author Gonzalo Alfonso
 * 
 */
 import { Routes, RouterModule } from '@angular/router';
import { MovieListComponent } from './movie-list/movie-list.component';
 
 /**
  * @const
  * @name MOVIE_ROUTER
  * @description Constante con todas las rutas del modulo Movies.
  */
 const MOVIE_ROUTER: Routes = [
   {
     path: '',
     component: MovieListComponent,
     pathMatch: 'full',
   }
 ];
 
 /**
  * @const
  * @name MovieRouter
  * @export MovieRouter
  * @description  Router para el modulo Movies
  */
 export const MovieRouter = RouterModule.forChild(MOVIE_ROUTER);
 