"use client"

import { IconFolderCode } from "@tabler/icons-react"
import { ArrowUpRightIcon, RefreshCcwIcon } from "lucide-react"
import React from "react"
import DotGrid from "@/components/DotGrid"
import GradientWaves from "@/components/GradientWaves"
import HomeLoader from "@/components/HomeLoading"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import {
  Empty,
  EmptyContent,
  EmptyHeader,
  EmptyMedia,
  EmptyTitle,
  EmptyDescription,
} from "@/components/ui/empty"

export function Home() {
  return (
    <HomeLoader>
      <section className="relative h-[calc(130dvh-3.5rem)] overflow-hidden">
        <div className="absolute inset-x-0 -bottom-12 top-0 z-0 [mask-image:linear-gradient(to_bottom,black_0%,black_52%,black_68%,transparent_100%)]">
          <GradientWaves
            horizonColor="#1e3a8a"
            waveColor="#38bdf8"
            crestColor="#e0f2fe"
            speed={0.5}
            amplitude={1.8}
            relief={1}
            lightAngle={150}
            mouseInteraction
            swellOnClick
            lightMode={false}
            waveScale={0.9}
            waveRatio={0.9}
            swell={25}
            turbulence={28}
            tilt={60}
            zoom={1.4}
            height={5.5}
            fogDepth={15}
            sheen={0}
            brightness={1}
            opacity={1}
            grain={0.2}
            quality="medium"
            intro
            parallaxStrength={0.5}
            mouseStrength={0.6}
            paused={false}
          />
        </div>
        <div className="pointer-events-none absolute inset-x-0 bottom-0 z-[1] h-40 bg-gradient-to-b from-transparent via-background/70 to-background backdrop-blur-[2px] sm:h-56" />

        <div className="relative z-10 flex min-h-[calc(100dvh-3.5rem)] items-center justify-center px-6">
          <Card className="w-full max-w-sm bg-card/85 shadow-2xl backdrop-blur-md">
            <Empty className="border-0 bg-transparent">
              <EmptyHeader>
                <EmptyMedia variant="icon">
                  <IconFolderCode />
                </EmptyMedia>
                <EmptyTitle>กำลังอยู่ในช่วงพัฒนา</EmptyTitle>
                <EmptyDescription>
                  เรากำลังปรับปรุงและพัฒนา Website
                  นี้เพื่อประสิทธิภาพที่ดีสุดให้กับท่าน
                </EmptyDescription>
              </EmptyHeader>
              <EmptyContent className="flex-row justify-center gap-2">
                <Button
                  nativeButton={false}
                  render={
                    <a href="https://www.instagram.com/_ksnp.o/">
                      ติดต่อผู้ดูแล
                      <ArrowUpRightIcon />
                    </a>
                  }
                />
                <Button
                  variant="outline"
                  onClick={() => window.location.reload()}
                >
                  <RefreshCcwIcon data-icon="inline-start" />
                  รีโหลด
                </Button>
              </EmptyContent>
            </Empty>
          </Card>
        </div>
      </section>

      <footer className="relative mx-3 mt-10 max-w-6xl overflow-hidden rounded-2xl border bg-card/80 shadow-2xl backdrop-blur-xl sm:mx-6 sm:rounded-3xl lg:mx-auto">
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-32 opacity-45 [mask-image:linear-gradient(to_bottom,transparent,black_40%)] sm:h-44 dark:opacity-70">
          <DotGrid
            dotSize={3}
            gap={10}
            baseColor="#8b7ca3"
            activeColor="#c4b5fd"
            proximity={100}
            strength={0.7}
            glow={0.25}
            opacity={0.65}
            fade={0.35}
            mouseInteraction
            clickShock={false}
          />
        </div>

        <div className="relative z-10 flex min-h-48 flex-col gap-1 px-5 py-6 text-sm text-muted-foreground sm:min-h-64 sm:flex-row sm:items-start sm:justify-between sm:px-10 sm:py-8 lg:px-12">
          <p>© 2026 Yodmayom. All rights reserved.</p>
          <p className="sm:text-right">Build by Kitsanapong Laporm</p>
        </div>
      </footer>
    </HomeLoader>
  )
}

export default Home
