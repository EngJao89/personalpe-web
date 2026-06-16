import logo from '@/assets/edinan-junior-logo.png'
import { Button } from '@/components/ui/button'
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu'
import { Separator } from '@/components/ui/separator'
import { cn } from '@/lib/utils'

const navItems = [
  { label: 'Início', href: '#' },
  { label: 'Sobre', href: '#sobre' },
  { label: 'Serviços', href: '#servicos' },
  { label: 'Contato', href: '#contato' },
] as const

export function Header() {
  return (
    <header className="sticky top-0 z-50 bg-black text-white">
      <div className="mx-auto flex h-20 max-w-6xl items-center gap-8 px-4 sm:px-6">
        <a href="#" className="shrink-0" aria-label="Edinan Junior Healthy Performance">
          <img
            src={logo}
            alt="Edinan Junior Healthy Performance"
            className="h-14 w-auto sm:h-16"
          />
        </a>

        <NavigationMenu viewport={false} className="hidden flex-1 justify-center md:flex">
          <NavigationMenuList className="gap-1">
            {navItems.map((item) => (
              <NavigationMenuItem key={item.href}>
                <NavigationMenuLink
                  asChild
                  className={cn(
                    navigationMenuTriggerStyle(),
                    'bg-transparent text-white/80 hover:bg-white/10 hover:text-white focus:bg-white/10 focus:text-white data-active:bg-white/10 data-active:text-white',
                  )}
                >
                  <a href={item.href}>{item.label}</a>
                </NavigationMenuLink>
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>

        <div className="ml-auto flex items-center gap-3">
          <Button
            size="sm"
            className="bg-[#c026d3] text-white hover:bg-[#a21caf] dark:bg-[#c026d3] dark:hover:bg-[#a21caf]"
          >
            Agendar
          </Button>
        </div>
      </div>

      <Separator className="bg-white/10" />
    </header>
  )
}
