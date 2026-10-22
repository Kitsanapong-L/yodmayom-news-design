"use client"

import { useEffect, useState } from "react"
import { motion } from "motion/react"

import BlurText from "@/components/BlurText"
import GradientWaves from "@/components/GradientWaves"
import TextType from "@/components/TextType"

import { useHomeReady } from "./HomeLoading"

export default function HomeHero() {
  const isReady = useHomeReady()
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
    <section className="relative h-[calc(130svh-3.5rem)] overflow-hidden sm:h-[calc(130dvh-3.5rem)]">
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
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-[1] bg-[radial-gradient(circle_at_72%_68%,rgba(186,230,253,0.22),transparent_42%)] opacity-35 mix-blend-screen will-change-[opacity] motion-safe:animate-[pulse_8s_ease-in-out_infinite] md:hidden"
      />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 z-[1] h-64 sm:h-80">
        <div className="absolute inset-0 [mask-image:linear-gradient(to_bottom,transparent_0%,rgba(0,0,0,0.25)_35%,black_100%)] sm:backdrop-blur-[4px]" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent from-0% via-background/40 via-65% to-background to-100%" />
      </div>

      <div className="relative z-10 flex min-h-[calc(100svh-3.5rem)] items-center justify-center px-6 sm:min-h-[calc(100dvh-3.5rem)]">
        {isReady && (
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
                  className="min-h-[1em] text-[clamp(1.75rem,9vw,2.5rem)] leading-none sm:min-h-0 sm:text-[clamp(2rem,6vw,4.75rem)]"
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
        )}
      </div>
    </section>
  )
}
