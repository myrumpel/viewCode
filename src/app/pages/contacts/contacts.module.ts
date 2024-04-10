import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactsComponent } from './contacts.component';
import { HeadlineComponent } from '../../components/ui/headlines/headline.component';

@NgModule({
  declarations: [ContactsComponent],
  imports: [CommonModule, HeadlineComponent],
})
export class ContactsModule {}
