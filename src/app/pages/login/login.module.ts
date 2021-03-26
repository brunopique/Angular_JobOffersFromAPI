import { ComponentsModule } from './../../components/components.module';
import { LoginComponent } from './login.component';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@NgModule({
    declarations: [LoginComponent],
    imports: [
        CommonModule,
        RouterModule,
        FormsModule,
        ComponentsModule
    ],
    exports: [LoginComponent],
    providers: [],
})
export class LoginModule {}
