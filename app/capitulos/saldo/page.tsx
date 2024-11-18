import React from 'react';

export default function ConsultaSaldoPage() {
  return (
    <div className="py-12 px-8">
      <nav className="text-sm mb-8">
        <ul className="flex space-x-2 text-gray-500">
          <li><span className="text-[#004691]">Primeros pasos</span></li>
          <li>•</li>
          <li>Consulta tu saldo</li>
        </ul>
      </nav>

      <h2 className="text-4xl font-bold mb-8 text-gray-900">
        Consulta tu saldo
      </h2>

      <div className="prose max-w-none">
        <p className="text-lg mb-6">
          Paso 1: presiona el botón saldos para consultar tu saldo
        </p>
        
        <div className="mb-8">
          <img 
            src="/saldo.png" 
            alt="Captura de pantalla de la sección de saldos en Mi Tigo App" 
            className="border border-gray-200 rounded-lg shadow-sm"
          />
        </div>
      </div>
    </div>
  );
}