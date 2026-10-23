"use client"

import { useEffect, useState } from "react"
import { motion } from "motion/react"

import BlurText from "@/components/BlurText"
import TextType from "@/components/TextType"

export default function HomeHero() {
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
    <section className="relative h-[calc(130svh-3.5rem)] overflow-hidden bg-background sm:h-[calc(130dvh-3.5rem)]">
      <div className="flex min-h-[calc(100svh-3.5rem)] items-center justify-center px-6 sm:min-h-[calc(100dvh-3.5rem)]">
        <motion.div
          layout="position"
          role="heading"
          aria-level={1}
          aria-label="Welcome to yodmayom. Use ideas to become innovations."
          className="flex w-full max-w-6xl flex-col items-start justify-center gap-[clamp(0.375rem,1vw,0.75rem)] font-semibold tracking-[-0.04em] text-foreground"
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
                text={["Welcome to", "ยินดีต้อนรับสู่", "ようこそ", "欢迎来到"]}
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
                delay={100}
                stepDuration={0.18}
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
                  delay={100}
                  stepDuration={0.18}
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
                stepDuration={0.18}
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
  )
}
