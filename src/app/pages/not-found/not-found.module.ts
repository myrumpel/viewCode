import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotFoundComponent } from './not-found.component';
import { RouterLink } from '@angular/router';
import { MatAnchor } from '@angular/material/button';

@NgModule({
  declarations: [NotFoundComponent],
  imports: [CommonModule, RouterLink, MatAnchor],
})
export class NotFoundModule {}
