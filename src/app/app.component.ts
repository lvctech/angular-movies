import {CurrencyPipe, DatePipe, NgOptimizedImage, UpperCasePipe} from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MoviesListComponent } from './movies/movies-list/movies-list.component';
import { MenuComponent } from "./shared/components/menu/menu.component";
import { RatingComponent } from "./shared/components/rating/rating.component";
import { MatButtonModule } from '@angular/material/button';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [DatePipe, RouterOutlet, UpperCasePipe, CurrencyPipe, NgOptimizedImage, MoviesListComponent, MenuComponent, RatingComponent, MatButtonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  // processRating(rate: number) {
  //   alert(`You rated the movie a ${rate} out of 5 stars`);
  // }
}
