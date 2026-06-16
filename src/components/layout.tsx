import { Outlet } from 'react-router-dom'

import { Header } from '@/components/Header'

export function Layout() {
  return (
    <div className="flex min-h-svh flex-col bg-background">
      <Header />
      <main className="flex flex-1 flex-col">
        <Outlet />
      </main>
    </div>
  )
}
