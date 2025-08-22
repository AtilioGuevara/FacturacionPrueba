import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { FacturaService, Factura } from '../../services/factura.service';

@Component({
  selector: 'app-listar-facturas',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './listar.facturas.component.html'
})
export class ListarFacturasComponent {
  private facturaService = inject(FacturaService);
  facturas: Factura[] = [];
  loading = true;
  error = '';

  ngOnInit(): void {
    this.facturaService.listarFacturas().subscribe({
      next: (data) => {
        this.facturas = data ?? [];
        this.loading = false;
      },
      error: (err) => {
        console.error(err);
        this.error = 'No se pudieron cargar las facturas';
        this.loading = false;
      }
    });
  }
}
