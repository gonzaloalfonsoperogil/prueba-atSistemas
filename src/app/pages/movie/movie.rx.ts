
import { LoggerService } from 'src/app/@core/services/logger.service';
import { ErrorHandler, Injectable } from '@angular/core';
import { BaseComponent } from 'src/app/@core/abstracts/base-component.abstract';
import { Subject } from 'rxjs';
import { MovieService } from './movie.service';
 
/**
 *
 * @class
 * @name MoviesRx
 * @export MoviesRx
 * @extends MoviesRx
 * @description Logica de negocio para el modulo de Movies
 */
 @Injectable()
 export class MoviesRx {
    public movieList$: Subject<any> = new Subject(); 
 
   /**
    * @constructor
    * Constructor for {@link MoviesRx}
    *
    * @param err {@link ErrorHandler}
    * @param logger {@link LoggerService}
    */
   constructor(
     protected err: ErrorHandler,
     protected logger: LoggerService,
     protected movieService: MovieService
   ) { }
 
   /**
    * @name movieList
    * @description metodo que devuelve el observable por el que se notificará la respuesta del servicio listado de peliculas
    */
   get movieList() {
     return this.movieList$;
   }

   public getMovieList () {
    this.movieService.getMovieList().subscribe((list: any) => {
        this.movieList$.next(list);
      });
   }
 
   
}