import { Component, Input } from '@angular/core';
import { CurrencyPipe, DatePipe, NgOptimizedImage, UpperCasePipe } from '@angular/common';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-movies-list',
  imports: [DatePipe, RouterOutlet, UpperCasePipe, CurrencyPipe, NgOptimizedImage],
  templateUrl: './movies-list.component.html',
  styleUrl: './movies-list.component.css'
})
export class MoviesListComponent {
  @Input({required: true})
  movies?: any[];

}
