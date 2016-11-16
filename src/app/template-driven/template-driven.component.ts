import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'template-driven',
  templateUrl: 'template-driven.component.html',
  styles: [`
    input.ng-invalid {
      border: 1px solid #d99;
    }
  `]
})
export class TemplateDrivenComponent {
  user = {
    username: 'Jimi',
    email: 'jimi@hendrix.com',
    password: '12345',
    gender: 'other'
  };

  genders = [
    'male',
    'female',
    'other'
  ];

  onSubmit(form: NgForm) {
    console.log(form.value);
  }
}
