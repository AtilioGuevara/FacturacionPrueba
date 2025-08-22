import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

export interface Factura {
  id?: number;
  codeGenerator?: string;
  date: string; // ISO date
  
  // Emisor (Empresa)
  companyName: string;
  companyNIT: string;
  companyAddress: string;
  companyPhone: string;
  companyEmail: string;
  
  // Receptor (Cliente)
  clientName: string;
  clientDUI: string;
  clientPhone: number;
  clientEmail: string;
}

@Injectable({ providedIn: 'root' })
export class FacturaService {
  private http = inject(HttpClient);
  private baseUrl = `${environment.apiUrl}/facturas`;

  crearFactura(data: Omit<Factura, 'id'>): Observable<Factura> {
    return this.http.post<Factura>(this.baseUrl, data);
  }

  listarFacturas(): Observable<Factura[]> {
    return this.http.get<Factura[]>(this.baseUrl);
  }

  buscarFacturaPorId(id: number | string): Observable<Factura> {
    return this.http.get<Factura>(`${this.baseUrl}/${id}`);
  }
}
