// app/capitulos/layout.tsx
import { ReactNode } from 'react'
import { LeftSidebar } from '@/components/Leftsidebar'
import { RightSidebar } from '@/components/Rightsidebar'

export default function CapitulosLayout({ children }: { children: ReactNode }) {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <div className="flex-1 max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8">
        <div className="flex justify-center">
          <LeftSidebar />
          <main className="flex-1 min-w-0 max-w-3xl">{children}</main>
          <RightSidebar />
        </div>
      </div>
    </div>
  )
}