'use client'

import React from 'react';

export default function CompraPaquetesPage() {
  return (
    <div className="py-12 px-8">
      <nav className="text-sm mb-8">
        <ul className="flex space-x-2 text-gray-500">
          <li><span className="text-[#004691]">Compras</span></li>
          <li>•</li>
          <li>Compra Paquetes</li>
        </ul>
      </nav>

      <h2 className="text-4xl font-bold mb-8 text-gray-900">
        Compra Paquetes
      </h2>

      <div className="prose max-w-none">
        <div className="space-y-12">
          {/* Paso 1 */}
          <div>
            <p className="text-lg mb-6">
              Paso 1: presiona el botón compras y desplázate hacia abajo para encontrar el paquete que se adapte mejor a ti
            </p>
            <img 
              src="/1_paquetes.png" 
              alt="Lista de paquetes disponibles" 
              className="border border-gray-200 rounded-lg shadow-sm mb-8"
            />
          </div>

          {/* Paso 2 */}
          <div>
            <p className="text-lg mb-6">
              Paso 2: selecciona tu paquete y presiona en el botón azul a la derecha del paquete
            </p>
            <img 
              src="/2_paquetes.png" 
              alt="Selección de paquete" 
              className="border border-gray-200 rounded-lg shadow-sm mb-8"
            />
          </div>

          {/* Paso 3 */}
          <div>
            <p className="text-lg mb-6">
              Paso 3: Verifica los detalles del paquete, selecciona la frecuencia de la compra, selecciona 1 vez si solo quieres comprar el paquete una sola vez ó selecciona recurrente para que se compre un nuevo paquete cada vez que se te termine el actual. Escoge tu forma de pago e ingresa los datos necesarios según la forma de pago.
            </p>
            <img 
              src="/3_paquetes.png" 
              alt="Configuración y pago del paquete" 
              className="border border-gray-200 rounded-lg shadow-sm mb-8"
            />
          </div>

          {/* Mensaje de éxito */}
          <div className="bg-green-50 border-l-4 border-green-500 p-6 rounded-r-lg">
            <p className="text-lg text-green-700 font-medium">
              Felicidades compró un paquete con éxito 🙂
            </p>
          </div>

        </div>
      </div>
    </div>
  );
}