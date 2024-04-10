import { Injectable } from '@angular/core';
import { AbstractControl } from '@angular/forms';

@Injectable({
  providedIn: 'root',
})
export class EmailValidatorService {
  emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  toValidate() {
    return (control: AbstractControl) => {
      if (control.value && !this.emailPattern.test(control.value)) {
        return { invalidEmail: true };
      }
      return null;
    };
  }
}
