'use client'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { MoveRight } from 'lucide-react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDownload, faFile} from '@fortawesome/free-solid-svg-icons'

const jobPositions = [
  {
    timeline: 'Jul 2023 — o momento',
    currentPosition: 'Arquiteto e Desenvolvedor',
    place: `Fatora\u00A0Tecnologia`,
    previousPositions: [''],
    description:
      "[em preparação]",
    skills: [
      'C#',
      'GO',
      'NextJS',
      'Microsserviços',
      'Mensageria',
      'MS SQL',
      'PostgreSQL'
    ],
  },
  {
    timeline: 'Jan 2023 — Out 2023',
    currentPosition: 'Arquiteto e Desenvolvedor',
    place: 'Tera.Biz',
    previousPositions: [],
    description:
      "[conteúdo em preparação]",
    skills: [],
  },
  {
    timeline: 'Fev 2021 — Dez 2022',
    currentPosition: 'Arquiteto e Desenvolvedor',
    place: 'Stemativa',
    previousPositions: [],
    description:
      "[conteúdo em preparação]",
    skills: [],
  },
  {
    timeline: 'Ago 2016 — Jan 2021',
    currentPosition: 'Arquiteto e Desenvolvedor',
    place: 'Prius\u00A0Technology',
    previousPositions: [],
    description:
      "[conteúdo em preparação]",
    skills: [],
  },
  {
    timeline: 'Mar 2012 — Ago 2016',
    currentPosition: 'Arquiteto e Desenvolvedor',
    place: 'Sambia\u00A0Tecnologia',
    previousPositions: [],
    description:
      "[conteúdo em preparação]",
    skills: [],
  },
  {
    timeline: 'Out 2011 — Abr 2012',
    currentPosition: 'Consultor de TI',
    place: 'IT\u00A0Lab',
    previousPositions: [],
    description:
      "[conteúdo em preparação]",
    skills: [],
  },
  {
    timeline: 'Out 2006 — Abr 2011',
    currentPosition: 'Arquiteto de Software',
    place: 'JBS\u00A0S.A.',
    previousPositions: [],
    description:
      "[conteúdo em preparação]",
    skills: [],
  }
]

export default function ExpCard() {
  return (
    <section id="experience" className="scroll-mt-16 lg:mt-16">
      <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-background/0 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
        <h2 className="text-sm font-bold uppercase tracking-widest lg:sr-only">
          Experiência
        </h2>
      </div>
      <>
        {jobPositions.map((job, index) => (
          <Card
            key={index}
            className="lg:p-6 mb-8 flex flex-col lg:flex-row w-full min-h-fit gap-0 lg:gap-5 border-transparent hover:border dark:lg:hover:border-t-blue-900 dark:lg:hover:bg-slate-800/50 lg:hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:hover:drop-shadow-lg lg:hover:bg-slate-100/50 lg:hover:border-t-blue-200"
          >
            <CardHeader className="h-full w-full p-0 min-w-48">
              <CardTitle className="text-base text-slate-400 whitespace-nowrap">
                {job.timeline}
              </CardTitle>
            </CardHeader>
            <CardContent className="flex flex-col p-0 min-w-48">
              <p className="text-primary font-bold">
                <span className="text-nowrap">{job.currentPosition}</span> <span className="text-nowrap">• {job.place}</span>
              </p>
              {job.previousPositions.map((position, index) => (
                <p key={index} className="text-slate-400 text-sm font-bold">
                  {position}
                </p>
              ))}
              {/* <CardDescription className="py-3 text-muted-foreground">
                {job.description}
              </CardDescription> */}
              {/* <CardFooter className="p-0 flex flex-wrap gap-2">
                {job.skills.map((skill, index) => (
                  <Badge key={index}>{skill}</Badge>
                ))}
              </CardFooter> */}
            </CardContent>
          </Card>
        ))}
      </>
      <div className="lg:px-6 mt-12">
        <a
          className="inline-flex items-center font-medium leading-tight text-foreground group"
          href="/richard_anchieta_cv_site_2024.pdf"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faDownload} />
          &nbsp;
          <span className="border-b border-transparent pb-px transition hover:border-primary motion-reduce:transition-none">
            Baixar currículo em PDF <FontAwesomeIcon icon={faFile} />
          </span>
          
        </a>
      </div>
    </section>
  )
}
