import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BusinessComponent } from './components/business/business.component';
import { CentraisComponent } from './components/centrais/centrais.component';
import { ContactUsComponent } from './components/contact-us/contact-us.component';
import { DownloadsComponent } from './components/downloads/downloads.component';
import { FormComponent } from './components/form/form.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { RedesComponent } from './components/redes/redes.component';
import { SupportComponent } from './components/support/support.component';
import { CallManagerComponent } from './components/call-manager/call-manager.component';
import { CftvComponent } from './components/cftv/cftv.component';

const routes: Routes = [
  {
    path: "",
    component: HomeComponent
  },
  {
    path: "business",
    component: BusinessComponent
  },
  {
    path: "contactUs",
    component: ContactUsComponent
  },
  {
    path: "downloads",
    component: DownloadsComponent
  },
  {
    path: "product",
    component: CallManagerComponent
  },
  {
    path: "support",
    component: SupportComponent
  },
  {
    path: "centrais",
    component: CentraisComponent
  },
  {
    path: "redes",
    component: RedesComponent
  },
  {
    path: "CFTV",
    component: CftvComponent
  },
  {
    path: "login",
    component: LoginComponent
  },
  {
    path: "form",
    component: FormComponent
  },
  {
    path: "**",
    redirectTo: "http://techlinetelecom.com.br/",
    pathMatch: "full"
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
