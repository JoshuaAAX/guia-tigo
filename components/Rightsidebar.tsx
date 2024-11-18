

// components/layout/left-sidebar.tsx
'use client'

import { Button } from '@/components/ui/button'

import React, { useState } from 'react'


const rightSidebarItems = [
    { id: 'barra-lateral', label: 'Barra lateral' },
    { id: 'canales', label: 'Canales' },
    { id: 'campo-mensaje', label: 'Campo de mensaje' },
    { id: 'buscar-crear-perfilar', label: 'Buscar, crear y perfilar' },
    { id: 'mas', label: 'E incluso mucho más' },
]

export function RightSidebar() {
    
    const [activeSection] = useState('')
    
return(
    <aside className="w-64 flex-shrink-0">
            <div className="sticky top-0 pt-8 pl-6">
              <h3 className="text-sm font-semibold text-gray-500 mb-4">CONTENIDO DEL ARTÍCULO</h3>
              <nav className="space-y-1">
                {rightSidebarItems.map((item) => (
                  <Button
                    key={item.id}
                    variant="ghost"
                    className={`w-full justify-start text-sm ${
                      activeSection === item.id ? 'text-[#004691]' : 'text-gray-700'
                    }`}
                    onClick={() => console.log("click right bar")}
                  >
                    {item.label}
                  </Button>
                ))}
              </nav>
            </div>
    </aside>

)}
