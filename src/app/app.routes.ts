import { Routes } from '@angular/router';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { IndexGenresComponent } from './genres/index-genres/index-genres.component';
import { CreateGenreComponent } from './genres/create-genre/create-genre.component';
import { IndexActorsComponent } from './actors/index-actors/index-actors.component';
import { CreateActorComponent } from './actors/create-actor/create-actor.component';
import { IndexTheatersComponent } from './theaters/index-theaters/index-theaters.component';
import { CreateTheaterComponent } from './theaters/create-theater/create-theater.component';
import { CreateMovieComponent } from './movies/create-movie/create-movie.component';
import { EditMovieComponent } from './movies/edit-movie/edit-movie.component';
import { EditActorComponent } from './actors/edit-actor/edit-actor.component';
import { EditTheaterComponent } from './theaters/edit-theater/edit-theater.component';
import { EditGenreComponent } from './genres/edit-genre/edit-genre.component';

export const routes: Routes = [
  {path: '', component: LandingPageComponent},

  // Genres paths
  {path: 'genres', component: IndexGenresComponent},
  {path: 'genres/create', component: CreateGenreComponent},
  {path: 'genres/edit/:id', component: EditGenreComponent},

  // Actors paths
  {path: 'actors', component: IndexActorsComponent},
  {path: 'actors/create', component: CreateActorComponent},
  {path: 'actors/edit/:id', component: EditActorComponent},


  // Theaters paths
  {path: 'theaters', component: IndexTheatersComponent},
  {path: 'theaters/create', component: CreateTheaterComponent},
  {path: 'theaters/edit/:id', component: EditTheaterComponent},

  // Create Movies paths
  {path: 'movies/create', component: CreateMovieComponent},
  {path: 'movies/edit/:id', component: EditMovieComponent},

  {path: '**', redirectTo: ''} // Wildcard route for a 404 page or redirect to home



];
