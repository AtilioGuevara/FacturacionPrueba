import { Routes } from '@angular/router';
import { CrearFacturaComponent } from './components/crear-facturas/crear-factura.component';
import { ListarFacturasComponent } from './components/listar-facturas/listar.facturas.component';
import { BuscarFacturaComponent } from './components/buscar-facturas/buscar-factura.component';

export const routes: Routes = [
  { path: '', redirectTo: 'listar', pathMatch: 'full' },
  { path: 'crear', component: CrearFacturaComponent },
  { path: 'listar', component: ListarFacturasComponent },
  { path: 'buscar', component: BuscarFacturaComponent },
  { path: '**', redirectTo: 'listar' }
];
