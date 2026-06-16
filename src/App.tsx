import { Header } from '@/components/Header'

function App() {
  return (
    <div className="flex min-h-svh flex-col bg-background">
      <Header />
      <main className="mx-auto w-full max-w-6xl flex-1 px-4 py-6 md:px-6 md:py-10">
        <h1 className="text-xl font-semibold tracking-tight md:text-2xl lg:text-3xl">
          PersonalPE
        </h1>
      </main>
    </div>
  )
}

export default App
