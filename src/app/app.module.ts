import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContainerComponent } from './components/structure/container/container.component';

import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { MatSlideToggle } from '@angular/material/slide-toggle';
import { HeaderComponent } from './components/structure/header/header.component';
import { MatAnchor, MatButton, MatFabAnchor, MatFabButton } from '@angular/material/button';

import { MatRipple } from '@angular/material/core';

import { ParagraphComponent } from './components/ui/paragraph/paragraph.component';
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
import { InfoSectionComponent } from './components/ui/info-section/info-section.component';
import { MatIcon } from '@angular/material/icon';
import { FooterComponent } from './components/structure/footer/footer.component';
import { MatCheckbox } from '@angular/material/checkbox';
import { ReactiveFormsModule } from '@angular/forms';
import { NgxMaskDirective, NgxMaskPipe, provideNgxMask } from 'ngx-mask';
import { HttpClientModule } from '@angular/common/http';
import { PopupComponent } from './components/structure/popup/popup.component';
import { ScrollControlDirective } from './directives/scroll-control.directive';
import { ScrollService } from './services/scroll.service';
import { RepresentativesModule } from './pages/representatives/representatives.module';
import { WholesalersModule } from './pages/wholesalers/wholesalers.module';
import { PharmaciesModule } from './pages/pharmacies/pharmacies.module';
import { FeedbackFormModule } from './pages/feedback-form/feedback-form.module';
import { AgreementModule } from './pages/agreement/agreement.module';
import { RouterLink } from '@angular/router';
import { NgClass } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    ContainerComponent,
    FooterComponent,
    PopupComponent,
    ScrollControlDirective,
    HeaderComponent,
  ],
  imports: [
    NgClass,
    RouterLink,
    BrowserModule,
    AgreementModule,
    FeedbackFormModule,
    AppRoutingModule,
    MatAnchor,
    MatButton,
    MatRipple,
    ParagraphComponent,
    MatTable,
    MatColumnDef,
    MatHeaderCell,
    MatCell,
    MatCellDef,
    MatHeaderCellDef,
    MatHeaderRow,
    MatRow,
    MatRowDef,
    MatHeaderRowDef,
    MatSlideToggle,
    MatIcon,
    MatFabButton,
    MatFabAnchor,
    MatCheckbox,
    ReactiveFormsModule,
    NgxMaskDirective,
    NgxMaskPipe,
    HttpClientModule,
    WholesalersModule,
    RepresentativesModule,
    PharmaciesModule,
    InfoSectionComponent,
  ],

  providers: [provideAnimationsAsync(), provideNgxMask(), ScrollService],
  bootstrap: [AppComponent],
  exports: [PopupComponent],
})
export class AppModule {}
