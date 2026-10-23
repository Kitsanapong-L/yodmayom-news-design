"use client"

import {
  useEffect,
  useRef,
  type CSSProperties,
  type HTMLAttributes,
  type ReactNode,
} from "react"

export interface AnimatedContentProps extends Omit<
  HTMLAttributes<HTMLDivElement>,
  "onAnimationStart"
> {
  children?: ReactNode
  distance?: number
  direction?: "vertical" | "horizontal"
  reverse?: boolean
  duration?: number
  ease?: string
  initialOpacity?: number
  animateOpacity?: boolean
  scale?: number
  blur?: number
  rotate?: number
  tilt?: number
  threshold?: number
  delay?: number
  trigger?: "scroll" | "mount"
  once?: boolean
  onStart?: () => void
  onComplete?: () => void
  className?: string
  style?: CSSProperties
}

const EASING = "cubic-bezier(0.22, 1, 0.36, 1)"

export default function AnimatedContent({
  children,
  distance = 100,
  direction = "vertical",
  reverse = false,
  duration = 0.8,
  ease = EASING,
  initialOpacity = 0,
  animateOpacity = true,
  scale = 1,
  blur = 0,
  rotate = 0,
  tilt = 0,
  threshold = 0.1,
  delay = 0,
  trigger = "scroll",
  once = true,
  onStart,
  onComplete,
  className = "",
  style,
  ...props
}: AnimatedContentProps) {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const element = ref.current
    if (!element) return

    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches
    if (reduceMotion) {
      onComplete?.()
      return
    }

    const sign = reverse ? -1 : 1
    const offset = distance * sign
    const translate =
      direction === "horizontal"
        ? `translate3d(${offset}px, 0, 0)`
        : `translate3d(0, ${offset}px, 0)`
    const rotateTransform = rotate ? ` rotate(${rotate * sign}deg)` : ""
    const tiltTransform = tilt
      ? direction === "horizontal"
        ? ` rotateY(${-tilt * sign}deg)`
        : ` rotateX(${tilt * sign}deg)`
      : ""
    const animationEasing = ease.includes("power") ? EASING : ease

    let animation: Animation | undefined
    let hasPlayed = false

    const play = () => {
      if (hasPlayed && once) return
      hasPlayed = true
      animation?.cancel()
      onStart?.()
      animation = element.animate(
        [
          {
            opacity: animateOpacity ? initialOpacity : 1,
            filter: blur ? `blur(${blur}px)` : "none",
            transform: `${translate} scale(${scale})${rotateTransform}${tiltTransform}`,
          },
          {
            opacity: 1,
            filter: "none",
            transform: "translate3d(0, 0, 0) scale(1)",
          },
        ],
        {
          duration: Math.max(duration, 0) * 1000,
          delay: Math.max(delay, 0) * 1000,
          easing: animationEasing,
          fill: "both",
        }
      )
      animation.onfinish = () => {
        animation?.cancel()
        onComplete?.()
      }
    }

    if (trigger === "mount" || !("IntersectionObserver" in window)) {
      play()
      return () => animation?.cancel()
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry?.isIntersecting) return
        play()
        if (once) observer.disconnect()
      },
      { threshold: Math.min(Math.max(threshold, 0), 1) }
    )
    observer.observe(element)

    return () => {
      observer.disconnect()
      animation?.cancel()
    }
  }, [
    animateOpacity,
    blur,
    delay,
    direction,
    distance,
    duration,
    ease,
    initialOpacity,
    onComplete,
    onStart,
    once,
    reverse,
    rotate,
    scale,
    threshold,
    tilt,
    trigger,
  ])

  return (
    <div ref={ref} className={className} style={style} {...props}>
      {children}
    </div>
  )
}
