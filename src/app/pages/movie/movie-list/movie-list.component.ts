/**
 * @name movie-list.component
 * @author Gonzalo Alfonso
 * 
 */
import { Component, OnInit } from '@angular/core';
import { BaseComponent } from 'src/app/@core/abstracts/base-component.abstract';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.scss']
})
export class MovieListComponent extends BaseComponent implements OnInit {

  constructor() {
    super();
  }

  ngOnInit(): void {
  }

  override _subscribe(): void {
    
  }

}
