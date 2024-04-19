import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactsComponent } from './contacts.component';
import { HeadlineComponent } from '../../components/ui/headlines/headline.component';
import { MatButtonModule } from '@angular/material/button';
import { MatIcon } from '@angular/material/icon';
import { RouterLink } from '@angular/router';

@NgModule({
  declarations: [ContactsComponent],
  imports: [CommonModule, HeadlineComponent, MatButtonModule, MatIcon, RouterLink],
})
export class ContactsModule {}
