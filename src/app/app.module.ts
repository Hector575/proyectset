import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';



import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import {ReactiveFormsModule } from '@angular/forms';

import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFireModule } from '@angular/fire'
import { environment } from 'src/environments/environment';
import { SendEmailComponent } from './auth/send-email/send-email.component';


import { AuthService } from './auth/services/auth.service';
import { CanEditGuard } from './auth/guards/can-edit.guard';
import { CanAdminGuard } from './auth/guards/can-admin.guard';
import { CanSuscriptorGuard } from './auth/guards/can-suscriptor.guard';
import { InicioComponent } from '../app/inicio/inicio.component';
import { ProductosComponent } from './productos/productos.component';
import { IngforComponent } from '../app/ingfor/ingfor.component';
import { EtiquetasComponent } from './etiquetas/etiquetas.component';
import { CargaComponent } from './carga/carga.component';
import { NgDropFilesDirective } from './directives/ng-drop-files.directive';
import { SidenavComponent } from './shared/sidenav/sidenav.component';
import { PdfComponent } from './Broker/pdf/pdf.component';
import { PdffreeComponent } from './Broker/pdffree/pdffree.component';
import { PdfFreeVentaComponent } from './Broker/pdf-free-venta/pdf-free-venta.component';
import { PdfFreeRentaComponent } from './Broker/pdf-free-renta/pdf-free-renta.component';
import { PdfExclusiveVentaComponent } from './Broker/pdf-exclusive-venta/pdf-exclusive-venta.component';
import { PdfExclusiveRentaComponent } from './Broker/pdf-exclusive-renta/pdf-exclusive-renta.component';
import { PdfGoldRentaComponent } from './Broker/pdf-gold-renta/pdf-gold-renta.component';
import { PdfGoldVentaComponent } from './Broker/pdf-gold-venta/pdf-gold-venta.component';
import { PdfDiamondVentaComponent } from './Broker/pdf-diamond-venta/pdf-diamond-venta.component';
import { PdfDiamondRentaComponent } from './Broker/pdf-diamond-renta/pdf-diamond-renta.component';
import { MuestraComponent } from './muestra/muestra.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SendEmailComponent,
    InicioComponent,
    ProductosComponent,
    IngforComponent,
    EtiquetasComponent,
    CargaComponent,
    NgDropFilesDirective,
    SidenavComponent,
    PdfComponent,
    PdffreeComponent,
    PdfFreeVentaComponent,
    PdfFreeRentaComponent,
    PdfExclusiveVentaComponent,
    PdfExclusiveRentaComponent,
    PdfGoldRentaComponent,
    PdfGoldVentaComponent,
    PdfDiamondVentaComponent,
    PdfDiamondRentaComponent,
    MuestraComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireAuthModule,
    
    
    

  ],
  providers: [AuthService, CanEditGuard, CanAdminGuard, CanSuscriptorGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
