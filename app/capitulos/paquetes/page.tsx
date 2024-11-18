'use client'

import { Button } from '@/components/ui/button'
import { useRouter, usePathname } from 'next/navigation'
import { ScrollArea } from "@/components/ui/scroll-area"
import React, { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'

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

export default function LeftSidebar() {
  const router = useRouter()
  const pathname = usePathname()
  const [activeSection, setActiveSection] = useState('')
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

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
    setIsMobileMenuOpen(false)
  }

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  return (
    <>
      {/* Mobile Menu Toggle */}
      <button 
        className="lg:hidden fixed top-4 left-4 z-50 bg-white p-2 rounded-md shadow"
        onClick={toggleMobileMenu}
      >
        {isMobileMenuOpen ? <X /> : <Menu />}
      </button>

      {/* Sidebar for Desktop and Mobile */}
      <aside 
        className={`
          fixed inset-y-0 left-0 z-40 w-64 bg-white 
          transform transition-transform duration-300 ease-in-out
          lg:relative lg:translate-x-0
          ${isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'}
        `}
      >
        <div className="sticky top-0 h-screen">
          <ScrollArea className="h-full">
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

      {/* Mobile overlay */}
      {isMobileMenuOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-30 lg:hidden"
          onClick={toggleMobileMenu}
        />
      )}
    </>
  )
}