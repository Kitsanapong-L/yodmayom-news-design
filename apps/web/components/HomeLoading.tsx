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
    const timer = window.setTimeout(() => {
      setLoading(false)
    }, reduceMotion ? 0 : 650)

    return () => window.clearTimeout(timer)
  }, [reduceMotion])

  if (loading) {
    return <Logoloading />
  }

  return <>{children}</>
}
