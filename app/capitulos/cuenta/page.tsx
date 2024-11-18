import React from 'react';

export default function CrearCuentaPage() {
  return (
    <div className="py-12 px-8">
      <nav className="text-sm mb-8">
        <ul className="flex space-x-2 text-gray-500">
          <li><span className="text-[#004691]">Primeros pasos</span></li>
          <li>•</li>
          <li>Crear cuenta</li>
        </ul>
      </nav>

      <h2 className="text-4xl font-bold mb-8 text-gray-900">
        Crear cuenta
      </h2>

      <div className="prose max-w-none">
        <div className="space-y-12">
          {/* Paso 1 */}
          <div>
            <p className="text-lg mb-6">
              Paso 1: Abre la aplicación "Mi Tigo" en tu dispositivo móvil
            </p>
            <img 
              src="/1_cuenta.png" 
              alt="Pantalla inicial de Mi Tigo App" 
              className="border border-gray-200 rounded-lg shadow-sm mb-8"
            />
          </div>

          {/* Paso 2 */}
          <div>
            <p className="text-lg mb-6">
              Paso 2: Presiona el botón CREALA ubicado en la parte inferior de la pantalla
            </p>
            <img 
              src="/2_cuenta.png" 
              alt="Pantalla con botón de crear cuenta" 
              className="border border-gray-200 rounded-lg shadow-sm mb-8"
            />
          </div>

          {/* Paso 3 */}
          <div>
            <p className="text-lg mb-6">
              Paso 3: Completa los campos con tu información personal y después presiona continuar
            </p>
            <img 
              src="/2_cuenta.png" 
              alt="Formulario de registro" 
              className="border border-gray-200 rounded-lg shadow-sm mb-8"
            />
          </div>

          {/* Mensaje de éxito */}
          <div className="bg-green-50 border-l-4 border-green-500 p-6 rounded-r-lg">
            <p className="text-lg text-green-700 font-medium">
              Felicidades has creado una cuenta exitosamente.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}