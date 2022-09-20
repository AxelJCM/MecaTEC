import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RouterModule, Routes } from '@angular/router';
import { PrincipalComponent } from './principal/principal.component';
import { PdfComponent } from './pdf/pdf.component';
import { CitasComponent } from './citas/citas.component';
import { ClientesComponent } from './clientes/clientes.component';

const appRoutes:Routes=[
  {path: '', component:PrincipalComponent},
  {path:'login', component:LoginComponent},
  {path: 'pdf', component:PdfComponent},
  {path: 'citas', component:CitasComponent},
  {path: 'clientes', component:ClientesComponent},
];

@NgModule({
  declarations: [
    AppComponent,
    PrincipalComponent,
    LoginComponent,
    PdfComponent,
    CitasComponent,
    ClientesComponent,

  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }