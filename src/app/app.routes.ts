import { Routes } from '@angular/router';
import { CrearFacturaComponent } from './components/crear-facturas/crear-factura.component';
import { ListarFacturasComponent } from './components/listar-facturas/listar.facturas.component';
import { BuscarFacturaComponent } from './components/buscar-facturas/buscar-factura.component';
import { HomeComponent } from './components/home/home.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'crear', component: CrearFacturaComponent },
  { path: 'listar', component: ListarFacturasComponent },
  { path: 'buscar', component: BuscarFacturaComponent },
  { path: '**', redirectTo: '' }
];
