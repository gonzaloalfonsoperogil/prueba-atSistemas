/**
 * @Copyright
 * Copyright (c) 2019 - BBVA. All Rights Reserved.
 *
 * Este componente software es propiedad de BBVA
 * contiene información confidencial y tanto en su totalidad como parcialmente
 * no puede ser transferido, reproducido o publicado,  bien sea directa o
 * indirectamente, sin la aprobación escrita de BBVA.
 *
 * @file api-catalog/api-catalog.services.ts
 * @license BBVA
 */
 import { Injectable } from '@angular/core';
 import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { LoggerService } from 'src/app/@core/services/logger.service';
import { map } from 'rxjs';
import { SERVER_BASE_PATH, STANDARD_HEADERS } from 'src/app/app.constants';
import { MOVIE_ENDPOINTS } from './movie.constants';
import { IMovie } from './movie-list/movie-list.interfaces';

 
 /**
  * @class
  * @name MovieService
  * @export MovieService
  * @classdesc MovieService
  * @implements {OnInit}
  */
 @Injectable()
 export class MovieService {
     private _settings = MOVIE_ENDPOINTS;
     private _basePath = SERVER_BASE_PATH;
     private _getApiListEndpoint = `${this._basePath}${this._settings.movieListEndpoint}`;
     private _getApiListHeaders = STANDARD_HEADERS;

   /**
    * @constructor
    * Constructor for {@link MovieService}
    *
    * @param http {@link HttpClient}
    * @param logger {@link LoggerService}
    */
   constructor(
       private http: HttpClient,
       private logger: LoggerService
       ) {}
 
   /**
    * @public
    * @name getMovieList
    * @description Recoger listado de peliculas.
    * @return
    */
   public getMovieList() {
     return this.http
       .get(this._getApiListEndpoint, {
         headers: new HttpHeaders(this._getApiListHeaders),
         observe: 'response',
       })
       .pipe(
         map((res: HttpResponse<IMovie[]> | HttpResponse<Object>) => {
           this.logger.log('Exito en la llamada al servicio: Movie List ====>' + res);
           let _body = res.body !== null ? res.body : null;
           return _body;
         })
       );
   }
}