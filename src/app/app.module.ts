import { ComponentsModule } from './components/components.module';
import { JobOfferService } from 'src/app/services/jobOffer.service';
import { HomeService } from './services/home.service';
import { LoginService } from 'src/app/services/login.service';
import { PagesModule } from './pages/pages.module';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    PagesModule,
    ComponentsModule
  ],
  providers: [
    LoginService,
    HomeService,
    JobOfferService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
