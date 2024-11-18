import React from 'react';
import { Lightbulb, CheckCircle } from 'lucide-react';

const BloquearCelularTigo = () => {
  return (
    <div className="py-12 px-8">
      <h1 className="text-3xl font-bold mb-6 text-gray-900">
        Cómo bloquear tu celular y línea Tigo por robo o pérdida
      </h1>
      <p className="text-gray-700 mb-4">
        Si roban o pierdes tu celular o línea Tigo, realiza el bloqueo desde Mi Tigo u otros medios disponibles.
      </p>
      
      {/* Imagen principal */}
      <div className="flex justify-center mb-6">
        <img src="/robos_1.png" alt="Bloquear celular Tigo" className="rounded-lg shadow-md" />
      </div>

     

      {/* Preguntas frecuentes */}
      <h2 className="text-2xl font-bold mb-4 text-gray-900">Preguntas frecuentes</h2>
      <ul className="space-y-6 mb-8">
        <li>
          <h3 className="text-lg font-semibold text-gray-800">
            ¿Quién puede solicitar la suspensión de mi línea y equipo por robo o pérdida?
          </h3>
          <p className="text-gray-700">
            La suspensión puede solicitarla cualquier persona que brinde el número de la línea y el número de documento de identidad del titular.
          </p>
        </li>
        <li>
          <h3 className="text-lg font-semibold text-gray-800">
            Si soy menor de edad, ¿puedo bloquear una línea y equipo por robo o pérdida?
          </h3>
          <p className="text-gray-700">
            Sí, podrás realizarlo si brindas los datos correspondientes para la suspensión y nos das tu número de documento de identidad.
          </p>
        </li>
        <li>
          <h3 className="text-lg font-semibold text-gray-800">
            Si suspendo mi línea y tengo un plan, ¿el plan se cancela automáticamente?
          </h3>
          <p className="text-gray-700">
            No, el cargo básico de tu plan se seguirá cobrando con normalidad. Te recomendamos reponer tu SIM lo más rápido posible para que sigas disfrutando de nuestros servicios.
          </p>
        </li>
        <li>
          <h3 className="text-lg font-semibold text-gray-800">
            ¿Qué es el ingreso de mi línea en lista blanca y cómo lo puedo solicitar?
          </h3>
          <p className="text-gray-700">
            El ingreso a Lista Blanca de tu línea consiste en la posibilidad de solo bloquear o suspender tus servicios en una de nuestras Tiendas Tigo. Esta solicitud debe realizarla el titular con su documento de identidad original.
          </p>
        </li>
      </ul>

      {/* Pasos para bloquear */}
      <h2 className="text-2xl font-bold mb-4 text-gray-900">Pasos para bloquear tu celular y línea Tigo</h2>
      <ol className="list-decimal list-inside space-y-4 mb-8 text-gray-700">
        <li>
          Ingresa a Mi Tigo desde cualquier navegador de internet en{' '}
          <a href="https://mi.tigo.com.co" className="text-blue-600 hover:underline">mi.tigo.com.co</a> con tu usuario y contraseña, y selecciona la línea que necesitas bloquear.
        </li>
        <li>
          En el menú de la izquierda, selecciona <strong>Servicios</strong>, luego ve a <strong>Consulta tus Dispositivos</strong> y haz clic en <strong>CONSULTAR</strong>.
        </li>
        <li>
          Haz clic en <strong>BLOQUEAR DISPOSITIVO</strong> para bloquear la línea y el celular.
        </li>
      </ol>

      {/* Nota importante */}
      <div className="bg-blue-50 border-l-4 border-blue-500 p-4 mb-8">
        <Lightbulb className="w-6 h-6 text-blue-500 mr-2 inline-block" />
        <strong>¡Ten en cuenta!</strong> Cuando se solicita el bloqueo por pérdida o hurto, se bloquea la línea móvil y el celular asociado.
      </div>

      {/* Información necesaria */}
      <h2 className="text-2xl font-bold mb-4 text-gray-900">Información necesaria para realizar el bloqueo</h2>
      <ul className="space-y-4 text-gray-700">
        <li><CheckCircle className="w-5 h-5 text-green-500 mr-2 inline-block" /> Número de línea móvil que quieres suspender.</li>
        <li><CheckCircle className="w-5 h-5 text-green-500 mr-2 inline-block" /> Número de documento de identidad del titular de la línea.</li>
        <li><CheckCircle className="w-5 h-5 text-green-500 mr-2 inline-block" /> Nombres y apellidos completos de quien solicita el bloqueo.</li>
        <li><CheckCircle className="w-5 h-5 text-green-500 mr-2 inline-block" /> Departamento, ciudad y dirección donde ocurrió el robo o pérdida.</li>
        <li><CheckCircle className="w-5 h-5 text-green-500 mr-2 inline-block" /> Fecha y hora aproximada del robo o pérdida.</li>
        <li><CheckCircle className="w-5 h-5 text-green-500 mr-2 inline-block" /> Marca, referencia e IMEI del equipo.</li>
        <li><CheckCircle className="w-5 h-5 text-green-500 mr-2 inline-block" /> Correo electrónico si deseas que la Policía Nacional gestione el caso.</li>
      </ul>
    </div>
  );
};

export default BloquearCelularTigo;
