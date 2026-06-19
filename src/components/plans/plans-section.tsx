import heroBanner from '@/assets/Captura de tela de 2026-06-15 23-23-41.png'
import phonesImage from '@/assets/3-fotos.png'
import logoIcon from '@/assets/so\u0301 logo 02_Prancheta 1 co\u0301pia 9.png'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardFooter } from '@/components/ui/card'
import { cn } from '@/lib/utils'

type Plan = {
  id: string
  name: string
  price: string
  href: string
  featured?: boolean
  image?: string
}

const plans: Plan[] = [
  {
    id: 'mensal',
    name: 'Mensal',
    price: 'R$289,00',
    href: 'https://pay.hotmart.com/M81484460C?bid=1781829660732',
  },
  {
    id: 'trimestral',
    name: 'Trimestral',
    price: 'R$753,80',
    href: 'https://pay.hotmart.com/P81485120M?bid=1781829738593',
    featured: true,
    image: phonesImage,
  },
  {
    id: 'semestral',
    name: 'Semestral',
    price: 'R$1.247,25',
    href: 'https://pay.hotmart.com/V81485685L?bid=1781829815078',
  },
  {
    id: 'anual',
    name: 'Anual',
    price: 'R$2.030,00',
    href: 'https://pay.hotmart.com/B84881341D?bid=1781829868441',
  },
]

function PlanCardHeader() {
  return (
    <div className="flex items-center justify-center gap-2 text-sm font-bold uppercase tracking-wide sm:text-base">
      <span className="text-[#f5c518]">Consultoria</span>
      <img
        src={logoIcon}
        alt=""
        aria-hidden
        className="size-8 object-contain sm:size-9"
      />
      <span>Online</span>
    </div>
  )
}

function PlanCard({ plan }: { plan: Plan }) {
  return (
    <Card
      className={cn(
        'relative gap-0 overflow-visible rounded-sm border-0 bg-zinc-900 py-0 text-white ring-0',
        'dark:bg-zinc-900',
      )}
    >
      {plan.featured ? (
        <div className="pointer-events-none absolute top-0 right-0 z-10 size-24 overflow-hidden">
          <span className="absolute top-4 -right-6 block w-32 rotate-45 bg-[#f5c518] py-1 text-center text-[10px] font-bold text-black uppercase shadow-sm">
            Promoção
          </span>
        </div>
      ) : null}

      <CardContent className="flex flex-col gap-4 px-4 pt-5 pb-4">
        <PlanCardHeader />

        <div className="flex min-h-28 flex-col items-center justify-center gap-3">
          {plan.image ? (
            <img
              src={plan.image}
              alt=""
              aria-hidden
              className="max-h-24 w-full object-contain sm:max-h-28"
            />
          ) : null}
          <p className="text-2xl font-bold uppercase tracking-wide sm:text-3xl">
            {plan.name}
          </p>
        </div>

        <p className="text-center text-2xl font-bold sm:text-3xl">{plan.price}</p>
      </CardContent>

      <CardFooter className="border-0 bg-transparent p-0 pb-4">
        <Button
          asChild
          className="mx-4 h-11 w-[calc(100%-2rem)] rounded-sm bg-[#f5c518] text-sm font-bold text-black uppercase hover:bg-[#e0b310]"
        >
          <a
            href={plan.href}
            target="_blank"
            rel="noopener noreferrer"
          >
            Eu quero!
          </a>
        </Button>
      </CardFooter>
    </Card>
  )
}

export function PlansSection() {
  return (
    <section className="flex flex-1 flex-col bg-background text-foreground dark:bg-black dark:text-white">
      <div className="relative overflow-hidden">
        <img
          src={heroBanner}
          alt=""
          aria-hidden
          className="absolute inset-0 size-full object-cover object-center grayscale"
        />
        <div className="absolute inset-0 bg-black/75 dark:bg-black/80" />
        <div className="relative mx-auto max-w-4xl px-4 py-10 text-center sm:py-14">
          <h1 className="text-xl font-bold uppercase tracking-wide sm:text-2xl md:text-3xl">
            Atenção: valor promocional
          </h1>
          <p className="mt-3 text-sm text-white/90 sm:text-base">
            Para os 20 primeiros alunos na Consultoria Online no mês de Maio!
          </p>
        </div>
      </div>

      <div className="mx-auto grid w-full max-w-6xl gap-4 px-4 py-8 sm:grid-cols-2 sm:gap-5 lg:grid-cols-4 lg:py-10">
        {plans.map((plan) => (
          <PlanCard key={plan.id} plan={plan} />
        ))}
      </div>
    </section>
  )
}
