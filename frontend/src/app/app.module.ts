import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { FormComponent } from './components/form/form.component';
import { NavComponent } from './components/nav/nav.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { BusinessComponent } from './components/business/business.component';
import { CallManagerComponent } from './components/call-manager/call-manager.component';
import { CentraisComponent } from './components/centrais/centrais.component';
import { CftvComponent } from './components/cftv/cftv.component';
import { ContactUsComponent } from './components/contact-us/contact-us.component';
import { DownloadsComponent } from './components/downloads/downloads.component';
import { LoginComponent } from './components/login/login.component';
import { RedesComponent } from './components/redes/redes.component';
import { SupportComponent } from './components/support/support.component';

@NgModule({
  declarations: [
    AppComponent,
    FormComponent,
    NavComponent,
    FooterComponent,
    HomeComponent,
    BusinessComponent,
    CallManagerComponent,
    CentraisComponent,
    CftvComponent,
    ContactUsComponent,
    DownloadsComponent,
    LoginComponent,
    RedesComponent,
    SupportComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
