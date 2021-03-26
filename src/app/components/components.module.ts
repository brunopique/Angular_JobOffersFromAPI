import { BackButtonModule } from './back-button/backButton.module';
import { LogoModule } from './logo/logo.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
    declarations: [],
    imports: [
        CommonModule,
        LogoModule,
        BackButtonModule
    ],
    exports: [
        LogoModule,
        BackButtonModule
    ],
    providers: [],
})
export class ComponentsModule {}
