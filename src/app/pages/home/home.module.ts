import { ComponentsModule } from './../../components/components.module';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './home.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
    declarations: [HomeComponent],
    imports: [
        CommonModule,
        RouterModule,
        ComponentsModule
    ],
    exports: [HomeComponent],
    providers: [],
})
export class HomeModule {}
