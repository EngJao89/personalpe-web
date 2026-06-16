import { Header } from '@/components/Header'
import { HeroSection } from '@/components/home/hero-section'
import { IncludedSection } from '@/components/home/included-section'

function App() {
  return (
    <div className="flex min-h-svh flex-col bg-background">
      <Header />
      <main className="flex-1">
        <HeroSection />
        <IncludedSection />
      </main>
    </div>
  )
}

export default App
