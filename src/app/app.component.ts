import { CurrencyPipe, DatePipe, NgOptimizedImage, UpperCasePipe } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [DatePipe, RouterOutlet, UpperCasePipe, CurrencyPipe, NgOptimizedImage],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  movies = [
    {
      title: 'Spider-Man: Across the Spider-Verse',
      releaseDate: new Date(),
      price: 12.99,
      poster: 'assets/spiderman.jpg' // corregido
    },
    {
      title: 'Moana 2',
      releaseDate: new Date("2016-05-03"),
      price: 20.50,
      poster: 'assets/moana.jpg'
    },
    {
      title: 'How to train your dragon',
      releaseDate: new Date("2016-05-03"),
      price: 25,
      poster: 'assets/httyd.jpg'
    },
    {
      title: 'Jurassic Park 3',
      releaseDate: new Date("2016-05-03"),
      price: 33.85,
      poster: 'assets/jurassicpark.jpg'
    },
    {
      title: "Howl's Moving Castle",
      releaseDate: new Date("2016-05-03"),
      price: 8.99,
      poster: 'assets/howls_moving_castle.jpg'
    }
  ];
}
