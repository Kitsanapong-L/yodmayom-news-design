"use client"

import { useEffect, useRef, useState } from "react"
import dynamic from "next/dynamic"

import type { DotGridProps } from "@/components/DotGrid"

const DotGrid = dynamic(() => import("@/components/DotGrid"), { ssr: false })

export default function LazyDotGrid(props: DotGridProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const [shouldLoad, setShouldLoad] = useState(false)

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    if (!("IntersectionObserver" in window)) {
      setShouldLoad(true)
      return
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry?.isIntersecting) return
        setShouldLoad(true)
        observer.disconnect()
      },
      { rootMargin: "300px 0px" }
    )

    observer.observe(container)
    return () => observer.disconnect()
  }, [])

  return (
    <div ref={containerRef} className="h-full w-full" aria-hidden="true">
      {shouldLoad && <DotGrid {...props} />}
    </div>
  )
}
