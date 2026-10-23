"use client"

import { useEffect } from "react"
import type Lenis from "lenis"

const desktopPointerQuery =
  "(hover: hover) and (pointer: fine) and (prefers-reduced-motion: no-preference)"

export function SmoothScroll() {
  useEffect(() => {
    const mediaQuery = window.matchMedia(desktopPointerQuery)
    let lenis: Lenis | null = null
    let syncId = 0

    const syncLenis = async () => {
      const currentSyncId = ++syncId

      lenis?.destroy()
      lenis = null

      if (!mediaQuery.matches) return

      const { default: LenisClass } = await import("lenis")

      if (currentSyncId !== syncId || !mediaQuery.matches) return

      lenis = new LenisClass({
        autoRaf: true,
        smoothWheel: true,
        lerp: 0.1,
        wheelMultiplier: 0.9,
        anchors: true,
        stopInertiaOnNavigate: true,
      })
    }

    syncLenis()
    mediaQuery.addEventListener("change", syncLenis)

    return () => {
      syncId++
      mediaQuery.removeEventListener("change", syncLenis)
      lenis?.destroy()
    }
  }, [])

  return null
}
