import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SendEmailComponent } from './auth/send-email/send-email.component';
import { CanEditGuard } from './auth/guards/can-edit.guard';
import { CanAdminGuard } from './auth/guards/can-admin.guard';
import { CanSuscriptorGuard } from './auth/guards/can-suscriptor.guard';
import { InicioComponent } from './inicio/inicio.component';
import { ProductosComponent } from './productos/productos.component';
import { IngforComponent } from './ingfor/ingfor.component';
import { EtiquetasComponent } from './etiquetas/etiquetas.component';
import { CargaComponent } from './carga/carga.component';
import { PdfComponent } from './Broker/pdf/pdf.component';
import { PdffreeComponent } from './Broker/pdffree/pdffree.component';
import { PdfFreeVentaComponent } from './Broker/pdf-free-venta/pdf-free-venta.component';
import { PdfFreeRentaComponent } from './Broker/pdf-free-renta/pdf-free-renta.component';
import { PdfExclusiveRentaComponent } from './Broker/pdf-exclusive-renta/pdf-exclusive-renta.component';
import { PdfExclusiveVentaComponent } from './Broker/pdf-exclusive-venta/pdf-exclusive-venta.component';
import { PdfGoldVentaComponent } from './Broker/pdf-gold-venta/pdf-gold-venta.component';
import { PdfGoldRentaComponent } from './Broker/pdf-gold-renta/pdf-gold-renta.component';
import { PdfDiamondRentaComponent } from './Broker/pdf-diamond-renta/pdf-diamond-renta.component';
import { PdfDiamondVentaComponent } from './Broker/pdf-diamond-venta/pdf-diamond-venta.component';


const routes: Routes = [

{ 
  path:'',
  redirectTo:'/home',
  pathMatch: 'full',
},

{ path: 'home', loadChildren: () => import('./home/home.module').then(m => m.HomeModule) },

{ path: 'login', loadChildren: () => import('./auth/login/login.module').then(m => m.LoginModule) },

{ path: 'register', loadChildren: () => import('./auth/register/register.module').then(m => m.RegisterModule) },

{
  path: 'verification-email',
  component: SendEmailComponent,
},

{ path: 'forgot-password', loadChildren: () => import('./auth/forgot-password/forgot-password.module').then(m => m.ForgotPasswordModule) },

{ path: 'admin', loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule),
 canActivate: [CanAdminGuard], },

{ path: 'editor', loadChildren: () => import('./editor/editor.module').then(m => m.EditorModule),
  canActivate: [CanEditGuard], },

{ path: 'suscriptor', loadChildren: () => import('./suscriptor/suscriptor.module').then(m => m.SuscriptorModule),
  canActivate: [CanSuscriptorGuard], },

  {
    path: 'Inicio',
    component: InicioComponent, canActivate: [CanSuscriptorGuard],
  },

  {
    path: 'Productos',
    component: ProductosComponent, canActivate: [CanSuscriptorGuard],
  },

  {
    path: 'IngresaProc',
    component: IngforComponent, canActivate: [CanSuscriptorGuard],
  },

  {
    path: 'Etiquetas',
    component: EtiquetasComponent, canActivate: [CanSuscriptorGuard],
  },

  {
    path: 'CargaDeIne',
    component: CargaComponent, canActivate: [CanSuscriptorGuard],
  },
  {
    path: 'Pdf',
    component: PdfComponent, canActivate: [CanSuscriptorGuard],
  },
  {
    path: 'PdfFree',
    component: PdffreeComponent, canActivate: [CanSuscriptorGuard],
  },
  {
    path: 'PdfFreeVenta99',
    component: PdfFreeVentaComponent, canActivate: [CanSuscriptorGuard],
  },
  {
    path: 'PdfFreeRenta99',
    component: PdfFreeRentaComponent, canActivate: [CanSuscriptorGuard],
  },
  {
    path: 'PdfExclusiveRenta99',
    component: PdfExclusiveRentaComponent, canActivate: [CanSuscriptorGuard],
  },
  {
    path: 'PdfExclusiveVenta99',
    component: PdfExclusiveVentaComponent, canActivate: [CanSuscriptorGuard],
  },
  {
    path: 'PdfGoldVenta99',
    component: PdfGoldVentaComponent, canActivate: [CanSuscriptorGuard],
  },
  {
    path: 'PdfGoldRenta99',
    component: PdfGoldRentaComponent, canActivate: [CanSuscriptorGuard],
  },
  {
    path: 'PdfDiamondRenta99',
    component: PdfDiamondRentaComponent, canActivate: [CanSuscriptorGuard],
  },
  {
    path: 'PdfDiamondVenta99',
    component: PdfDiamondVentaComponent, canActivate: [CanSuscriptorGuard],
  },





];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
