import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { EmailValidatorService } from '../../services/email-validator.service';
import { ClearPhoneNumberService } from '../../services/clear-phone-number.service';
import { HttpService } from '../../services/http.service';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';

@Component({
  selector: 'app-feedback-form',
  templateUrl: './feedback-form.component.html',
  styleUrl: './feedback-form.component.scss',
  changeDetection: ChangeDetectionStrategy['OnPush'],
})
export class FeedbackFormComponent {
  constructor(
    private emailValidator: EmailValidatorService,
    private clearPhoneNumber: ClearPhoneNumberService,
    private http: HttpService,
    private builder: FormBuilder
  ) {}

  feedbackForm = this.builder.group({
    name: new FormControl('', [
      Validators.required,
      Validators.minLength(2),
      Validators.maxLength(60),
    ]),
    phoneNumber: new FormControl('', [
      Validators.required,
      Validators.maxLength(20),
      Validators.pattern(/^\+7 \(\d{3}\) \d{3}-\d{2}-\d{2}$/),
    ]),
    email: new FormControl('', [Validators.required, this.emailValidator.toValidate()]),
    body: new FormControl('', [
      Validators.required,
      Validators.minLength(6),
      Validators.maxLength(300),
    ]),
    agree: new FormControl(false, Validators.required),
  });

  fieldIsValid(fieldName: string, kindOfClass: 'red' | 'green') {
    switch (kindOfClass) {
      case 'red': {
        return (
          this.feedbackForm.get(fieldName)?.touched && this.feedbackForm.get(fieldName)?.invalid
        );
      }
      case 'green': {
        return this.feedbackForm.get(fieldName)?.valid;
      }
    }
  }

  onSubmit() {
    if (this.feedbackForm.valid) {
      let { agree, phoneNumber, ...resultForm } = this.feedbackForm.value;
      console.log(this.feedbackForm);
      phoneNumber = this.clearPhoneNumber.toClear(phoneNumber!);
      const formDataToSend = { ...resultForm, phoneNumber };
      console.log(formDataToSend);
      this.http
        .postData(JSON.stringify(formDataToSend), 'https://google.com')
        .pipe(untilDestroyed(this))
        .subscribe();
    }
  }
}
