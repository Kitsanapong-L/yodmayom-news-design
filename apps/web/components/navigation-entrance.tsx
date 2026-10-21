"use client"

import { useEffect, useState } from "react"
import { usePathname } from "next/navigation"

import AnimatedContent from "./AnimatedContent"

export function NavigationEntrance({
  children,
}: {
  children: React.ReactNode
}) {
  const pathname = usePathname()
  const [isReady, setIsReady] = useState(false)

  useEffect(() => {
    const syncWithLoading = () => {
      setIsReady(!document.querySelector("[data-site-loading]"))
    }

    syncWithLoading()

    const observer = new MutationObserver(syncWithLoading)

    observer.observe(document.body, {
      childList: true,
      subtree: true,
    })

    return () => observer.disconnect()
  }, [])

  if (!isReady) return <div className="h-full" aria-hidden="true" />

  if (pathname !== "/") return <div className="h-full">{children}</div>

  return (
    <AnimatedContent
      trigger="mount"
      distance={18}
      reverse
      duration={0.55}
      ease="power3.out"
      initialOpacity={0}
      animateOpacity
      blur={6}
      className="h-full"
    >
      {children}
    </AnimatedContent>
  )
}
