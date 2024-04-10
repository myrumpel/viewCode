import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { PharmaciesComponent } from './pages/pharmacies/pharmacies.component';
import { RepresentativesComponent } from './pages/representatives/representatives.component';
import { WholesalersComponent } from './pages/wholesalers/wholesalers.component';
import { HelpComponent } from './pages/help/help.component';
import { PartnersComponent } from './pages/partners/partners.component';
import { ContactsComponent } from './pages/contacts/contacts.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';

import {
  pharmaciesChildrenRoutes,
  representativesChildrenRoutes,
  wholesalersChildrenRoutes,
} from './data/children-routers';
import { FeedbackFormComponent } from './pages/feedback-form/feedback-form.component';
import { AgreementComponent } from './pages/agreement/agreement.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  {
    path: 'home',
    component: HomeComponent,
    loadChildren: () => import('./pages/home/home.module').then((m) => m.HomeModule),
  },
  {
    path: 'feedback',
    component: FeedbackFormComponent,
    loadChildren: () =>
      import('./pages/feedback-form/feedback-form.module').then((m) => m.FeedbackFormModule),
  },
  {
    path: 'agreement',
    component: AgreementComponent,
    loadChildren: () => import('./pages/agreement/agreement.module').then((m) => m.AgreementModule),
  },

  {
    path: 'pharmacies',
    pathMatch: 'full',
    redirectTo: 'pharmacies/section-description',
  },
  {
    path: 'pharmacies',
    component: PharmaciesComponent,
    loadChildren: () =>
      import('./pages/pharmacies/pharmacies.module').then((m) => m.PharmaciesModule),
  },
  {
    path: 'wholesalers',
    pathMatch: 'full',
    redirectTo: 'wholesalers/section-description',
  },
  {
    path: 'wholesalers',
    component: WholesalersComponent,
    loadChildren: () =>
      import('./pages/wholesalers/wholesalers.module').then((m) => m.WholesalersModule),
  },
  {
    path: 'representatives',
    pathMatch: 'full',
    redirectTo: 'representatives/view-price',
  },
  {
    path: 'representatives',
    component: RepresentativesComponent,
    loadChildren: () =>
      import('./pages/representatives/representatives.module').then((m) => m.RepresentativesModule),
  },
  {
    path: 'help',
    component: HelpComponent,
    loadChildren: () => import('./pages/help/help.module').then((m) => m.HelpModule),
  },
  {
    path: 'partners',
    component: PartnersComponent,
    loadChildren: () => import('./pages/partners/partners.module').then((m) => m.PartnersModule),
  },
  {
    path: 'contacts',
    component: ContactsComponent,
    loadChildren: () => import('./pages/contacts/contacts.module').then((m) => m.ContactsModule),
  },

  {
    path: '**',
    component: NotFoundComponent,
    loadChildren: () => import('./pages/not-found/not-found.module').then((m) => m.NotFoundModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
