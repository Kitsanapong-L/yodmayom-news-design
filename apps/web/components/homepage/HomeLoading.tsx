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
      reduceMotion ? 0 : 200
    )

    return () => {
      window.clearTimeout(timer)
      restoreScroll()
    }
  }, [reduceMotion])

  return (
    <>
      <div aria-hidden={loading || undefined} inert={loading || undefined}>
        {children}
      </div>
      {loading && <Logoloading />}
    </>
  )
}
