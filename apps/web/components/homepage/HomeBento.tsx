"use client"

import {
  CalendarDays,
  Layers3,
  Megaphone,
  Newspaper,
  Sparkles,
  type LucideIcon,
} from "lucide-react"
import { motion } from "motion/react"

import AnimatedContent from "@/components/AnimatedContent"
import IntegrationBeam from "@/components/homepage/IntegrationBeam"
import {
  BentoCard as MagicBentoCard,
  BentoGrid,
} from "@/components/ui/bento-grid"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"

type BentoItem = {
  id: string
  eyebrow: string
  title: string
  description: string
  detail: string
  icon: LucideIcon
  gridClassName: string
  delay: number
  featured?: boolean
}

const bentoItems: BentoItem[] = [
  {
    id: "featured",
    eyebrow: "Featured content",
    title: "AI Deep Learning RNN (Long Short-Term Memory)",
    description: "AI Deep Learning ของ Yodmayom Team ของเรา",
    detail:
      "test",
    icon: Sparkles,
    gridClassName: "col-span-3 lg:col-span-2 lg:row-span-2",
    delay: 0,
    featured: true,
  },
  {
    id: "news",
    eyebrow: "Latest updates",
    title: "Recent news",
    description: "-",
    detail:
      "-",
    icon: Newspaper,
    gridClassName: "col-span-3 lg:col-span-1",
    delay: 0.08,
  },
  {
    id: "announcement",
    eyebrow: "Announcement",
    title: "Important notice",
    description: "-",
    detail:
      "-",
    icon: Megaphone,
    gridClassName: "col-span-3 lg:col-span-1",
    delay: 0.16,
  },
  {
    id: "upcoming",
    eyebrow: "Upcoming",
    title: "What is coming next",
    description: "-",
    detail:
      "-",
    icon: CalendarDays,
    gridClassName: "col-span-3 lg:col-span-2",
    delay: 0.08,
  },
  {
    id: "more",
    eyebrow: "Explore more",
    title: "Discover Yodmayom",
    description: "-",
    detail:
      "-",
    icon: Layers3,
    gridClassName: "col-span-3 lg:col-span-1",
    delay: 0.16,
  },
]

function BentoBackground({ item }: { item: BentoItem }) {
  const Icon = item.icon

  return (
    <div
      className={`pointer-events-none absolute inset-x-0 top-0 overflow-hidden border-b bg-muted/35 [mask-image:linear-gradient(to_bottom,black_55%,transparent)] ${
        item.featured ? "h-[78%]" : "h-[68%]"
      }`}
    >
      <div className="absolute -right-10 -bottom-14 size-40 rounded-full bg-foreground/5 blur-2xl transition-transform duration-500 group-hover:-translate-x-4 group-hover:-translate-y-4 group-hover:scale-125" />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,var(--border)_1px,transparent_1px),linear-gradient(to_bottom,var(--border)_1px,transparent_1px)] [mask-image:linear-gradient(to_bottom_right,black,transparent_75%)] bg-[size:2rem_2rem] opacity-25" />
      <Icon className="absolute top-1/2 left-1/2 size-12 -translate-x-1/2 -translate-y-1/2 text-foreground/35 transition duration-300 group-hover:scale-110 group-hover:rotate-3 group-hover:text-foreground/55" />
    </div>
  )
}

function ExpandedCard({ item }: { item: BentoItem }) {
  const Icon = item.icon

  return (
    <motion.article
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      className="h-full overflow-y-auto bg-background text-foreground"
      transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="mx-auto flex min-h-full w-full max-w-6xl flex-col px-6 pt-20 pb-10 sm:px-10 lg:px-12">
        <DialogHeader className="max-w-3xl gap-4">
          <div className="flex size-11 items-center justify-center rounded-xl border bg-muted">
            <Icon className="size-5" aria-hidden="true" />
          </div>
          <p className="text-sm font-medium texit-primary">{item.eyebrow}</p>
          <DialogTitle className="text-3xl leading-tight font-semibold tracking-tight sm:text-5xl">
            {item.title}
          </DialogTitle>
          <DialogDescription className="text-base leading-relaxed sm:text-lg">
            {item.description}
          </DialogDescription>
        </DialogHeader>

        <div className="relative mt-10 min-h-[42svh] overflow-hidden rounded-2xl border bg-muted/35">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,var(--border)_1px,transparent_1px),linear-gradient(to_bottom,var(--border)_1px,transparent_1px)] [mask-image:radial-gradient(circle_at_center,black,transparent_80%)] bg-[size:3rem_3rem] opacity-25" />
          <Icon className="absolute right-8 bottom-8 size-16 text-foreground/45 sm:size-24" />
        </div>

        <div className="mt-8 grid gap-3 border-t pt-6 sm:grid-cols-[10rem_1fr]">
          <p className="text-sm font-medium">About this content</p>
          <p className="max-w-2xl text-sm leading-7 text-muted-foreground sm:text-base">
            {item.detail}
          </p>
        </div>
      </div>
    </motion.article>
  )
}

function HomeBentoCard({ item }: { item: BentoItem }) {
  const Icon = item.icon

  return (
    <AnimatedContent
      className={`h-full ${item.gridClassName}`}
      distance={48}
      duration={0.7}
      initialOpacity={0}
      animateOpacity
      blur={6}
      threshold={0.15}
      delay={item.delay}
    >
      <Dialog>
        <DialogTrigger
          render={
            <motion.button
              type="button"
              className="block h-full w-full rounded-xl text-left outline-none focus-visible:ring-3 focus-visible:ring-ring/50"
              whileHover={{ y: -4 }}
              whileTap={{ scale: 0.99 }}
              transition={{ type: "spring", stiffness: 360, damping: 26 }}
            />
          }
        >
          <MagicBentoCard
            name={item.title}
            description={item.description}
            Icon={Icon}
            background={
              item.id === "featured" ? (
                <IntegrationBeam />
              ) : (
                <BentoBackground item={item} />
              )
            }
            className="h-full"
            cta="View details"
          />
        </DialogTrigger>

        <DialogContent
          className="inset-0 top-0 left-0 z-[60] h-dvh max-h-none w-screen max-w-none translate-x-0 translate-y-0 gap-0 rounded-none p-0 duration-300 sm:max-w-none data-open:zoom-in-100 data-closed:zoom-out-100"
          showCloseButton
        >
          <ExpandedCard item={item} />
        </DialogContent>
      </Dialog>
    </AnimatedContent>
  )
}

export default function HomeBento() {
  return (
    <section
      id="home-content"
      aria-labelledby="content-layout-title"
      className="mx-auto w-full max-w-6xl scroll-mt-20 px-4 py-16 sm:px-6 lg:px-8"
    >
      <div className="mb-8 max-w-2xl">
        <p className="text-sm font-medium text-primary">What we do</p>
        <h2
          id="content-layout-title"
          className="mt-2 text-2xl font-semibold tracking-tight sm:text-3xl"
        >
          Explore Yodmayom
        </h2>
        <p className="mt-2 text-sm text-muted-foreground sm:text-base">
          Select a card to see the full story.
        </p>
      </div>

      <BentoGrid className="auto-rows-[18rem]">
        {bentoItems.map((item) => (
          <HomeBentoCard key={item.id} item={item} />
        ))}
      </BentoGrid>
    </section>
  )
}
