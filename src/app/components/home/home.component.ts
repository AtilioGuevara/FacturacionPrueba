import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink],
  template: `
    <!-- Home Screen Section -->
    <div class="bg-white rounded-xl shadow-lg p-8 mb-8">
      <div class="text-center mb-8">
        <h1 class="text-4xl font-bold text-gray-900 mb-4">Bienvenido a FacturaPro</h1>
        <p class="text-xl text-gray-600">Su socio confiable en gestión de facturación</p>
      </div>
      
      <div class="grid md:grid-cols-2 gap-8 mb-8">
        <div>
          <h2 class="text-2xl font-semibold text-gray-800 mb-4">Sobre Nuestra Empresa</h2>
          <p class="text-gray-600 mb-4">
            FacturaPro es una empresa líder en soluciones de facturación digital, 
            comprometida con brindar herramientas innovadoras y eficientes para 
            la gestión financiera de su negocio.
          </p>
          <p class="text-gray-600 mb-4">
            Con más de 10 años de experiencia en el mercado, hemos desarrollado 
            una plataforma robusta y confiable que facilita la creación, gestión 
            y seguimiento de facturas de manera simple y profesional.
          </p>
          <p class="text-gray-600">
            Nuestro compromiso es ayudar a empresas de todos los tamaños a 
            optimizar sus procesos de facturación, reducir errores y mejorar 
            la eficiencia operativa.
          </p>
        </div>
        
        <div>
          <h2 class="text-2xl font-semibold text-gray-800 mb-4">Nuestros Servicios</h2>
          <ul class="space-y-3">
            <li class="flex items-start">
              <span class="inline-block w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3"></span>
              <span class="text-gray-600">Creación de facturas profesionales</span>
            </li>
            <li class="flex items-start">
              <span class="inline-block w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3"></span>
              <span class="text-gray-600">Gestión completa de clientes</span>
            </li>
            <li class="flex items-start">
              <span class="inline-block w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3"></span>
              <span class="text-gray-600">Reportes y análisis detallados</span>
            </li>
            <li class="flex items-start">
              <span class="inline-block w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3"></span>
              <span class="text-gray-600">Integración con sistemas contables</span>
            </li>
            <li class="flex items-start">
              <span class="inline-block w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3"></span>
              <span class="text-gray-600">Soporte técnico especializado</span>
            </li>
          </ul>
        </div>
      </div>
      
      <div class="bg-blue-50 rounded-lg p-6 text-center">
        <h3 class="text-xl font-semibold text-blue-900 mb-2">¿Listo para comenzar?</h3>
        <p class="text-blue-700 mb-4">
          Explore nuestras funcionalidades y descubra cómo FacturaPro puede 
          transformar la gestión financiera de su empresa.
        </p>
        <div class="flex flex-wrap justify-center gap-4">
          <a routerLink="/crear" 
             class="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors">
            Crear Nueva Factura
          </a>
          <a routerLink="/listar" 
             class="bg-white text-blue-600 border border-blue-600 px-6 py-2 rounded-lg hover:bg-blue-50 transition-colors">
            Ver Facturas Existentes
          </a>
        </div>
      </div>
    </div>
  `
})
export class HomeComponent {}
