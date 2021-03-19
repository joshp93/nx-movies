import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MoviesComponent } from './components/movies/movies.component';
import { TvShowsComponent } from './components/tv-shows/tv-shows.component';

const routes: Routes = [
  { path: "", redirectTo: "movies", pathMatch: "full" },
  { path: "movies", component: MoviesComponent },
  { path: "tv-shows", component: TvShowsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
