/**
 * @name movie-list.component
 * @author Gonzalo Alfonso
 * 
 */
import { Component, ErrorHandler, OnInit } from '@angular/core';
import { BaseComponent } from 'src/app/@core/abstracts/base-component.abstract';
import { MoviesRx } from '../movie.rx';
import { IMovie } from './movie-list.interfaces';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.scss']
})
export class MovieListComponent extends BaseComponent implements OnInit {

  public movieList:IMovie[] = [];

  constructor(
    private _moviesRx: MoviesRx
  ) {
    super();
  }

  ngOnInit(): void {
    this._subscribe();
    this._moviesRx.getMovieList();
  }

  public trackByItems(index: number, item: IMovie): number {return item.id};

  override _subscribe(): void {
    this._subscriptions.push(
      this._moviesRx.movieList.subscribe(data => {
        this.movieList = data;
      })
      );
  }

}
