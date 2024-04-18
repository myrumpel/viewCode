import { Routes } from '@angular/router';
import { ViewPriceComponent } from '../pages/children/wholesalers/view-price/view-price.component';
import { ViewPricePharmaciesComponent } from '../pages/children/pharmacies/view-price-pharmacies/view-price-pharmacies.component';
import { ReportsComponent } from '../pages/children/representatives/reports/reports.component';
import { MaterialsAccountingComponent } from '../pages/children/pharmacies/materials-accounting/materials-accounting.component';
import { RemoteAccessComponent } from '../pages/children/pharmacies/remote-access/remote-access.component';
import { AutoOrderComponent } from '../pages/children/pharmacies/auto-order/auto-order.component';
import { ProcessingOfInvoicesComponent } from '../pages/children/pharmacies/processing-of-invoices/processing-of-invoices.component';
import { OperationalMonitoringComponent } from '../pages/children/pharmacies/operational-monitoring/operational-monitoring.component';
import { IndividualReportsComponent } from '../pages/children/pharmacies/individual-reports/individual-reports.component';
import { ReinstallingTheProgramComponent } from '../pages/children/pharmacies/reinstalling-the-program/reinstalling-the-program.component';
import { RunningProgramWithKeysComponent } from '../pages/children/pharmacies/running-program-with-keys/running-program-with-keys.component';
import { RedistributionApplicationComponent } from '../pages/children/pharmacies/redistribution-application/redistribution-application.component';
import { ImportApplicationComponent } from '../pages/children/pharmacies/import-application/import-application.component';
import { InformationExchangeComponent } from '../pages/children/wholesalers/information-exchange/information-exchange.component';
import { DbfEditorComponent } from '../pages/children/wholesalers/dbf-editor/dbf-editor.component';
import { PriceListFormatComponent } from '../pages/children/wholesalers/price-list-format/price-list-format.component';
import { ApplicationFormatComponent } from '../pages/children/wholesalers/application-format/application-format.component';
import { InvoiceFormatComponent } from '../pages/children/wholesalers/invoice-format/invoice-format.component';
import { DisclaimerFormatComponent } from '../pages/children/wholesalers/disclaimer-format/disclaimer-format.component';
import { PromotionDiscountBonusComponent } from '../pages/children/wholesalers/promotion-discount-bonus/promotion-discount-bonus.component';
import { SectionDescriptionPharmaciesComponent } from '../pages/children/pharmacies/section-description-pharmacies/section-description-pharmacies.component';
import { SectionDescriptionWholesalersComponent } from '../pages/children/wholesalers/section-description-wholesalers/section-description-wholesalers.component';
import { InstallProgramMaterialsAccountingComponent } from '../pages/children/pharmacies/install-program-materials-accounting/install-program-materials-accounting.component';

export const pharmaciesChildrenRoutes: Routes = [
  {
    path: 'section-description',
    component: SectionDescriptionPharmaciesComponent,
  },
  {
    path: 'view-price-pharmacies',
    component: ViewPricePharmaciesComponent,
  },
  {
    path: 'materials-accounting',
    component: MaterialsAccountingComponent,
  },
  {
    path: 'install-program-materials-accounting',
    component: InstallProgramMaterialsAccountingComponent,
  },

  {
    path: 'remote-access',
    component: RemoteAccessComponent,
  },
  {
    path: 'auto-order',
    component: AutoOrderComponent,
  },
  {
    path: 'processing-of-invoices',
    component: ProcessingOfInvoicesComponent,
  },
  {
    path: 'operational-monitoring',
    component: OperationalMonitoringComponent,
  },
  {
    path: 'individual-reports',
    component: IndividualReportsComponent,
  },
  {
    path: 'reinstalling-the-program',
    component: ReinstallingTheProgramComponent,
  },
  {
    path: 'running-program-with-keys',
    component: RunningProgramWithKeysComponent,
  },
  {
    path: 'redistribution-application',
    component: RedistributionApplicationComponent,
  },
  {
    path: 'import-application',
    component: ImportApplicationComponent,
  },
];
export const wholesalersChildrenRoutes: Routes = [
  {
    path: 'section-description',
    component: SectionDescriptionWholesalersComponent,
  },

  {
    path: 'view-price',
    component: ViewPriceComponent,
  },
  {
    path: 'information-exchange',
    component: InformationExchangeComponent,
  },
  {
    path: 'dbf-editor',
    component: DbfEditorComponent,
  },
  {
    path: 'price-list-format',
    component: PriceListFormatComponent,
  },
  {
    path: 'application-format',
    component: ApplicationFormatComponent,
  },
  {
    path: 'invoice-format',
    component: InvoiceFormatComponent,
  },
  {
    path: 'disclaimer-format',
    component: DisclaimerFormatComponent,
  },
  {
    path: 'promotion-discount-bonus',
    component: PromotionDiscountBonusComponent,
  },

  {
    path: 'individual-reports',
    component: IndividualReportsComponent,
  },
];
export const representativesChildrenRoutes: Routes = [
  {
    path: 'view-price',
    component: ViewPriceComponent,
  },
  {
    path: 'reports',
    component: ReportsComponent,
  },
];
