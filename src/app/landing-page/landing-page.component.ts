import { Component } from '@angular/core';
import { MoviesListComponent } from "../movies/movies-list/movies-list.component";
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-landing-page',
  imports: [MoviesListComponent, RouterOutlet],
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.css'
})
export class LandingPageComponent {
  upcomingReleasesMovies: any;
  inTheatersMovies: any;

  constructor() {
    setTimeout(() => {
      this.inTheatersMovies = [
        {
          title: 'Spider-Man: Across the Spider-Verse',
          releaseDate: new Date('06-02-2023'),
          price: 12.99,
          poster: 'assets/spiderman.jpg'
        },
        {
          title: 'Moana 2',
          releaseDate: new Date('11-27-2024'),
          price: 20.50,
          poster: 'assets/moana.jpg'
        }
      ];

      this.upcomingReleasesMovies = [
        {
          title: 'How to train your dragon',
          releaseDate: new Date('03-26-2010'),
          price: 25,
          poster: 'assets/httyd.jpg'
        },
        {
          title: 'Jurassic Park 3',
          releaseDate: new Date('07-18-2001'),
          price: 33.85,
          poster: 'assets/jurassicpark.jpg'
        },
        {
          title: "Howl's Moving Castle",
          releaseDate: new Date('2004-11-20'),
          price: 8.99,
          poster: 'assets/howls_moving_castle.jpg'
        }
      ];
    }, 2000); // Simulate a delay for loading movies
  }

}
