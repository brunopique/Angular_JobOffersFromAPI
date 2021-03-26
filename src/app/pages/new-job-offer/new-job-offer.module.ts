import { ComponentsModule } from './../../components/components.module';
import { FormsModule } from '@angular/forms';
import { NewJobOfferComponent } from './new-job-offer.component';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
    declarations: [NewJobOfferComponent],
    imports: [
        CommonModule,
        RouterModule,
        FormsModule,
        ComponentsModule
    ],
    exports: [NewJobOfferComponent],
    providers: [],
})
export class NewJobOfferModule {}
