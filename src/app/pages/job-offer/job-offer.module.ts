import { ComponentsModule } from './../../components/components.module';
import { JobOfferComponent } from './job-offer.component';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
    declarations: [JobOfferComponent],
    imports: [
        CommonModule,
        RouterModule,
        ComponentsModule
    ],
    exports: [JobOfferComponent],
    providers: [],
})
export class JobOfferModule {}
