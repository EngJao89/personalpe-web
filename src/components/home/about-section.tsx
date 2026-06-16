import aboutImage from '@/assets/Captura de tela de 2026-06-15 23-23-41.png'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'

const HOTMART_CHECKOUT_URL =
  'https://pay.hotmart.com/J78869572N?bid=1781576681336'

const paragraphs = [
  'Sou Edinan Junior, personal trainer com foco em resultados reais. Minha trajetória é marcada pela disciplina e pela paixão em ajudar cada aluno a evoluir.',
  'Formado em educação física, atuo na área há anos com acompanhamento próximo e treino pensado para a sua rotina.',
  'Minha especialidade é lhe garantir e trazer resultados — tanto em estética e saúde quanto em performance!',
  'Com centenas de consultorias online realizadas e alunos satisfeitos, meu objetivo é fazer você chegar no resultado que deseja.',
  'Então, vamos trabalhar juntos? Clique no botão e venha fazer parte do time que mais cresce no Brasil.',
] as const

export function AboutSection() {
  return (
    <section className="flex flex-1 bg-background text-foreground dark:bg-black dark:text-white">
      <div className="mx-auto grid w-full max-w-6xl md:grid-cols-2 md:items-center">
        <div className="relative min-h-64 overflow-hidden md:min-h-[28rem]">
          <img
            src={aboutImage}
            alt="Edinan Junior orientando aluna em treino com barra"
            className="absolute inset-0 size-full object-cover object-[center_20%]"
          />
          <div className="absolute inset-0 bg-linear-to-r from-transparent via-background/20 to-background dark:via-black/20 dark:to-black" />
          <div className="absolute inset-0 bg-linear-to-b from-background/70 via-transparent to-background/90 dark:from-black/70 dark:to-black/90" />
        </div>

        <div className="space-y-5 px-4 py-8 md:space-y-6 md:px-8 md:py-12 lg:px-10">
          <h2 className="text-xl font-bold uppercase tracking-wide sm:text-2xl md:text-3xl">
            Quem sou eu?
          </h2>

          <div className="space-y-4 text-sm leading-relaxed text-muted-foreground sm:text-base dark:text-white/90">
            {paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>

          <Button
            asChild
            className={cn(
              'h-12 w-full rounded-sm bg-[#f5c518] text-sm font-bold text-black uppercase',
              'hover:bg-[#e0b310] sm:h-14 sm:text-base',
            )}
          >
            <a
              href={HOTMART_CHECKOUT_URL}
              target="_blank"
              rel="noopener noreferrer"
            >
              Quero fazer parte do time
            </a>
          </Button>
        </div>
      </div>
    </section>
  )
}
