'use client'

import { Button } from '@/components/ui/button'
import { useRouter, usePathname } from 'next/navigation'
import { ScrollArea } from "@/components/ui/scroll-area"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Menu } from 'lucide-react'
import React, { useState, useEffect } from 'react'

const leftSidebarItems = [
  {
    title: 'Primeros Pasos',
    items: [
      { id: 'introducción', label: 'Introducción', path: '/capitulos/introduccion' },
      { id: 'requisitos', label: 'Requisitos', path: '/capitulos/requisitos' },
      { id: 'instalación', label: 'Instalación', path: '/capitulos/instalacion' },
      { id: 'cuenta', label: 'Crear Cuenta', path: '/capitulos/cuenta' },
      { id: 'iniciar', label: 'Iniciar Sesión', path: '/capitulos/iniciar' },
      { id: 'paquetes', label: 'Paquetes', path: '/capitulos/paquetes' },
      { id: 'recargas', label: 'Recargas', path: '/capitulos/recargas' },
      { id: 'saldo', label: 'Consulta Saldo', path: '/capitulos/saldo' },
      { id: 'pagar', label: 'Pagar Factura', path: '/capitulos/pagar' },
      { id: 'redimir', label: 'Redimir Bonos', path: '/capitulos/redimir' },
    ]
  },
  {
    title: 'Segundos Pasos',
    items: [
      { id: "algo", label: "algo mejorcito", path: '/' }
    ]
  },
  {
    title: 'Avanzado',
    items: [
      { id: "preguntas", label: "Preguntas Frecuentes", path: '/' }
    ]
  }
]

export function LeftSidebar() {
  const router = useRouter()
  const pathname = usePathname()
  const [activeSection, setActiveSection] = useState('')

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

  const sidebarContent = (
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
  )

  return (
    <>
      {/* Desktop Sidebar */}
      <aside className="hidden lg:block w-64 flex-shrink-0">
        <div className="sticky top-0">
          <ScrollArea className="h-[calc(100vh-64px)]">
            {sidebarContent}
          </ScrollArea>
        </div>
      </aside>

      {/* Mobile Sidebar */}
      <Sheet>
        <SheetTrigger asChild className="lg:hidden fixed top-4 left-4 z-50">
          <Button variant="outline" size="icon">
            <Menu className="h-6 w-6" />
          </Button>
        </SheetTrigger>
        <SheetContent side="left" className="w-64">
          <ScrollArea className="h-full">
            {sidebarContent}
          </ScrollArea>
        </SheetContent>
      </Sheet>
    </>
  )
}