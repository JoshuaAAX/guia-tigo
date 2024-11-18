"use client"
import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const ComprarPaquetes = () => {
  
  return (
    <div className="py-12 px-8">
      <nav className="text-sm mb-8">
        <ul className="flex space-x-2 text-gray-500">
          <li><span className="text-[#004691]">Avanzado</span></li>
          <li>•</li>
          <li>Realizar compras</li>
        </ul>
      </nav>
      
      <Card className="py-4 mb-8">
        <CardHeader>
          <CardTitle>Cómo Comprar Paquetes en Mi.Tigo</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <p>
              Te enseñamos cómo comprar paquetes de internet, voz o SMS para tu línea prepago desde Mi.Tigo con todos los medios de pago.
            </p>
            <div className="flex justify-center">
              <img src="/compras_avanza.png" alt="Descarga nuestra App" />
            </div>
            <p>Elige el medio de pago que prefieras:</p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <Button variant="outline">Saldo en Recargas</Button>
              <Button variant="outline">Tarjeta Débito</Button>
              <Button variant="outline">Nequi</Button>
              <Button variant="outline">Tarjeta Crédito</Button>
              <Button variant="outline">Bancolombia</Button>
              <Button variant="outline">Tigo te Presta</Button>
            </div>
            <p className="text-sm text-gray-500">
              Nota: Las imágenes de referencia del proceso corresponden a la versión web o móvil de la aplicación, las vistas pueden variar ligeramente al ingresar a la aplicación en tu dispositivo móvil.
            </p>
          </div>
        </CardContent>
      </Card>

    
    </div>
  );
};

export default ComprarPaquetes;
