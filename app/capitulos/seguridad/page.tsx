'use client'

import { ShieldCheck, Key } from 'lucide-react'

import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

interface FAQItem {
  question: string;
  answer: string;
}

const faqData: FAQItem[] = [
  {
    question: '¿Qué es el doble factor de autenticación?',
    answer:
      'Es una medida de seguridad que permitirá validar por medio de un código enviado a tu correo electrónico, que eres tú quien desea ingresar a sus servicios de Tigo, cuando ingreses usando tu correo electrónico.',
  },
  {
    question: '¿Cuándo deberé usar doble factor de autenticación?',
    answer:
      'Cuando ingreses a las apps de Tigo usando correo electrónico (Mi Tigo, OneTV...).',
  },
  {
    question: '¿Qué pasa si no recibo el PIN en mi correo electrónico?',
    answer:
      'Asegúrate de tener internet con tus datos o wifi para recibir tus correos electrónicos.',
  },
  {
    question:
      '¿Si ingreso con mi número Tigo o Red Social debo usar doble factor de autenticación?',
    answer: 'No, no debes usar el código de verificación.',
  },
  {
    question:
      '¿Cómo recibiré el código para usar el Doble factor de autenticación?',
    answer:
      'Recibirás el código de doble factor de autenticación en un formato numérico de 6 dígitos al correo electrónico que usas para ingresar a las apps de Tigo.',
  },
];


export default function ActivacionPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="py-12 px-8">
      <nav className="text-sm mb-8">
        <ul className="flex space-x-2 text-gray-500">
          <li><span className="text-[#004691]">Avanzado</span></li>
          <li>•</li>
          <li>Seguridad</li>
        </ul>
      </nav>

      <h2 className="text-4xl font-bold mb-8 text-gray-900">
        Activación de Mi Tigo App
      </h2>

      <div className="prose max-w-none">
        <p className="text-lg text-gray-600 mb-8">
          Una vez instalada Mi Tigo App, sigue estos pasos para activar tu cuenta y comenzar a disfrutar de todos los beneficios.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          <div className="bg-white p-6 rounded-lg border border-gray-200">
            <div className="flex items-center mb-4">
              <ShieldCheck className="w-8 h-8 text-blue-600 mr-3" />
              <h3 className="text-xl font-semibold">Verificación de Número</h3>
            </div>
            <ol className="space-y-4">
              <li>1. Ingresa tu número de teléfono asociado con Tigo.</li>
              <li>2. Recibirás un código de 6 dígitos vía SMS.</li>
              <li>3. Introduce el código en la app para verificar tu número.</li>
            </ol>
          </div>

          <div className="bg-white p-6 rounded-lg border border-gray-200">
            <div className="flex items-center mb-4">
              <Key className="w-8 h-8 text-blue-600 mr-3" />
              <h3 className="text-xl font-semibold">Creación de Contraseña</h3>
            </div>
            <ol className="space-y-4">
              <li>1. Define una contraseña segura para tu cuenta.</li>
              <li>2. La contraseña debe contener al menos 8 caracteres, incluyendo letras, números y símbolos.</li>
              <li>3. Confirma la contraseña y guárdala en un lugar seguro.</li>
            </ol>
          </div>
        </div>

        <h3 className="text-2xl font-semibold mb-4">Consejos de Seguridad</h3>
        <div className="bg-blue-50 border-l-4 border-[#004691] p-4">
          <p className="text-gray-700">
            Asegúrate de no compartir tu código de activación ni tu contraseña con nadie. Si sospechas un acceso no autorizado, cambia tu contraseña de inmediato.
          </p>
        </div>
      </div>

      <h3 className="text-2xl font-bold mb-6 text-gray-900 py-4">
        Conoce más sobre la medida de seguridad
      </h3>
      
      <div className="space-y-4">
        {faqData.map((item, index) => (
          <div key={index} className="border border-gray-200 rounded-lg overflow-hidden">
            <button
              onClick={() => toggleFAQ(index)}
              className="w-full flex justify-between items-center p-4 bg-gray-50 hover:bg-gray-100 transition"
            >
              <span className="text-lg text-gray-800">{item.question}</span>
              {openIndex === index ? (
                <ChevronUp className="w-5 h-5 text-gray-600" />
              ) : (
                <ChevronDown className="w-5 h-5 text-gray-600" />
              )}
            </button>
            {openIndex === index && (
              <div className="p-4 bg-white text-gray-700 border-t border-gray-200">
                {item.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}