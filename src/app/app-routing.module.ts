import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MovieListComponent } from './pages/movie/movie-list/movie-list.component';

const routes: Routes = [
  {
    path: 'movies', component: MovieListComponent,
    children: [
      
    ]
  },
  { path: '**', redirectTo: '/movies', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
