import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MoviesComponent } from './components/movies/movies.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";
import { MatButtonModule } from "@angular/material/button";
import { MatIconModule } from "@angular/material/icon";
import { HttpClientModule } from '@angular/common/http';
import { NavbarComponent } from './components/navbar/navbar.component';
import { TVShowsComponent } from './components/tv-shows/tv-shows.component';
import { SetupDialogComponent } from './components/setup-dialog/setup-dialog.component';
import { MatDialogModule, MatDialogRef, MAT_DIALOG_DATA } from "@angular/material/dialog";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TileComponent } from './components/tile/tile.component';
import { SearchComponent } from './components/search/search.component';
import { MovieDetailComponent } from './components/detail/detail.component';
import { MatTooltipModule } from "@angular/material/tooltip";
import { MatMenuModule } from "@angular/material/menu";
import { TopMoviesComponent } from './components/top-movies/top-movies.component';
import { TopTVComponent } from './components/top-tv/top-tv.component';

@NgModule({
  declarations: [
    AppComponent,
    MoviesComponent,
    NavbarComponent,
    TVShowsComponent,
    SetupDialogComponent,
    TileComponent,
    SearchComponent,
    MovieDetailComponent,
    TopMoviesComponent,
    TopTVComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    FormsModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatButtonModule,
    HttpClientModule,
    MatDialogModule,
    MatTooltipModule,
    MatMenuModule
  ],
  providers: [
    { provide: MatDialogRef, useValue: [] },
    { provide: MAT_DIALOG_DATA, useValue: [] }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
