import { Check } from 'lucide-react'

import phonesImage from '@/assets/3-fotos.png'

const includedItems = [
  'Treino personalizado',
  'Acesso ao aplicativo',
  'Contato direto pelo WhatsApp',
  'Resultado garantido',
] as const

export function IncludedSection() {
  return (
    <section className="bg-background text-foreground dark:bg-black dark:text-white">
      <div className="mx-auto grid max-w-6xl gap-8 px-4 py-10 md:grid-cols-2 md:items-center md:gap-10 md:px-6 md:py-14">
        <div className="flex justify-center md:justify-start">
          <img
            src={phonesImage}
            alt="Telas do aplicativo da consultoria online"
            className="w-full max-w-md object-contain md:max-w-none"
          />
        </div>

        <div className="space-y-6">
          <h2 className="text-xl font-bold uppercase leading-tight tracking-wide sm:text-2xl md:text-3xl">
            O que está incluso na consultoria online
          </h2>

          <ul className="space-y-4">
            {includedItems.map((item) => (
              <li key={item} className="flex items-center gap-3">
                <span className="flex size-8 shrink-0 items-center justify-center rounded-full bg-[#f5c518] text-black">
                  <Check className="size-5 stroke-3" />
                </span>
                <span className="text-base font-medium sm:text-lg">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
