"use client"

import { IconFolderCode } from "@tabler/icons-react"
import { ArrowUpRightIcon, RefreshCcwIcon } from "lucide-react"
import React from "react"
import DotGrid from "@/components/DotGrid"
import GradientWaves from "@/components/GradientWaves"
import HomeLoader from "@/components/HomeLoading"
import AnimatedContent from "@/components/AnimatedContent"

import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
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
        <div className="absolute inset-x-0 top-0 -bottom-12 z-0 [mask-image:linear-gradient(to_bottom,black_0%,black_52%,black_68%,transparent_100%)]">
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

      <section
        aria-labelledby="content-layout-title"
        className="mx-auto w-full max-w-6xl px-4 py-16 sm:px-6 lg:px-8"
      >
        <div className="mb-8 max-w-2xl">
          <p className="text-sm font-medium text-primary">Content layout</p>
          <h2
            id="content-layout-title"
            className="mt-2 text-2xl font-semibold tracking-tight sm:text-3xl"
          >
            Explore Yodmayom
          </h2>
          <p className="mt-2 text-sm text-muted-foreground sm:text-base">
            Card outlines for the main content of the website.
          </p>
        </div>

        <div className="grid auto-rows-[minmax(12rem,auto)] grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-12">
          <AnimatedContent
            className="lg:col-span-7 lg:row-span-2"
            distance={48}
            duration={0.7}
            initialOpacity={0}
            animateOpacity
            blur={6}
            threshold={0.15}
          >
            <Card className="h-full overflow-hidden">
              <CardHeader>
                <CardDescription>Featured content</CardDescription>
                <CardTitle>Main story or important highlight</CardTitle>
              </CardHeader>
              <CardContent className="flex h-full min-h-72 flex-col gap-4">
                <div className="flex-1 rounded-xl border border-dashed bg-muted/30" />
                <div className="space-y-2">
                  <div className="h-3 w-full max-w-md rounded-full bg-muted" />
                  <div className="h-3 w-3/5 rounded-full bg-muted" />
                </div>
              </CardContent>
            </Card>
          </AnimatedContent>

          <AnimatedContent
            className="lg:col-span-5"
            distance={48}
            duration={0.7}
            initialOpacity={0}
            animateOpacity
            blur={6}
            threshold={0.15}
            delay={0.08}
          >
            <Card className="h-full">
              <CardHeader>
                <CardDescription>Latest updates</CardDescription>
                <CardTitle>Recent news</CardTitle>
              </CardHeader>
              <CardContent className="grid grid-cols-[5rem_1fr] gap-4">
                <div className="aspect-square rounded-xl border border-dashed bg-muted/30" />
                <div className="space-y-3 pt-1">
                  <div className="h-3 w-full rounded-full bg-muted" />
                  <div className="h-3 w-4/5 rounded-full bg-muted" />
                  <div className="h-3 w-2/5 rounded-full bg-muted" />
                </div>
              </CardContent>
            </Card>
          </AnimatedContent>

          <AnimatedContent
            className="lg:col-span-5"
            distance={48}
            duration={0.7}
            initialOpacity={0}
            animateOpacity
            blur={6}
            threshold={0.15}
            delay={0.16}
          >
            <Card className="h-full">
              <CardHeader>
                <CardDescription>Announcement</CardDescription>
                <CardTitle>Important notice</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="h-3 w-full rounded-full bg-muted" />
                <div className="h-3 w-5/6 rounded-full bg-muted" />
                <div className="h-3 w-1/2 rounded-full bg-muted" />
              </CardContent>
            </Card>
          </AnimatedContent>

          <AnimatedContent
            className="md:col-span-2 lg:col-span-8"
            distance={48}
            duration={0.7}
            initialOpacity={0}
            animateOpacity
            blur={6}
            threshold={0.15}
            delay={0.08}
          >
            <Card className="h-full">
              <CardHeader>
                <CardDescription>Upcoming</CardDescription>
                <CardTitle>Events and activities</CardTitle>
              </CardHeader>
              <CardContent className="grid gap-3 sm:grid-cols-3">
                {[1, 2, 3].map((item) => (
                  <div
                    key={item}
                    className="h-24 rounded-xl border border-dashed bg-muted/30"
                  />
                ))}
              </CardContent>
            </Card>
          </AnimatedContent>

          <AnimatedContent
            className="md:col-span-2 lg:col-span-4"
            distance={48}
            duration={0.7}
            initialOpacity={0}
            animateOpacity
            blur={6}
            threshold={0.15}
            delay={0.16}
          >
            <Card className="h-full">
              <CardHeader>
                <CardDescription>Navigation</CardDescription>
                <CardTitle>Quick links</CardTitle>
              </CardHeader>
              <CardContent className="grid grid-cols-2 gap-3">
                {[1, 2, 3, 4].map((item) => (
                  <div
                    key={item}
                    className="h-12 rounded-xl border border-dashed bg-muted/30"
                  />
                ))}
              </CardContent>
            </Card>
          </AnimatedContent>
        </div>
      </section>

      <footer className="relative mx-3 mt-10 max-w-6xl overflow-hidden rounded-2xl border bg-card/80 shadow-2xl backdrop-blur-xl sm:mx-6 sm:rounded-3xl lg:mx-auto">
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-32 [mask-image:linear-gradient(to_bottom,transparent,black_40%)] opacity-45 sm:h-44 dark:opacity-70">
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
