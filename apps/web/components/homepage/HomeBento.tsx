"use client"

import dynamic from "next/dynamic"
import {
  CalendarDays,
  Layers3,
  Megaphone,
  Newspaper,
  Sparkles,
  type LucideIcon,
} from "lucide-react"
import { motion } from "motion/react"

import IntegrationBeam from "@/components/homepage/IntegrationBeam"
import {
  BentoCard as MagicBentoCard,
  BentoGrid,
} from "@/components/ui/bento-grid"
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"

const ExpandedCard = dynamic(
  () => import("@/components/homepage/BentoExpandedContent"),
  {
    ssr: false,
    loading: () => (
      <div className="flex h-full items-center justify-center bg-background text-sm text-muted-foreground">
        <DialogTitle className="sr-only">Loading details</DialogTitle>
        Loading details…
      </div>
    ),
  }
)

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
    title: "AI Model AquaGuard-1.0",
    description: "Deep Learning Model — LSTM Neural Network",
    detail:
      "โมเดลปัญญาประดิษฐ์ที่พัฒนาด้วย Deep Learning โดยใช้โครงข่ายประสาทเทียมแบบ Long Short-term memory เพื่อวิเคราะห์ข้อมูลคุณภาพน้ำ ค่าDO ค่าpH ค่าTemperature ตามช่วงเวลา พยากรณ์แนวโน้มการเปลี่ยนแปลงของคุณภาพน้ำ และประเมินความเสี่ยงที่อาจส่งผลต่อสุขภาพของปลา",
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

function HomeBentoCard({ item }: { item: BentoItem }) {
  const Icon = item.icon

  return (
    <motion.div
      className={`h-full ${item.gridClassName}`}
      initial={{ opacity: 0, y: 48, filter: "blur(6px)" }}
      whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{
        duration: 0.7,
        delay: item.delay,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      <Dialog>
        <DialogTrigger
          render={
            <motion.button
              type="button"
              className="block h-full w-full rounded-xl text-left outline-none focus-visible:ring-3 focus-visible:ring-ring/50"
              whileHover={{ y: -3 }}
              whileTap={{ scale: 0.995 }}
              transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
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
            hideIcon={item.featured}
          />
        </DialogTrigger>

        <DialogContent
          className="inset-0 top-0 left-0 z-[60] h-dvh max-h-none w-screen max-w-none translate-x-0 translate-y-0 gap-0 rounded-none p-0 duration-300 sm:max-w-none data-open:zoom-in-100 data-closed:zoom-out-100"
          showCloseButton
        >
          <ExpandedCard item={item} />
        </DialogContent>
      </Dialog>
    </motion.div>
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
