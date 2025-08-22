import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';
import { FacturaService, Factura } from '../../services/factura.service';

@Component({
  selector: 'app-crear-factura',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './crear-factura.component.html'
})
export class CrearFacturaComponent {
  private fb = inject(FormBuilder);
  private facturaService = inject(FacturaService);

  form = this.fb.group({
    // Información de la empresa (emisor)
    companyName: ['', [Validators.required, Validators.minLength(2)]],
    companyNIT: ['', [Validators.required, Validators.minLength(8)]],
    companyAddress: ['', [Validators.required, Validators.minLength(10)]],
    companyPhone: ['', [Validators.required, Validators.minLength(8)]],
    companyEmail: ['', [Validators.required, Validators.email]],
    
    // Información del cliente (receptor)
    clientName: ['', [Validators.required, Validators.minLength(2)]],
    clientDUI: ['', [Validators.required, Validators.minLength(9)]],
    clientPhone: [0, [Validators.required, Validators.min(10000000)]],
    clientEmail: ['', [Validators.required, Validators.email]],
    
    // Fecha
    date: ['', Validators.required]
  });

  loading = false;
  mensaje = '';

  submit(): void {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }
    this.loading = true;
    this.mensaje = '';
    const payload = this.form.value as Omit<Factura, 'id'>;
    this.facturaService.crearFactura(payload).subscribe({
      next: (res) => {
        this.mensaje = `Factura creada exitosamente (ID: ${res.id ?? '—'})`;
        this.form.reset({ 
          clientPhone: 0,
          date: ''
        });
        this.loading = false;
      },
      error: (err) => {
        console.error(err);
        this.mensaje = 'Error al crear la factura';
        this.loading = false;
      }
    });
  }
}
