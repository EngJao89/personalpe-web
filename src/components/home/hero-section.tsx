import { useRef, useState } from 'react'
import { Play } from 'lucide-react'

import homeVideo from '@/assets/Home-video-02-Otimizado.mp4'
import heroImage from '@/assets/WhatsApp Image 2026-06-15 at 10.29.09.jpeg'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'

export function HeroSection() {
  const videoRef = useRef<HTMLVideoElement>(null)
  const [isPlaying, setIsPlaying] = useState(false)

  const handlePlay = async () => {
    const video = videoRef.current
    if (!video) return

    try {
      await video.play()
      setIsPlaying(true)
    } catch {
      setIsPlaying(false)
    }
  }

  return (
    <section className="bg-black text-white">
      <div className="mx-auto grid max-w-6xl md:grid-cols-2 md:items-stretch">
        <div className="flex flex-col gap-4 px-4 py-6 text-left md:gap-5 md:px-6 md:py-8">
          <div className="max-w-lg space-y-2">
            <h1 className="text-xl font-bold uppercase leading-tight tracking-wide sm:text-2xl md:text-3xl">
              Você quer resultados de verdade?
            </h1>
            <p className="text-xs leading-relaxed text-white/85 sm:text-sm">
              Consultoria online com treino personalizado e acompanhamento direto
              no WhatsApp.
            </p>
          </div>

          <div className="flex flex-col items-center gap-4 sm:flex-row sm:items-center">
            <div className="relative w-full max-w-md overflow-hidden rounded-sm border border-white/10 bg-zinc-900 sm:max-w-xs">
              <video
                ref={videoRef}
                className="aspect-video w-full object-cover"
                src={homeVideo}
                playsInline
                controls={isPlaying}
                preload="metadata"
                onPause={() => setIsPlaying(false)}
                onEnded={() => setIsPlaying(false)}
              />
              {isPlaying ? null : (
                <button
                  type="button"
                  className="absolute inset-0 flex items-center justify-center bg-black/30 transition-colors hover:bg-black/40"
                  aria-label="Assistir ao vídeo"
                  onClick={handlePlay}
                >
                  <span className="flex size-14 items-center justify-center rounded-full bg-[#f5c518] text-black shadow-lg sm:size-16">
                    <Play className="ml-1 size-7 fill-black sm:size-8" />
                  </span>
                </button>
              )}
            </div>

            <p className="text-center text-xl font-bold uppercase leading-none sm:text-left sm:text-2xl md:text-3xl">
              <span className="text-[#f5c518]">Assista</span>
              <br />
              ao vídeo
            </p>
          </div>

          <Button
            asChild
            className={cn(
              'h-11 w-full rounded-sm bg-[#f5c518] text-sm font-bold text-black uppercase',
              'hover:bg-[#e0b310] sm:h-12 sm:text-base',
            )}
          >
            <a href="#contato">Quero começar agora mesmo!</a>
          </Button>
        </div>

        <div className="relative hidden overflow-hidden md:block md:min-h-0">
          <img
            src={heroImage}
            alt="Atleta em corrida durante treino"
            className="absolute inset-0 size-full object-cover object-[center_12%]"
          />
          <div className="absolute inset-0 bg-linear-to-r from-black/90 via-black/20 to-transparent" />
        </div>
      </div>
    </section>
  )
}
