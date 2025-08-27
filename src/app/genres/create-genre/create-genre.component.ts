import { Component, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { Router, RouterLink } from '@angular/router';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { firstLetterShouldBeUppercase } from '../../shared/functions/validations';


@Component({
  selector: 'app-create-genre',
  imports: [MatButtonModule, MatIconModule, RouterLink, ReactiveFormsModule, MatFormFieldModule, MatInputModule],
  templateUrl: './create-genre.component.html',
  styleUrl: './create-genre.component.css'
})
export class CreateGenreComponent {

  router = inject(Router);
  private formBuilder = inject(FormBuilder);

  form = this.formBuilder.group({
    name: ['', {validators: [Validators.required, firstLetterShouldBeUppercase()]}],
  });

  getErrorMessagesForName(): string {
    let field = this.form.controls.name;

    if(field.hasError('required')){
      return 'The name field is required';
    }

    if(field.hasError('firstLetterShouldBeUppercase')){
      return field.getError('firstLetterShouldBeUppercase').message;
    }

    return "";
  }

  saveChanges() {
    // Logic to save the new genre
    console.log(this.form.value);
    this.router.navigate(['/genres']);
  }
}
