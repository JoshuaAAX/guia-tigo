
// app/capitulos/primeros-pasos/instalacion/page.tsx
'use client'

import { Download, Smartphone } from 'lucide-react'

export default function InstalacionPage() {
  return (
    <div className="py-12 px-8">
      <nav className="text-sm mb-8">
        <ul className="flex space-x-2 text-gray-500">
          <li><span className="text-[#004691]">Primeros pasos</span></li>
          <li>•</li>
          <li>Instalación</li>
        </ul>
      </nav>

      <h2 className="text-4xl font-bold mb-8 text-gray-900">
        Instalación de Mi Tigo App
      </h2>

      <div className="prose max-w-none">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          <div className="bg-white p-6 rounded-lg border border-gray-200">
            <div className="flex items-center mb-4">
              <Download className="w-8 h-8 text-blue-600 mr-3" />
              <h3 className="text-xl font-semibold">Google Play Store</h3>
            </div>
            <ol className="space-y-4">
              <li>1. Abre Google Play Store en tu dispositivo Android</li>
              <li>2. Busca "Mi Tigo App"</li>
              <li>3. Toca "Instalar"</li>
              <li>4. Acepta los permisos requeridos</li>
              <li>5. Espera a que se complete la instalación</li>
            </ol>
          </div>

          <div className="bg-white p-6 rounded-lg border border-gray-200">
            <div className="flex items-center mb-4">
              <Smartphone className="w-8 h-8 text-blue-600 mr-3" />
              <h3 className="text-xl font-semibold">App Store</h3>
            </div>
            <ol className="space-y-4">
              <li>1. Abre App Store en tu iPhone</li>
              <li>2. Busca "Mi Tigo App"</li>
              <li>3. Toca "Obtener"</li>
              <li>4. Autoriza la instalación</li>
              <li>5. Espera a que se complete la descarga</li>
            </ol>
          </div>
        </div>
      </div>
    </div>
  )
}