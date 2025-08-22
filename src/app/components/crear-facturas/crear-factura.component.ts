import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';
import { FacturaService } from '../../services/factura.service';

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
    cliente: ['', [Validators.required, Validators.minLength(2)]],
    fecha: ['', Validators.required],
    total: [0, [Validators.required, Validators.min(0)]]
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
    const payload = this.form.value as { cliente: string; fecha: string; total: number };
    this.facturaService.crearFactura(payload).subscribe({
      next: (res) => {
        this.mensaje = `Factura creada (ID: ${res.id ?? '—'})`;
        this.form.reset({ total: 0 });
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
