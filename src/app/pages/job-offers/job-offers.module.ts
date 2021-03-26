import { ComponentsModule } from './../../components/components.module';
import { HomeModule } from './../home/home.module';
import { JobOffersComponent } from './job-offers.component';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
    declarations: [JobOffersComponent],
    imports: [
        CommonModule,
        RouterModule,
        HomeModule,
        ComponentsModule
    ],
    exports: [JobOffersComponent],
    providers: [],
})
export class JobOffersModule {}
