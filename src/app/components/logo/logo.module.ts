import { LogoComponent } from './logo.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
    declarations: [LogoComponent],
    imports: [ CommonModule ],
    exports: [
        LogoComponent
    ],
    providers: [],
})
export class LogoModule {}
