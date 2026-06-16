import { useEffect, useState } from 'react'
import { Menu, X } from 'lucide-react'

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
import { ThemeToggle } from '@/components/theme-toggle'
import { cn } from '@/lib/utils'

const navItems = [
  { label: 'Sobre', href: '#sobre' },
  { label: 'Serviços', href: '#servicos' },
  { label: 'Contato', href: '#contato' },
] as const

const navLinkClassName = cn(
  navigationMenuTriggerStyle(),
  'w-full justify-start bg-transparent text-white/80 hover:bg-white/10 hover:text-white focus:bg-white/10 focus:text-white data-active:bg-white/10 data-active:text-white md:w-max md:justify-center',
)

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    document.body.style.overflow = mobileMenuOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [mobileMenuOpen])

  const closeMobileMenu = () => setMobileMenuOpen(false)

  return (
    <header className="sticky top-0 z-50 bg-black text-white">
      <div className="mx-auto flex h-16 max-w-6xl items-center gap-3 px-4 md:h-20 md:gap-8 md:px-6">
        <a
          href="#"
          className="min-w-0 shrink"
          aria-label="Edinan Junior Healthy Performance"
          onClick={closeMobileMenu}
        >
          <img
            src={logo}
            alt="Edinan Junior Healthy Performance"
            className="h-10 w-auto max-w-[min(100%,11rem)] object-contain object-left md:h-16 md:max-w-none"
          />
        </a>

        <NavigationMenu
          viewport={false}
          className="hidden max-w-none flex-1 justify-center md:flex"
        >
          <NavigationMenuList className="gap-1">
            {navItems.map((item) => (
              <NavigationMenuItem key={item.href}>
                <NavigationMenuLink asChild className={navLinkClassName}>
                  <a href={item.href}>{item.label}</a>
                </NavigationMenuLink>
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>

        <div className="ml-auto flex items-center gap-1 md:gap-2">
          <ThemeToggle className="relative text-white hover:bg-white/10 hover:text-white" />

          <Button
            size="sm"
            className="hidden bg-[#c026d3] text-white hover:bg-[#a21caf] md:inline-flex dark:bg-[#c026d3] dark:hover:bg-[#a21caf]"
          >
            Agendar
          </Button>

          <Button
            type="button"
            variant="ghost"
            size="icon"
            className="text-white hover:bg-white/10 hover:text-white md:hidden"
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-navigation"
            aria-label={mobileMenuOpen ? 'Fechar menu' : 'Abrir menu'}
            onClick={() => setMobileMenuOpen((open) => !open)}
          >
            {mobileMenuOpen ? <X /> : <Menu />}
          </Button>
        </div>
      </div>

      {mobileMenuOpen ? (
        <nav
          id="mobile-navigation"
          className="border-t border-white/10 md:hidden"
          aria-label="Navegação principal"
        >
          <ul className="mx-auto flex max-w-6xl flex-col gap-1 px-4 py-3">
            {navItems.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className={navLinkClassName}
                  onClick={closeMobileMenu}
                >
                  {item.label}
                </a>
              </li>
            ))}
            <li className="pt-2">
              <Button
                className="h-10 w-full bg-[#c026d3] text-white hover:bg-[#a21caf] dark:bg-[#c026d3] dark:hover:bg-[#a21caf]"
                onClick={closeMobileMenu}
              >
                Agendar
              </Button>
            </li>
          </ul>
        </nav>
      ) : null}

      <Separator className="bg-white/10" />
    </header>
  )
}
