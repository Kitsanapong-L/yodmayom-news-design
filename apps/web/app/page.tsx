"use client"

import { useEffect, useState } from "react"
import { motion } from "motion/react"

import DotGrid from "@/components/DotGrid"
import GradientWaves from "@/components/GradientWaves"
import HomeLoader from "@/components/HomeLoading"
import AnimatedContent from "@/components/AnimatedContent"
import BlurText from "@/components/BlurText"
import TextType from "@/components/TextType"

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

export function Home() {
  const [welcomeBlurComplete, setWelcomeBlurComplete] = useState(false)
  const [showWelcomeTyping, setShowWelcomeTyping] = useState(false)
  const [showYodmayom, setShowYodmayom] = useState(false)
  const [showYodmayomWebsite, setShowYodmayomWebsite] = useState(false)
  const [showTextType, setShowTextType] = useState(false)

  useEffect(() => {
    if (!welcomeBlurComplete) return

    const timer = window.setTimeout(() => {
      setShowWelcomeTyping(true)
    }, 1000)

    return () => window.clearTimeout(timer)
  }, [welcomeBlurComplete])

  return (
    <HomeLoader>
      <section className="relative h-[calc(130dvh-3.5rem)] overflow-hidden">
        <div className="absolute inset-x-0 top-0 -bottom-12 z-0 [mask-image:linear-gradient(to_bottom,black_0%,black_58%,rgba(0,0,0,0.92)_68%,rgba(0,0,0,0.55)_82%,rgba(0,0,0,0.18)_94%,transparent_100%)]">
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
        <div className="pointer-events-none absolute inset-x-0 bottom-0 z-[1] h-64 sm:h-80">
          <div className="absolute inset-0 [mask-image:linear-gradient(to_bottom,transparent_0%,rgba(0,0,0,0.25)_35%,black_100%)] backdrop-blur-[4px]" />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent from-0% via-background/40 via-65% to-background to-100%" />
        </div>

        <div className="relative z-10 flex min-h-[calc(100dvh-3.5rem)] items-center justify-center px-6">
          <motion.div
            layout="position"
            role="heading"
            aria-level={1}
            aria-label="Welcome to yodmayom. Use ideas to become innovations."
            className="flex w-full max-w-6xl flex-col items-start justify-center gap-[clamp(0.375rem,1vw,0.75rem)] font-semibold tracking-[-0.04em] text-slate-100 drop-shadow-[0_4px_24px_rgba(0,0,0,0.55)] dark:text-white"
            transition={{
              layout: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
            }}
          >
            <motion.div
              layout="position"
              className="flex flex-col items-start justify-start gap-1 sm:flex-row sm:items-baseline sm:gap-[clamp(0.5rem,1.5vw,1.25rem)] sm:whitespace-nowrap"
              transition={{
                layout: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
              }}
            >
              {showWelcomeTyping ? (
                <TextType
                  as="span"
                  text={[
                    "Welcome to",
                    "ยินดีต้อนรับสู่",
                    "ようこそ",
                    "欢迎来到",
                  ]}
                  typingSpeed={100}
                  pauseDuration={2000}
                  deletingSpeed={100}
                  deleteMode="backspace"
                  typeEffect="none"
                  mistakes={0}
                  cursorStyle="bar"
                  cursorGlide
                  showCursor={false}
                  cursorColor="currentColor"
                  prefixColor="currentColor"
                  cursorBlinkDuration={0.5}
                  cursorCharacter="_"
                  prefix=""
                  startFromFullText
                  className="text-[clamp(1.75rem,9vw,2.5rem)] leading-none sm:text-[clamp(2rem,6vw,4.75rem)]"
                />
              ) : (
                <BlurText
                  text="Welcome to"
                  effect="blur"
                  animateBy="words"
                  direction="bottom"
                  staggerFrom="center"
                  trigger="load"
                  delay={200}
                  stepDuration={0.35}
                  blur={10}
                  distance={50}
                  onAnimationComplete={() => {
                    setWelcomeBlurComplete(true)
                    setShowYodmayom(true)
                  }}
                  loop={false}
                  loopDelay={2}
                  focusOnHover={false}
                  className="justify-start text-[clamp(1.75rem,9vw,2.5rem)] leading-none sm:text-[clamp(2rem,6vw,4.75rem)]"
                />
              )}

              {showYodmayom && (
                <motion.div
                  layout="position"
                  transition={{
                    layout: {
                      type: "spring",
                      stiffness: 220,
                      damping: 26,
                      mass: 0.75,
                    },
                  }}
                >
                  <BlurText
                    text="yodmayom"
                    effect="blur"
                    animateBy="words"
                    direction="left"
                    staggerFrom="center"
                    trigger="load"
                    delay={200}
                    stepDuration={0.35}
                    blur={10}
                    distance={50}
                    onAnimationComplete={() => setShowYodmayomWebsite(true)}
                    loop={false}
                    loopDelay={2}
                    focusOnHover={false}
                    className="justify-start text-[clamp(1.75rem,9vw,2.5rem)] leading-none sm:text-[clamp(2rem,6vw,4.75rem)]"
                  />
                </motion.div>
              )}
            </motion.div>

            {showYodmayomWebsite && (
              <>
                <BlurText
                  text="Use ideas to become innovations"
                  effect="blur"
                  animateBy="words"
                  direction="bottom"
                  staggerFrom="center"
                  trigger="load"
                  delay={0}
                  stepDuration={0.35}
                  blur={10}
                  distance={50}
                  onAnimationComplete={() => setShowTextType(true)}
                  loop={false}
                  loopDelay={2}
                  focusOnHover={false}
                  className="justify-start text-left text-[clamp(1.25rem,6vw,1.75rem)] leading-tight sm:text-[clamp(1.5rem,4vw,3.25rem)]"
                />

                {showTextType && (
                  <TextType
                    text={[
                      "We Build Websites.",
                      "We Develop Applications.",
                      "We Create Intelligent Solutions.",
                      "We Innovate with AI.",
                    ]}
                    typingSpeed={75}
                    pauseDuration={1500}
                    deletingSpeed={50}
                    deleteMode="backspace"
                    typeEffect="none"
                    mistakes={0}
                    cursorStyle="underscore"
                    cursorGlide
                    showCursor
                    cursorColor="currentColor"
                    prefixColor="currentColor"
                    cursorBlinkDuration={0.5}
                    cursorCharacter="_"
                    prefix=""
                    className="text-sm font-normal tracking-normal sm:text-base"
                  />
                )}
              </>
            )}
          </motion.div>
        </div>
      </section>

      <section
        aria-labelledby="content-layout-title"
        className="mx-auto w-full max-w-6xl px-4 py-16 sm:px-6 lg:px-8"
      >
        <div className="mb-8 max-w-2xl">
          <p className="text-sm font-medium text-primary">
            Content layout(test)
          </p>
          <h2
            id="content-layout-title"
            className="mt-2 text-2xl font-semibold tracking-tight sm:text-3xl"
          >
            Yodmayom
          </h2>
          <p className="mt-2 text-sm text-muted-foreground sm:text-base">
            What do we work on?
          </p>
        </div>

        <div className="grid auto-rows-[minmax(12rem,auto)] grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-12">
          <AnimatedContent
            className="md:col-span-2 lg:col-span-7 lg:row-span-2"
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
                <CardTitle>Main content highlights (test)</CardTitle>
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
                <CardTitle>Recent news (test)</CardTitle>
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
                <CardTitle>Important notice (test)</CardTitle>
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
                <CardTitle>coming soon</CardTitle>
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
                <CardDescription>Do you want to see more?</CardDescription>
                <CardTitle>You can see more at here (test)</CardTitle>
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
