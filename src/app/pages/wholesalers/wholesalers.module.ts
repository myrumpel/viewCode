import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WholesalersComponent } from './wholesalers.component';
import { SidebarComponent } from '../../components/ui/sidebar/sidebar.component';
import { ContentBoxComponent } from '../../components/ui/content-box/content-box.component';
import { RouterModule, RouterOutlet } from '@angular/router';
import { SelectComponent } from '../../components/ui/select/select.component';
import { ParagraphComponent } from '../../components/ui/paragraph/paragraph.component';
import { MatAnchor } from '@angular/material/button';
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
import { InfoSectionComponent } from '../../components/ui/info-section/info-section.component';
import { wholesalersChildrenRoutes } from '../../data/children-routers';
import { ApplicationFormatComponent } from '../children/wholesalers/application-format/application-format.component';
import { DbfEditorComponent } from '../children/wholesalers/dbf-editor/dbf-editor.component';
import { DisclaimerFormatComponent } from '../children/wholesalers/disclaimer-format/disclaimer-format.component';
import { InformationExchangeComponent } from '../children/wholesalers/information-exchange/information-exchange.component';
import { InvoiceFormatComponent } from '../children/wholesalers/invoice-format/invoice-format.component';
import { PriceListFormatComponent } from '../children/wholesalers/price-list-format/price-list-format.component';
import { PromotionDiscountBonusComponent } from '../children/wholesalers/promotion-discount-bonus/promotion-discount-bonus.component';
import { SectionDescriptionWholesalersComponent } from '../children/wholesalers/section-description-wholesalers/section-description-wholesalers.component';
import { ViewPriceComponent } from '../children/wholesalers/view-price/view-price.component';
import { HeadlineComponent } from '../../components/ui/headlines/headline.component';

@NgModule({
  declarations: [
    WholesalersComponent,
    ApplicationFormatComponent,
    DbfEditorComponent,
    DisclaimerFormatComponent,
    InformationExchangeComponent,
    InvoiceFormatComponent,
    PriceListFormatComponent,
    PromotionDiscountBonusComponent,
    SectionDescriptionWholesalersComponent,
    ViewPriceComponent,
  ],
  imports: [
    CommonModule,
    RouterOutlet,
    SelectComponent,
    SidebarComponent,
    ContentBoxComponent,
    ParagraphComponent,
    MatAnchor,
    MatTable,
    MatHeaderCell,
    MatCell,
    MatColumnDef,
    MatHeaderRow,
    MatRow,
    MatHeaderCellDef,
    MatCellDef,
    MatRowDef,
    MatHeaderRowDef,
    InfoSectionComponent,
    RouterModule.forChild(wholesalersChildrenRoutes),
    HeadlineComponent,
  ],
})
export class WholesalersModule {}
