"use client"

import { useEffect, useState } from "react"
import { useReducedMotion } from "motion/react"

import Logoloading from "./LogoLoading"

export default function HomeLoader({
  children,
}: {
  children: React.ReactNode
}) {
  const [loading, setLoading] = useState(true)
  const [leaving, setLeaving] = useState(false)
  const reduceMotion = useReducedMotion()

  useEffect(() => {
    const previousOverflow = document.body.style.overflow
    let restored = false
    let finishing = false
    let exitTimer = 0
    let heroReady = Boolean(reduceMotion)
    let minimumElapsed = Boolean(reduceMotion)

    const restoreScroll = () => {
      if (restored) return
      document.body.style.overflow = previousOverflow
      restored = true
    }

    document.body.style.overflow = "hidden"

    const tryFinishLoading = () => {
      if (finishing || !heroReady || !minimumElapsed) return
      finishing = true
      restoreScroll()

      if (reduceMotion) {
        setLoading(false)
        return
      }

      setLeaving(true)
      exitTimer = window.setTimeout(() => setLoading(false), 220)
    }

    const handleHeroReady = () => {
      heroReady = true
      tryFinishLoading()
    }

    window.addEventListener("yodmayom:hero-ready", handleHeroReady)
    const minimumTimer = window.setTimeout(() => {
      minimumElapsed = true
      tryFinishLoading()
    }, reduceMotion ? 0 : 350)
    const fallbackTimer = window.setTimeout(() => {
      heroReady = true
      minimumElapsed = true
      tryFinishLoading()
    }, reduceMotion ? 0 : 1200)

    return () => {
      window.removeEventListener("yodmayom:hero-ready", handleHeroReady)
      window.clearTimeout(minimumTimer)
      window.clearTimeout(fallbackTimer)
      window.clearTimeout(exitTimer)
      restoreScroll()
    }
  }, [reduceMotion])

  return (
    <>
      <div aria-hidden={loading || undefined} inert={loading || undefined}>
        {children}
      </div>
      {loading && <Logoloading leaving={leaving} />}
    </>
  )
}
