'use client'
export default function HazRecargasPage() {
    return (
      <div className="py-12 px-8">
        <nav className="text-sm mb-8">
          <ul className="flex space-x-2 text-gray-500">
            <li><span className="text-[#004691]">Compras</span></li>
            <li>•</li>
            <li>Haz Recargas</li>
          </ul>
        </nav>
  
        <h2 className="text-4xl font-bold mb-8 text-gray-900">
          Haz Recargas
        </h2>
  
        <div className="prose max-w-none">
          <div className="space-y-12">
            {/* Paso 1 */}
            <div>
              <p className="text-lg mb-6">
                Paso 1: en la sección de compras, presiona el botón de recargas
              </p>
              <img 
                src="/1_recargas.png" 
                alt="Sección de recargas" 
                className="border border-gray-200 rounded-lg shadow-sm mb-8"
              />
            </div>
  
            {/* Paso 2 */}
            <div>
              <p className="text-lg mb-6">
                Paso 2: Selecciona el valor que deseas recargar y presiona el botón continuar
              </p>
              <img 
                src="/2_recargas.png" 
                alt="Selección de valor de recarga" 
                className="border border-gray-200 rounded-lg shadow-sm mb-8"
              />
            </div>
  
            {/* Paso 3 */}
            <div>
              <p className="text-lg mb-6">
                Paso 3: Selecciona el número de línea a recargar y el método de pago
              </p>
              <img 
                src="/3_recargas.png" 
                alt="Selección de línea y método de pago" 
                className="border border-gray-200 rounded-lg shadow-sm mb-8"
              />
            </div>
  
            {/* Mensaje de éxito */}
            <div className="bg-green-50 border-l-4 border-green-500 p-6 rounded-r-lg">
              <p className="text-lg text-green-700 font-medium">
                Felicidades, recargaste
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }