import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RouterModule, Routes } from '@angular/router';
import { PrincipalComponent } from './principal/principal.component';
import { PdfComponent } from './pdf/pdf.component';

const appRoutes:Routes=[
  {path: '', component:PrincipalComponent},
  {path:'login', component:LoginComponent},
  {path: 'pdf', component:PdfComponent},
];

@NgModule({
  declarations: [
    AppComponent,
    PrincipalComponent,
    LoginComponent,
    PdfComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }