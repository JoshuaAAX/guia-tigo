'use client'

import React from 'react';

export default function PagarFacturaPage() {
  return (
    <div className="py-12 px-8">
      <nav className="text-sm mb-8">
        <ul className="flex space-x-2 text-gray-500">
          <li><span className="text-[#004691]">Facturación</span></li>
          <li>•</li>
          <li>Pagar factura</li>
        </ul>
      </nav>

      <h2 className="text-4xl font-bold mb-8 text-gray-900">
        Pagar factura
      </h2>

      <div className="prose max-w-none">
        <div className="bg-blue-50 border-l-4 border-[#004691] p-6 mb-8">
          <p className="text-gray-700">
            Si eres pospago y deseas pagar tu factura sigue los siguientes pasos:
          </p>
        </div>

        <div className="space-y-12">
          {/* Paso 1 */}
          <div>
            <p className="text-lg mb-6">
              Paso 1: Presiona el botón Factura en la parte inferior izquierda
            </p>
            <img 
              src="/api/placeholder/300/600" 
              alt="Botón de factura en la navegación" 
              className="border border-gray-200 rounded-lg shadow-sm mb-8"
            />
          </div>

          {/* Paso 2 */}
          <div>
            <p className="text-lg mb-6">
              Paso 2: presiona el botón pagar y paga con tu método de pago favorito
            </p>
            <img 
              src="/api/placeholder/300/600" 
              alt="Pantalla de pago de factura" 
              className="border border-gray-200 rounded-lg shadow-sm mb-8"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
