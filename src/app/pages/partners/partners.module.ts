import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PartnersComponent } from './partners.component';
import { ParagraphComponent } from '../../components/ui/paragraph/paragraph.component';
import { InfoSectionComponent } from '../../components/ui/info-section/info-section.component';
import { HeadlineComponent } from '../../components/ui/headlines/headline.component';

@NgModule({
  declarations: [PartnersComponent],
  imports: [CommonModule, InfoSectionComponent, ParagraphComponent, HeadlineComponent],
})
export class PartnersModule {}
