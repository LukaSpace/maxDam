import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './app.html',
})
export class AppComponent {
  title = 'Max-Dam Damian Czmok';

  formData = {
    name: '',
    email: '',
    message: ''
  };

  onSubmit(form: NgForm) {
    if (form.valid) {
      alert('Dziękujemy za wiadomość! Skontaktujemy się niebawem.');
      form.resetForm();
    }
  }
}