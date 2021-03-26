import { NewJobOfferComponent } from './pages/new-job-offer/new-job-offer.component';
import { JobOffersComponent } from './pages/job-offers/job-offers.component';
import { LoginComponent } from './pages/login/login.component';
import { HomeComponent } from './pages/home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { JobOfferComponent } from './pages/job-offer/job-offer.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'offers',
    children: [
      {
        path: '',
        pathMatch: 'full',
        component: JobOffersComponent,
      },
      {
        path: 'newjoboffer',
        component: NewJobOfferComponent,
      },
      {
        path: ':id',
        component: JobOfferComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
