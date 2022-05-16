
/**
 * @name movie.module
 * @author Gonzalo Alfonso
 * 
 */
import { NgModule } from '@angular/core';
import { MovieRouter } from './movie.router';
import { MovieListComponent } from './movie-list/movie-list.component';
import { HttpClientModule } from '@angular/common/http';
import { MoviesRx } from './movie.rx';
import { LoggerService } from 'src/app/@core/services/logger.service';
import { MovieService } from './movie.service';
import { CommonModule } from '@angular/common';
import { MovieDetailComponent } from './movie-detail/movie-detail.component';
 
 @NgModule({
   declarations: [
     MovieListComponent,
     MovieDetailComponent
   ],
 
   providers: [
    MoviesRx,
    LoggerService,
    MovieService
   ],
 
   imports: [
    CommonModule,
     MovieRouter,
     HttpClientModule
   ]
 })
 
 /**
  * @class
  * @name MovieModule
  * @export MovieModule
  * @classdesc Modulo principal de Movies
  */
 export class MovieModule {}
 