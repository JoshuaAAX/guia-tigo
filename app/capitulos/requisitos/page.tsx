'use client'

import { CheckCircle } from 'lucide-react'

export default function RequisitosPage() {
  return (
    <div className="py-12 px-8">
      <nav className="text-sm mb-8">
        <ul className="flex space-x-2 text-gray-500">
          <li><span className="text-[#004691]">Primeros pasos</span></li>
          <li>•</li>
          <li>Requisitos previos</li>
        </ul>
      </nav>

      <h2 className="text-4xl font-bold mb-8 text-gray-900">
        Requisitos Previos
      </h2>

      <div className="prose max-w-none">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <div className="bg-white p-6 rounded-lg border border-gray-200">
            <h3 className="text-xl font-semibold mb-4 flex items-center">
              <CheckCircle className="w-6 h-6 text-green-500 mr-2" />
              Compatibilidad
            </h3>
            <ul className="space-y-2">
              <li>iOS 12 o posterior</li>
              <li>Android 7.0 y versiones posteriores</li>
            </ul>
          </div>

          <div className="bg-white p-6 rounded-lg border border-gray-200">
            <h3 className="text-xl font-semibold mb-4 flex items-center">
              <CheckCircle className="w-6 h-6 text-green-500 mr-2" />
              Especificaciones
            </h3>
            <ul className="space-y-2">
              <li>Espacio de almacenamiento: 71MB</li>
              <li>Conexión a internet requerida</li>
            </ul>
          </div>
        </div>

        <h3 className="text-2xl font-semibold mb-4">Permisos Requeridos</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white p-6 rounded-lg border border-gray-200">
            <h4 className="font-semibold mb-2">Cámara</h4>
            <ul className="space-y-2">
              <li>Tomar fotografías y grabar vídeos</li>
            </ul>
          </div>

          <div className="bg-white p-6 rounded-lg border border-gray-200">
            <h4 className="font-semibold mb-2">Contactos</h4>
            <ul className="space-y-2">
              <li>Leer tus contactos</li>
              <li>Buscar cuentas en el dispositivo</li>
              <li>Modificar tus contactos</li>
            </ul>
          </div>

          <div className="bg-white p-6 rounded-lg border border-gray-200">
            <h4 className="font-semibold mb-2">Ubicación</h4>
            <ul className="space-y-2">
              <li>Acceder a la ubicación precisa sólo en primer plano</li>
              <li>Acceder a la ubicación aproximada solo en primer plano</li>
            </ul>
          </div>

          <div className="bg-white p-6 rounded-lg border border-gray-200">
            <h4 className="font-semibold mb-2">Almacenamiento</h4>
            <ul className="space-y-2">
              <li>Cambiar o borrar contenido de almacenamiento compartido</li>
              <li>Ver almacenamiento compartido</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}