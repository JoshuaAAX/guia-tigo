import React from 'react';

export default function IniciarSesionPage() {
  return (
    <div className="py-12 px-8">
      <nav className="text-sm mb-8">
        <ul className="flex space-x-2 text-gray-500">
          <li><span className="text-[#004691]">Primeros pasos</span></li>
          <li>•</li>
          <li>Iniciar sesión</li>
        </ul>
      </nav>

      <h2 className="text-4xl font-bold mb-8 text-gray-900">
        Iniciar sesión
      </h2>

      <div className="prose max-w-none">
        <div className="space-y-12">
          {/* Paso 1 */}
          <div>
            <p className="text-lg mb-6">
              Paso 1: Abre la app MiTigo y presiona el botón INGRESAR
            </p>
            <img 
              src="/1_iniciar.png" 
              alt="Pantalla inicial con botón de ingreso" 
              className="border border-gray-200 rounded-lg shadow-sm mb-8"
            />
          </div>

          {/* Paso 2 */}
          <div>
            <p className="text-lg mb-6">
              Paso 2: Ingresa tu número de teléfono o correo electrónico con el cual te registraste y selecciona si quiere ingresar con contraseña o con un código que será enviado a tu celular a través de mensaje de texto
            </p>
            <img 
              src="/2_iniciar.png" 
              alt="Pantalla de selección de método de ingreso" 
              className="border border-gray-200 rounded-lg shadow-sm mb-8"
            />
          </div>

          {/* Paso 3 - Opciones A y B */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Opción A */}
            <div className="bg-white p-6 rounded-lg border border-gray-200">
              <p className="text-lg mb-6">
                <span className="font-semibold">Paso 3.A:</span> Si escogiste la opción de ingresar con contraseña, ingresa la contraseña con la que te registraste y presiona el botón continuar
              </p>
              <img 
                src="/4_iniciar.png" 
                alt="Pantalla de ingreso con contraseña" 
                className="border border-gray-200 rounded-lg shadow-sm"
              />
            </div>

            {/* Opción B */}
            <div className="bg-white p-6 rounded-lg border border-gray-200">
              <p className="text-lg mb-6">
                <span className="font-semibold">Paso 3.B:</span> Si escogiste la opción de ingresar con código, ingresa el código que a tú teléfono via mensaje de texto y presiona en el botón continuar
              </p>
              <img 
                src="/5_iniciar.png" 
                alt="Pantalla de ingreso con código SMS" 
                className="border border-gray-200 rounded-lg shadow-sm"
              />
            </div>
          </div>

          {/* Mensaje de éxito */}
          <div className="bg-green-50 border-l-4 border-green-500 p-6 rounded-r-lg">
            <p className="text-lg text-green-700 font-medium flex items-center">
              ¡Felicidades haz Ingresado a MiTigo! 😀 🎉
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}