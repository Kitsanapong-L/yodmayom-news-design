"use client"

import { createContext, useContext, useEffect, useState } from "react"
import { useReducedMotion } from "motion/react"

import Logoloading from "./LogoLoading"

const HomeReadyContext = createContext(true)

export function useHomeReady() {
  return useContext(HomeReadyContext)
}

export default function HomeLoader({
  children,
}: {
  children: React.ReactNode
}) {
  const [loading, setLoading] = useState(true)
  const reduceMotion = useReducedMotion()

  useEffect(() => {
    const previousOverflow = document.body.style.overflow
    let restored = false

    const restoreScroll = () => {
      if (restored) return
      document.body.style.overflow = previousOverflow
      restored = true
    }

    document.body.style.overflow = "hidden"

    const timer = window.setTimeout(
      () => {
        restoreScroll()
        setLoading(false)
      },
      reduceMotion ? 0 : 350
    )

    return () => {
      window.clearTimeout(timer)
      restoreScroll()
    }
  }, [reduceMotion])

  return (
    <HomeReadyContext.Provider value={!loading}>
      <div aria-hidden={loading || undefined} inert={loading || undefined}>
        {children}
      </div>
      {loading && <Logoloading />}
    </HomeReadyContext.Provider>
  )
}
