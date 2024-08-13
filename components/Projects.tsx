'use client'
import Image from 'next/image'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
} from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { MoveUpRight } from 'lucide-react'

const jobProjects = [
  {
    imagePath: '/project_antifraud.jpg',
    title: 'Plataforma Antifraude para Mercado Financeiro',
    description:
      'Desafios: Resiliência, segurança, conformidade com instituições bancárias, regras de distribuição para análises autônomas e análises com interação humana (distribuição para mais de 700 analistas), aprendizagem de máquina com visão computacional.',
    skills: [
      'C#',
      'GO',
      'PostgreSQL',
      'API Gateway',
      'Mensageria',
      'Autenticação e Autorização',
      'Orquestração',
      'Microsserviços',
    ],
    link: '/projects/antifraud',
  },
  {
    imagePath: '/project_settlement.jpg',
    title: 'Sistema de Integração e Conciliação de Liquidação Cambial',
    description:
      'Desafios: Engenharia reversa de código legado em Delphi, orquestração de serviços, observabilidade, automação de processos e conversão de regras em linguagem descritiva e não estruturada (arquivos PDF) para linguagem estruturada legível por humanos e máquinas.',
    skills: [
      'C#',
      '.NET Core',
      'AspNet Core',
      'MS SQL Server',
      'Entity Framework',
      'Delphi',
      'Object Pascal',
    ],
    link: '/projects/settlement',
  },
  {
    imagePath: '/project_forgery.jpg',
    title: 'Detecção de Manipulação em Fotografias (POC)',
    description: 'Desafios: [conteúdo em preparação]',
    skills: [
      'Python',
      'Flask',
      'PyTorch',
      'TensorFlow',
      'Pandas',
      'SciKit Learn',
      'OpenCV',
      'CNN - Convolutional Neural Network',
      'SVN - Support Vector Machine',
    ],
    link: '/projects/forgery',
  },
  {
    imagePath: '/project_assets.jpg',
    title: 'Digitalização de Ativos na Blockchain (MVP)',
    description: 'Desafios: [conteúdo em preparação]',
    skills: [
      'Web3',
      'Blockchain',
      'SmartContract',
      'Ethereum',
      'Gnosis',
      'Solidity',
      'Truffle',
      'Ganache',
      'NextJS',
      'GO',
      'Gateway de Pagamentos',
      'Orquestrador',
      'Workflow',
      'Durable Execution',
    ],
    link: '/projects/assets',
  },
  {
    imagePath: '/project_game.jpg',
    title: 'Plataforma de Jogos Educativos',
    description:
      'Desafios: Sincronização do jogo entre os múltiplos jogadores em tempo real; embarcação no Raspberry PI; compilação multiarquitetura (amd64 e arm64); projeto eimplantação dos detalhes ligados ao hardware (hub de rádio frequência, interpretadorde sinais RF, WiFi Host Spot personalizado); empacotamento e assinatura digital dosgames para instalação e distribuição',
    skills: [
      'React',
      'NextJS',
      'PixiJS',
      'GO',
      'Gin',
      'WebSockets',
      'NATS',
      'REDIS',
      'PostgreSQL',
      'Raspberry PI',
      'RF - Radio Frequency',
      'WiFi Hot Spot',
    ],
    link: '/projects/game',
  },
  {
    imagePath: '/project_football.jpg',
    title: 'Aplicativo e Rede Social de Torcedores de Futebol',
    description:
      'Desafios: Placar em tempo real, integração com plataforma de captura dos jogos televisionados, arquitetura e implementação da rede social com agregações e cálculos na inserção para priorizar performance na leitura, build, implantação e atualização nas lojas de aplicativos (Apple e Google), modelagem “NoSQL” no REDIS.',
    skills: [
      'Ionic Framework',
      'Angular',
      'Android',
      'Java',
      'iOS',
      'Swift',
      'CSS',
      'C#',
      '.Net',
      'REDIS',
      'MS SQL Server',
      'SignalR',
      'WebSockets'
    ],
    link: '/projects/football',
  },
  {
    imagePath: '/project_muts.jpg',
    title:
      'Plataforma para Gestão de Moradia Urbana (Fundação Banco do Brasil)',
    description:
      'Desafios: Usabilidade, simplicidade e “amigabilidade” para os usuários da comunidade, assistentes sociais e profissionais das ONGs associadas ao projeto; arquitetura e implementação de mecanismos de geração e captura de questionáriospara censo demográfico; agregação e geração de dashboard; modelagem para análisede dados por ferramentas externas de BI.',
    skills: ['Angular', 'TypeScript', 'C#', '.Net Core', 'MongoDB'],
    link: '/projects/muts',
  },
  {
    imagePath: '/project_brand.jpg',
    title: 'Solução para acompanhamento de marca em Redes Sociais',
    description:
      'Desafios: Criação de Web Crawler e Scraper, orquestração de serviços por mensageria, reconhecimento de marca textual por padrões e lógicas flexíveis, reconhecimento devisual por Visão Computacional, consolidação, estruturação e indexação dos dados deorigem (Google Search, Facebook e Twitter), modelagem e disponibilização de base dedados analítica, geração de dashboards com agregadores de negócio.',
    skills: [
      'C#',
      '.Net',
      'WebForms',
      'WindowsForms',
      'MS SQL Server',
      'MSMQ',
      'OpenCV',
      'HtmlAgilityPack'
    ],
    link: '/projects/brand',
  },
]

export default function Projects() {
  return (
    <section id="projects" className="scroll-mt-16 lg:mt-16">
      <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-background/0 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
        <h2 className="text-sm font-bold uppercase tracking-widest lg:sr-only">
          Projetos
        </h2>
      </div>
      <>
        {jobProjects.map((project, index) => (
          <div
            key={index}
            //href={project.link}
            //target="projects"
            //className="hover:cursor-pointer"
          >
            <Card className="group lg:p-6 mb-8 flex flex-col lg:flex-row w-full min-h-fit gap-0 lg:gap-5 border-transparent hover:border dark:lg:hover:border-t-blue-900 dark:lg:hover:bg-slate-800/50 lg:hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:hover:drop-shadow-lg lg:hover:bg-slate-100/50 lg:hover:border-t-blue-200">
              <CardHeader className="h-full w-full lg:w-1/3 mb-4 p-0">
                <Image
                  src={project.imagePath}
                  alt={`Screenshot of ${project.title}`}
                  width={640}
                  height={480}
                  priority
                  className="bg-[#141414] mt-2 border border-muted-foreground rounded-[0.5rem]"
                />
              </CardHeader>
              <CardContent className="flex flex-col p-0 w-full lg:w-2/3">
                <p className="text-primary font-bold">
                  {project.title}{' '}
                  {/* <MoveUpRight className="ml-1 inline-block h-5 w-5 shrink-0 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1 motion-reduce:transition-none" /> */}
                </p>
                <CardDescription className="py-3 text-muted-foreground">
                  {project.description}
                </CardDescription>
                <CardFooter className="p-0 flex flex-wrap gap-2">
                  {project.skills.map((skill, index) => (
                    <Badge key={index}>{skill}</Badge>
                  ))}
                </CardFooter>
              </CardContent>
            </Card>
          </div>
        ))}
      </>
    </section>
  )
}
