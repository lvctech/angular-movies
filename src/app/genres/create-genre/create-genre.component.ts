import { Component, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { Router, RouterLink } from '@angular/router';
@Component({
  selector: 'app-create-genre',
  imports: [MatButtonModule, MatIconModule, RouterLink],
  templateUrl: './create-genre.component.html',
  styleUrl: './create-genre.component.css'
})
export class CreateGenreComponent {

  router = inject(Router);

  saveChanges() {
    // Logic to save the new genre

    this.router.navigate(['/genres']);
  }
}
