import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RepresentativesComponent } from './representatives.component';
import { ContentBoxComponent } from '../../components/ui/content-box/content-box.component';
import { SelectComponent } from '../../components/ui/select/select.component';
import { SidebarComponent } from '../../components/ui/sidebar/sidebar.component';
import { RouterModule, RouterOutlet } from '@angular/router';
import { ParagraphComponent } from '../../components/ui/paragraph/paragraph.component';
import { representativesChildrenRoutes } from '../../data/children-routers';
import { ReportsComponent } from '../children/representatives/reports/reports.component';
import { HeadlineComponent } from '../../components/ui/headlines/headline.component';

@NgModule({
  declarations: [RepresentativesComponent, ReportsComponent],
  imports: [
    CommonModule,
    SelectComponent,
    SidebarComponent,
    ContentBoxComponent,
    RouterOutlet,
    ParagraphComponent,
    RouterModule.forChild(representativesChildrenRoutes),
    HeadlineComponent,
  ],
  exports: [],
})
export class RepresentativesModule {}
