import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ParagraphComponent } from '../../components/ui/paragraph/paragraph.component';
import { InfoSectionComponent } from '../../components/ui/info-section/info-section.component';
import { AgreementComponent } from './agreement.component';
import { HeadlineComponent } from '../../components/ui/headlines/headline.component';

@NgModule({
  declarations: [AgreementComponent],
  imports: [CommonModule, ParagraphComponent, InfoSectionComponent, HeadlineComponent],
})
export class AgreementModule {}
