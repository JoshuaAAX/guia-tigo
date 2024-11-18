
'use client'

import { Lightbulb, AlertCircle } from 'lucide-react'

export default function Introduccion() {
    return (
      <div className="py-12 px-8">
      <nav className="text-sm mb-8">
        <ul className="flex space-x-2 text-gray-500">
          <li><span className="text-[#004691]">Primeros pasos</span></li>
          <li>•</li>
          <li>Introducción</li>
        </ul>
      </nav>

      <h2 className="text-4xl font-bold mb-8 text-gray-900">
        Introducción a Mi Tigo App
      </h2>

      <div className="prose max-w-none">
        <p className="text-lg text-gray-600 mb-8">
          Tu portal de autogestión de servicios Tigo en la palma de tu mano.
        </p>

        <div className="bg-blue-50 border-l-4 border-[#004691] p-4 mb-8">
          <div className="flex items-start">
            <Lightbulb className="w-6 h-6 text-[#004691] mr-2 flex-shrink-0" />
            <p className="text-gray-700">
              ¡Descarga Mi Tigo App y ten tu cuenta bajo control!
            </p>
          </div>
        </div>

       

        <p className="text-lg text-gray-600 mb-8">
                Con la aplicación de Tigo podrás realizar pagos, consultas, cambiar la contraseña WiFi, mejorar tu plan móvil u hogar y muchas cosas más que podrás hacer de manera fácil y segura.  
        </p>

        <p className="text-lg text-gray-600 mb-8">
        Con Mi Tigo App tienes la posibilidad de asociar y administrar tus servicios hogar y móviles en un solo lugar.
        </p>
        
        <h3 className="text-2xl font-semibold mb-4">¿Qué puedes hacer con Mi Tigo App?</h3>
        
        <ul className="space-y-4 mb-8">
          <li className="flex items-start">
            <span className="h-6 w-6 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 mr-3 flex-shrink-0">•</span>
            <span>Descargar y pagar tu factura Tigo en línea, asociar métodos de pago con tarjeta débito, tarjeta de crédito, Nequi o directamente Bancolombia.</span>
          </li>
          <li className="flex items-start">
            <span className="h-6 w-6 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 mr-3 flex-shrink-0">•</span>
            <span>Redimir bonos regalo o elegir tus paquetes favoritos de minutos y SMS.</span>
          </li>
          <li className="flex items-start">
            <span className="h-6 w-6 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 mr-3 flex-shrink-0">•</span>
            <span>Bloquear tu equipo por robo o pérdida.</span>
          </li>
          <li className="flex items-start">
            <span className="h-6 w-6 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 mr-3 flex-shrink-0">•</span>
            <span>Habilitar el débito automático con tu tarjeta de crédito.</span>
          </li>
          <li className="flex items-start">
            <span className="h-6 w-6 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 mr-3 flex-shrink-0">•</span>
            <span>Consultar saldo, consumos o detalles de movimiento de datos, minutos y SMS.</span>
          </li>
        </ul>

        <p className="text-lg text-gray-600 mb-4">
          En Mi Tigo App estamos 24/7 para ti.
        </p>
      </div>
    </div>
    )
  }