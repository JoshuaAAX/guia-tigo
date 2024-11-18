'use client'

import { UserPlus, LogIn } from 'lucide-react'

export default function RegistroPage() {
  return (
    <div className="py-12 px-8">
      <nav className="text-sm mb-8">
        <ul className="flex space-x-2 text-gray-500">
          <li><span className="text-[#004691]">Funcionalidades</span></li>
          <li>•</li>
          <li>Registro e Inicio de Sesión</li>
        </ul>
      </nav>

      <h2 className="text-4xl font-bold mb-8 text-gray-900">
        Registro e Inicio de Sesión
      </h2>

      <div className="prose max-w-none">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          <div className="bg-white p-6 rounded-lg border border-gray-200">
            <div className="flex items-center mb-4">
              <UserPlus className="w-8 h-8 text-blue-600 mr-3" />
              <h3 className="text-xl font-semibold">Crear cuenta</h3>
            </div>
            <ol className="space-y-4">
              <li>1. Abre Mi Tigo App</li>
              <li>2. Toca "Registrarse"</li>
              <li>3. Ingresa tu número de teléfono</li>
              <li>4. Ingresa el código de verificación</li>
              <li>5. Completa tus datos personales</li>
              <li>6. Crea una contraseña segura</li>
              <li>7. Acepta los términos y condiciones</li>
            </ol>
          </div>

          <div className="bg-white p-6 rounded-lg border border-gray-200">
            <div className="flex items-center mb-4">
              <LogIn className="w-8 h-8 text-blue-600 mr-3" />
              <h3 className="text-xl font-semibold">Iniciar sesión</h3>
            </div>
            <ol className="space-y-4">
              <li>1. Abre Mi Tigo App</li>
              <li>2. Ingresa tu número de teléfono</li>
              <li>3. Ingresa tu contraseña</li>
              <li>4. Toca "Iniciar sesión"</li>
            </ol>
          </div>
        </div>
      </div>
    </div>
  )
}