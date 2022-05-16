/**
 * @name movie-list.component
 * @author Gonzalo Alfonso
 * 
 */
import { Component, OnInit } from '@angular/core';
import { BaseComponent } from 'src/app/@core/abstracts/base-component.abstract';
import { MoviesRx } from '../movie.rx';

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.scss']
})
export class MovieDetailComponent extends BaseComponent implements OnInit {

  constructor(
    private _moviesRx: MoviesRx
  ) {
    super();
  }

  ngOnInit(): void {
    this._subscribe();
  }

  override _subscribe(): void {
  }

}
