import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MoviesListComponent } from './pages/movie-list/movie-list.component';
import { MenuComponent } from './pages/menu/menu.component';
import { MovieDetailComponent } from './pages/movie-detail/movie-detail.component';
import { MovieAddComponent } from './pages/movie-add/movie-add.component';

@NgModule({
  declarations: [
    AppComponent,
    MoviesListComponent,
    MenuComponent,
    MovieDetailComponent,
    MovieAddComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
