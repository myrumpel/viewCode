import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HelpComponent } from './help.component';
import { ParagraphComponent } from '../../components/ui/paragraph/paragraph.component';
import { HeadlineComponent } from '../../components/ui/headlines/headline.component';

@NgModule({
  declarations: [HelpComponent],
  imports: [CommonModule, HeadlineComponent, ParagraphComponent],
})
export class HelpModule {}
