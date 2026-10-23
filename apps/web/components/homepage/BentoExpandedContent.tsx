"use client"

import type { LucideIcon } from "lucide-react"
import { motion } from "motion/react"

import IntegrationBeam from "@/components/homepage/IntegrationBeam"
import {
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"

type ExpandedItem = {
  id: string
  eyebrow: string
  title: string
  description: string
  detail: string
  icon: LucideIcon
}

export default function BentoExpandedContent({
  item,
}: {
  item: ExpandedItem
}) {
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
          <p className="text-sm font-medium text-primary">{item.eyebrow}</p>
          <DialogTitle className="text-3xl leading-tight font-semibold tracking-tight sm:text-5xl">
            {item.title}
          </DialogTitle>
          <DialogDescription className="text-base leading-relaxed sm:text-lg">
            {item.description}
          </DialogDescription>
        </DialogHeader>

        <div className="group relative mt-10 min-h-[42svh] overflow-hidden rounded-2xl border bg-muted/35">
          {item.id === "featured" ? (
            <IntegrationBeam expanded />
          ) : (
            <>
              <div className="absolute inset-0 bg-[linear-gradient(to_right,var(--border)_1px,transparent_1px),linear-gradient(to_bottom,var(--border)_1px,transparent_1px)] [mask-image:radial-gradient(circle_at_center,black,transparent_80%)] bg-[size:3rem_3rem] opacity-25" />
              <Icon className="absolute right-8 bottom-8 size-16 text-foreground/45 sm:size-24" />
            </>
          )}
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
