'use client'

export default function RedimirBonosPage() {
    return (
      <div className="py-12 px-8">
        <nav className="text-sm mb-8">
          <ul className="flex space-x-2 text-gray-500">
            <li><span className="text-[#004691]">Compras</span></li>
            <li>•</li>
            <li>Redimir bonos</li>
          </ul>
        </nav>
  
        <h2 className="text-4xl font-bold mb-8 text-gray-900">
          Redimir bonos
        </h2>
  
        <div className="prose max-w-none">
          <div className="bg-white p-6 rounded-lg border border-gray-200">
            <p className="text-lg">
              En la sección compras presiona el botón regalos en la parte superior derecha de la pantalla y presiona en el botón redimir si tienes bonos disponibles
            </p>
            <img 
              src="/2_redimir.png" 
              alt="Sección de redención de bonos" 
              className="border border-gray-200 rounded-lg shadow-sm mt-6"
            />
          </div>
        </div>
      </div>
    );
  }