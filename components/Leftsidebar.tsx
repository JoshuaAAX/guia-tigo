// components/layout/left-sidebar.tsx
'use client'

import { Button } from '@/components/ui/button'
import { useRouter, usePathname } from 'next/navigation'
import { ScrollArea } from "@/components/ui/scroll-area"
import React, { useState, useRef, useEffect } from 'react'

const leftSidebarItems = [
  {
    title: 'Primeros Pasos',
    items: [
      { id: 'introducción', label: 'Introducción', path: '/capitulos/introduccion' },
      { id: 'requisitos', label: 'Requisitos', path: '/capitulos/requisitos' },
      { id: 'instalación', label: 'Instalación', path: '/capitulos/instalacion' },
    ]
  },
 
]

export function LeftSidebar() {
  const router = useRouter()
  const pathname = usePathname()
  const [activeSection, setActiveSection] = useState('')
  const sectionRefs = useRef({})

  // Actualizar la sección activa basada en la ruta actual
  useEffect(() => {
    const currentPath = pathname
    const activeItem = leftSidebarItems.flatMap(section => section.items)
      .find(item => item.path === currentPath)
    
    if (activeItem) {
      setActiveSection(activeItem.id)
    }
  }, [pathname])

  const handleNavigation = (path: string, id: string) => {
    setActiveSection(id)
    router.push(path)
  }

  return (
    <aside className="w-64 flex-shrink-0">
      <div className="sticky top-0">
        <ScrollArea className="h-[calc(100vh-64px)]">
          <nav className="py-6">
            {leftSidebarItems.map((section) => (
              <div key={section.title} className="mb-5">
                <h2 className="text-sm font-semibold text-gray-500 mb-2 px-3">
                  {section.title}
                </h2>
                <ul>
                  {section.items.map((item) => (
                    <li key={item.id}>
                      <Button
                        variant="ghost"
                        className={`w-full justify-start text-sm px-3 ${
                          activeSection === item.id 
                            ? 'bg-blue-50 text-blue-600' 
                            : 'text-gray-700 hover:bg-gray-50'
                        }`}
                        onClick={() => handleNavigation(item.path, item.id)}
                      >
                        {item.label}
                      </Button>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </nav>
        </ScrollArea>
      </div>
    </aside>
  )
}