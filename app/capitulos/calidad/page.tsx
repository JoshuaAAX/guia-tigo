"use client";
import React from "react";
import { Lightbulb } from 'lucide-react'

const ActivarSuscripciones = () => {
  return (
    <div className="py-8 px-4">
      <h1 className="text-2xl font-bold text-blue-700 mb-6">¿Cómo medir la calidad de la red móvil? </h1>
      <p className="mb-4">
      Realiza la prueba de velocidad, donde puedes conocer aspectos relevantes de la red móvil que usas con tu plan o paquete activo de tu servicio móvil.
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
        <h2 className="font-bold text-lg">2. Ingresa en la sección Servicios </h2>
        <p>Si tienes varias líneas móviles asociados a Mi Tigo. Selecciona cada línea en la que desees realizar la prueba.</p>
        
      </div>

      {/* Paso 3 */}
      <div className="mb-6 border border-gray-200 rounded-lg p-4 ">
        <h2 className="font-bold text-lg">3. Si es la primera vez que ingresas, autoriza la medición de la calidad de la red móvil de datos e INICA TEST</h2>
       
        <img
          src="/calidad_1.png"
          alt="Paquetes disponibles"
          className="rounded-lg mt-4"
        />
      </div>

      {/* Paso 4 */}
      <div className="mb-6 border border-gray-200 rounded-lg p-4 ">
        <h2 className="font-bold text-lg">4.  Al iniciar la prueba, te mostrará la medición de cada uno de los aspectos relevantes de la red móvil</h2>
        
        <img
          src="/calidad_2.png"
          alt="Método de pago"
          className="rounded-lg mt-4"
        />
      </div>

       {/* Paso 5 */}
       <div className="mb-6 border border-gray-200 rounded-lg p-4 ">
        <h2 className="font-bold text-lg">5.  ¡Listo! Al finalizar la prueba de todos los aspectos de mostrará el resumen así:</h2>
        
        <img
          src="/calidad_3.png"
          alt="Método de pago"
          className="rounded-lg mt-4"
        />
      </div>

      <div className="bg-blue-50 border-l-4 border-[#004691] p-4 mb-8">
  <div className="flex items-start">
    {/* Icono de bombilla */}
    <Lightbulb className="w-6 h-6 text-[#004691] mr-2 flex-shrink-0" />
    
    {/* Contenedor de texto */}
    <div>
      <p className="font-bold">¡Ten en cuenta!</p>
      
      {/* Espacio debajo del texto principal */}
      <div className="mt-2">
        <ul className="space-y-4 mb-8">
          <li className="flex items-start">
            <span className="h-6 w-6 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 mr-3 flex-shrink-0">•</span>
            <span>
              Es necesario tener activa de manera permanente la ubicación (GPS o localización) en tu dispositivo móvil, la cual nos indicará el dato correcto del punto en el que te encuentras conectado a nuestra red móvil.
            </span>
          </li>
          <li className="flex items-start">
            <span className="h-6 w-6 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 mr-3 flex-shrink-0">•</span>
            <span>
              Para que la prueba de velocidad funcione de forma correcta, debes revisar que no estés conectado por red WiFi.
            </span>
          </li>
        </ul>
      </div>
    </div>
  </div>
</div>
         
    </div>


    
  );
};

export default ActivarSuscripciones;
