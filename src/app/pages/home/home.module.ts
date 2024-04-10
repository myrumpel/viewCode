import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { ParagraphComponent } from '../../components/ui/paragraph/paragraph.component';
import { HeadlineComponent } from '../../components/ui/headlines/headline.component';

@NgModule({
  declarations: [HomeComponent],
  imports: [CommonModule, HeadlineComponent, ParagraphComponent],
})
export class HomeModule {}
