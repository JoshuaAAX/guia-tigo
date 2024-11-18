"use client";
import React from "react";
import { Lightbulb } from 'lucide-react'

const ActivarSuscripciones = () => {
  return (
    <div className="py-8 px-4">
      <h1 className="text-2xl font-bold text-blue-700 mb-6">Activar suscripciones</h1>
      <p className="mb-4">
        Sigue estos pasos para activar suscripciones de paquetes de datos:
      </p>

      {/* Paso 1 */}
      <div className="mb-6 border border-gray-200 rounded-lg p-4 ">
        <h2 className="font-bold text-lg">1. Ingresa a Mi Tigo Web o la App</h2>
        <p>
          Ingresa a Mi Tigo Web e inicia sesión con tu usuario y contraseña o con tu número de línea.
        </p>
        <p>
          También puedes realizar este proceso desde Mi Tigo App. Si aún no la tienes instalada, descárgala en tu tienda de aplicaciones:
        </p>
       
      </div>

      {/* Paso 2 */}
      <div className="mb-6 border border-gray-200 rounded-lg p-4 ">
        <h2 className="font-bold text-lg">2. Ingresa a la sección Compras</h2>
        <p>En el menú superior selecciona la opción <strong>Internet</strong>.</p>
        <img
          src="/sus_2.png"
          alt="Sección compras"
          className="rounded-lg mt-4"
        />
      </div>

      {/* Paso 3 */}
      <div className="mb-6 border border-gray-200 rounded-lg p-4 ">
        <h2 className="font-bold text-lg">3. Selecciona un paquete</h2>
        <p>Haz clic en Suscripciones para ver las opciones disponibles y elige el paquete que deseas.</p>
        <img
          src="/sus_3.png"
          alt="Paquetes disponibles"
          className="rounded-lg mt-4"
        />
      </div>

      {/* Paso 4 */}
      <div className="mb-6 border border-gray-200 rounded-lg p-4 ">
        <h2 className="font-bold text-lg">4. Selecciona el método de pago</h2>
        <p>
          Para este tipo de compra, selecciona <strong>Saldo de recargas</strong> y haz clic en el botón <strong>PAGAR</strong>.
        </p>
        <img
          src="/sus_4.png"
          alt="Método de pago"
          className="rounded-lg mt-4"
        />
      </div>

      <div className="bg-blue-50 border-l-4 border-[#004691] p-4 mb-8">
          <div className="flex items-start">
            <Lightbulb className="w-6 h-6 text-[#004691] mr-2 flex-shrink-0" />
            <p>
          <strong>¡Ten en cuenta!</strong> Si el valor del paquete elegido es mayor que tu saldo disponible, verás una notificación de <strong>Saldo Insuficiente</strong>, y podrás recargar o cambiar el método de pago.
        </p>
          </div>
        </div>


      {/* Consultar o eliminar */}
      <div className="mb-6 border border-gray-200 rounded-lg p-4 ">
        <h2 className="font-bold text-lg">Para consultar o eliminar suscripciones activas</h2>
        <p>
          Ingresa a <strong>Mi Tigo</strong> en la sección <strong>SERVICIOS</strong>, donde podrás visualizar o eliminar suscripciones activas.
        </p>
        <p>
          <strong>Importante:</strong> Para cancelar una suscripción, debes hacerlo en el mismo canal donde la activaste.
        </p>
        <img
          src="/sus_5.png"
          alt="Suscripciones activas"
          className="rounded-lg mt-4"
        />
      </div>
    </div>
  );
};

export default ActivarSuscripciones;
