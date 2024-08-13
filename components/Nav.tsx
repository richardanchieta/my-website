'use client'
import { Button } from '@/components/ui/button'
import Image from 'next/image'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Github, Linkedin } from 'lucide-react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faEnvelope } from '@fortawesome/free-regular-svg-icons'
import { faWhatsapp, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { ModeToggle } from './ui/toggle-mode'
import useActiveSection from '@/hooks/useActiveSection'

type NavItem = {
  name: string
  href: string
}

export default function Nav() {
  const activeSection = useActiveSection([
    'about',
    'experience',
    'projects',
    'contact',
  ])

  const navItems: NavItem[] = [
    { name: 'Sobre', href: '#about' },
    { name: 'Experiência', href: '#experience' },
    { name: 'Projetos', href: '#projects' },
    { name: 'Contato', href: '#contact' },
  ]

  const getNavItemClasses = (href: string) => {
    const isActive = activeSection === href.substring(1)
    return {
      linkClass: isActive ? 'active' : '',
      indicatorClass: `nav-indicator mr-4 h-px w-8 bg-slate-600 transition-all ${
        isActive
          ? 'active w-16 bg-foreground h-2'
          : 'group-hover:w-16 group-hover:bg-foreground group-hover:h-px'
      }`,
      textClass: `nav-text text-xs font-bold uppercase tracking-widest ${
        isActive
          ? 'text-foreground'
          : 'text-slate-500 group-hover:text-foreground'
      }`,
    }
  }

  return (
    <header className="lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-1/2 lg:flex-col lg:justify-between lg:py-24 flex flex-col lg:gap-4">
      <div className="flex flex-col gap-4 lg:pr-24 mt-6 lg:mt-0">
        <Image 
          width={1080}
          height={120}
          src="/main_cover.jpg"
          alt="Imagem de um jogo"
          style={{objectFit: "cover", top: 0, left: 0}}
          className="max-h-20 opacity-50 absolute lg:relative"
        />
        <h1 className="text-[42px] font-bold lg:text-start">
          Richard Anchieta
        </h1>
        <h2 className="text-xl lg:text-start">
          Arquiteto&nbsp;de&nbsp;Soluções |
          Desenvolvedor&nbsp;Sênior&nbsp;Full&nbsp;Stack
        </h2>
        <p className="text-lg lg:text-start text-muted-foreground">
          Sou um Arquiteto de Soluções com uma abordagem &quot;mão na massa&quot; e forte
          background em desenvolvimento de software.
        </p>
        <p className="text-lg lg:text-start text-muted-foreground">
          Minha experiência combina a visão estratégica necessária para criar
          arquiteturas robustas com a habilidade prática de implementar essas
          soluções, garantindo que elas atendam às necessidades de negócio e
          superem os desafios técnicos.
        </p>
      </div>
      <nav className="lg:flex hidden">
        <ul className="flex flex-col w-max text-start gap-6 uppercase text-xs font-medium">
          {navItems.map((item: NavItem) => {
            const { linkClass, indicatorClass, textClass } = getNavItemClasses(
              item.href
            )
            return (
              <li key={item.name} className="group">
                <a href={item.href} className={`py-3 ${linkClass}`}>
                  <span className={indicatorClass}></span>
                  <span className={textClass}>{item.name}</span>
                </a>
              </li>
            )
          })}
        </ul>
      </nav>
      <ul className="flex flex-row gap-6 mt-6 lg:mt-0">
        <Button variant="outline" size="icon">
          <a
            href="https://linkedin.com/in/richardanchieta"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Linkedin className="h-[1.2rem] w-[1.2rem]" />
          </a>
        </Button>
        <Button variant="outline" size="icon">
          <a
            href="mailto:Richard Anchieta<dev@richardanchieta.com>?subject=Contato&body=Ol%C3%A1%2C%20vim%20atrav%C3%A9s%20do%20seu%20site%20pessoal"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faEnvelope} className="h-[1.2rem] w-[1.2rem]"/>
          </a>
        </Button>
        <Button variant="outline" size="icon">
          <a
            href="https://wa.me/5511917294519?text=Ol%C3%A1%2C%20vim%20atrav%C3%A9s%20do%20seu%20site%20pessoal."
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faWhatsapp} className="h-[1.2rem] w-[1.2rem]"/>
          </a>
        </Button>
        <ModeToggle />
      </ul>
    </header>
  )
}
