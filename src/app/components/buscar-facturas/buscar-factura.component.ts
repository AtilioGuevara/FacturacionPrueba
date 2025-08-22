import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { FacturaService, Factura } from '../../services/factura.service';

@Component({
  selector: 'app-buscar-factura',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './buscar-factura.component.html'
})
export class BuscarFacturaComponent {
  private facturaService = inject(FacturaService);
  id: string = '';
  factura: Factura | null = null;
  error = '';
  loading = false;

  buscar(): void {
    this.error = '';
    this.factura = null;
    if (!this.id.trim()) {
      this.error = 'Ingresa un ID';
      return;
    }
    this.loading = true;
    this.facturaService.buscarFacturaPorId(this.id).subscribe({
      next: (f) => {
        this.factura = f;
        this.loading = false;
      },
      error: (err) => {
        console.error(err);
        this.error = 'Factura no encontrada';
        this.loading = false;
      }
    });
  }
}
