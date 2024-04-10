import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PharmaciesComponent } from './pharmacies.component';

import { SidebarComponent } from '../../components/ui/sidebar/sidebar.component';
import { ContentBoxComponent } from '../../components/ui/content-box/content-box.component';
import { SelectComponent } from '../../components/ui/select/select.component';
import { RouterModule, RouterOutlet } from '@angular/router';
import { ParagraphComponent } from '../../components/ui/paragraph/paragraph.component';
import { InfoSectionComponent } from '../../components/ui/info-section/info-section.component';

import {
  MatCell,
  MatCellDef,
  MatColumnDef,
  MatHeaderCell,
  MatHeaderCellDef,
  MatHeaderRow,
  MatHeaderRowDef,
  MatRow,
  MatRowDef,
  MatTable,
} from '@angular/material/table';
import { MatAnchor } from '@angular/material/button';
import { pharmaciesChildrenRoutes } from '../../data/children-routers';
import { AutoOrderComponent } from '../children/pharmacies/auto-order/auto-order.component';
import { ImportApplicationComponent } from '../children/pharmacies/import-application/import-application.component';
import { IndividualReportsComponent } from '../children/pharmacies/individual-reports/individual-reports.component';
import { InstallProgramMaterialsAccountingComponent } from '../children/pharmacies/install-program-materials-accounting/install-program-materials-accounting.component';
import { MaterialsAccountingComponent } from '../children/pharmacies/materials-accounting/materials-accounting.component';
import { OperationalMonitoringComponent } from '../children/pharmacies/operational-monitoring/operational-monitoring.component';
import { ProcessingOfInvoicesComponent } from '../children/pharmacies/processing-of-invoices/processing-of-invoices.component';
import { RedistributionApplicationComponent } from '../children/pharmacies/redistribution-application/redistribution-application.component';
import { ReinstallingTheProgramComponent } from '../children/pharmacies/reinstalling-the-program/reinstalling-the-program.component';
import { RemoteAccessComponent } from '../children/pharmacies/remote-access/remote-access.component';
import { RunningProgramWithKeysComponent } from '../children/pharmacies/running-program-with-keys/running-program-with-keys.component';
import { SectionDescriptionPharmaciesComponent } from '../children/pharmacies/section-description-pharmacies/section-description-pharmacies.component';
import { HeadlineComponent } from '../../components/ui/headlines/headline.component';

@NgModule({
  declarations: [
    PharmaciesComponent,
    AutoOrderComponent,
    ImportApplicationComponent,
    IndividualReportsComponent,
    InstallProgramMaterialsAccountingComponent,
    MaterialsAccountingComponent,
    OperationalMonitoringComponent,
    ProcessingOfInvoicesComponent,
    RedistributionApplicationComponent,
    ReinstallingTheProgramComponent,
    RemoteAccessComponent,
    RunningProgramWithKeysComponent,
    SectionDescriptionPharmaciesComponent,
  ],
  imports: [
    CommonModule,
    SelectComponent,
    SidebarComponent,
    ContentBoxComponent,
    RouterOutlet,
    ParagraphComponent,
    InfoSectionComponent,
    MatTable,
    MatColumnDef,
    MatHeaderCell,
    MatCell,
    MatHeaderCellDef,
    MatCellDef,
    MatHeaderRow,
    MatRow,
    MatHeaderRowDef,
    MatRowDef,
    MatAnchor,
    RouterModule.forChild(pharmaciesChildrenRoutes),
    HeadlineComponent,
  ],
})
export class PharmaciesModule {}
