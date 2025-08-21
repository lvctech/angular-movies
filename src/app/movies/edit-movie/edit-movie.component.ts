import { Component, numberAttribute, Input } from '@angular/core';

@Component({
  selector: 'app-edit-movie',
  imports: [],
  templateUrl: './edit-movie.component.html',
  styleUrl: './edit-movie.component.css'
})
export class EditMovieComponent {

  @Input({transform: numberAttribute}) id!: number;

}
