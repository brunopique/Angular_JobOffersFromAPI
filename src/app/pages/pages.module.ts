import { JobOfferModule } from './job-offer/job-offer.module';
import { JobOffersModule } from './job-offers/job-offers.module';
import { LoginModule } from './login/login.module';
import { NewJobOfferModule } from './new-job-offer/new-job-offer.module';
import { HomeModule } from './home/home.module';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
    declarations: [],
    imports: [
        CommonModule,
        RouterModule,
        HomeModule,
        NewJobOfferModule,
        LoginModule,
        JobOfferModule,
        JobOffersModule,
        NewJobOfferModule
    ],
    exports: [
        HomeModule,
        NewJobOfferModule,
        LoginModule,
        JobOfferModule,
        JobOffersModule,
        NewJobOfferModule
    ],
    providers: [],
})
export class PagesModule {}
