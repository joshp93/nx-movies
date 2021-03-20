import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MoviesComponent } from './components/movies/movies.component';
import { TopMoviesComponent } from './components/top-movies/top-movies.component';
import { TopTVComponent } from './components/top-tv/top-tv.component';
import { TVShowsComponent } from './components/tv-shows/tv-shows.component';
import { ApiKeyGuard } from './guards/api-key.guard';

const routes: Routes = [
  { path: "", redirectTo: "movies", pathMatch: "full" },
  { path: "movies", component: MoviesComponent, canActivate: [ApiKeyGuard] },
  { path: "movies/popular", component: TopMoviesComponent, canActivate: [ApiKeyGuard] },
  { path: "tv-shows", component: TVShowsComponent, canActivate: [ApiKeyGuard] },
  { path: "tv-shows/popular", component: TopTVComponent, canActivate: [ApiKeyGuard] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
