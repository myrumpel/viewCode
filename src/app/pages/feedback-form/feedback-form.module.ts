import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FeedbackFormComponent } from './feedback-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { NgxMaskDirective } from 'ngx-mask';
import { MatCheckbox } from '@angular/material/checkbox';
import { RouterLink } from '@angular/router';
import { MatButton } from '@angular/material/button';
import { HeadlineComponent } from '../../components/ui/headlines/headline.component';

@NgModule({
  declarations: [FeedbackFormComponent],
  imports: [
    CommonModule,
    HeadlineComponent,
    ReactiveFormsModule,
    NgxMaskDirective,
    MatCheckbox,
    RouterLink,
    MatButton,
  ],
})
export class FeedbackFormModule {}
