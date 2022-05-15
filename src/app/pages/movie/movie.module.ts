
/**
 * @name movie.module
 * @author Gonzalo Alfonso
 * 
 */
import { NgModule } from '@angular/core';
import { MovieRouter } from './movie.router';
import { MovieListComponent } from './movie-list/movie-list.component';
 
 @NgModule({
   declarations: [
     MovieListComponent
   ],
 
   providers: [
       
   ],
 
   imports: [
     MovieRouter
   ]
 })
 
 /**
  * @class
  * @name MovieModule
  * @export MovieModule
  * @classdesc Modulo principal de Movies
  */
 export class MovieModule {}
 