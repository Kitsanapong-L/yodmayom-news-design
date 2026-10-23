"use client"

import Image from "next/image"
import {
  forwardRef,
  useRef,
  type CSSProperties,
  type ReactNode,
  type RefObject,
} from "react"
import { useInView, useReducedMotion } from "motion/react"

import { AnimatedBeam } from "@/components/ui/animated-beam"

type NetworkNodeProps = {
  children?: ReactNode
  className?: string
  size?: "default" | "input" | "logo" | "output"
  style: CSSProperties
}

const NetworkNode = forwardRef<HTMLDivElement, NetworkNodeProps>(
  function NetworkNode(
    { children, className = "", size = "default", style },
    ref
  ) {
    return (
      <div
        ref={ref}
        style={style}
        className={`absolute z-10 flex -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border-2 border-border bg-white font-semibold text-black shadow-[0_0_20px_-10px_rgba(0,0,0,0.8)] dark:border-white/20 ${
          size === "logo"
            ? "size-16 p-3 sm:size-20 sm:p-4"
            : size === "output"
              ? "h-10 min-w-20 px-3 text-[9px] whitespace-nowrap sm:h-12 sm:min-w-24 sm:text-[10px]"
            : size === "input"
              ? "size-10 text-[10px] sm:size-12 sm:text-xs"
              : "size-8 text-[9px] sm:size-10 sm:text-[10px]"
        } ${className}`}
      >
        {children}
      </div>
    )
  }
)

const inputPoints = [28, 50, 72]
const outputPoints = [39, 61]

export default function IntegrationBeam() {
  const containerRef = useRef<HTMLDivElement>(null)
  const input1 = useRef<HTMLDivElement>(null)
  const input2 = useRef<HTMLDivElement>(null)
  const input3 = useRef<HTMLDivElement>(null)
  const logoRef = useRef<HTMLDivElement>(null)
  const output1 = useRef<HTMLDivElement>(null)
  const output2 = useRef<HTMLDivElement>(null)
  const isInView = useInView(containerRef, { amount: 0.15 })
  const reduceMotion = useReducedMotion()

  const inputRefs = [input1, input2, input3]
  const outputRefs = [output1, output2]
  const outputLabels = ["Risk value", "Predict value"]
  const connections: Array<{
    fromRef: RefObject<HTMLDivElement | null>
    toRef: RefObject<HTMLDivElement | null>
    curvature: number
  }> = [
    { fromRef: input1, toRef: logoRef, curvature: 34 },
    { fromRef: input2, toRef: logoRef, curvature: 0 },
    { fromRef: input3, toRef: logoRef, curvature: -34 },
    { fromRef: logoRef, toRef: output1, curvature: 22 },
    { fromRef: logoRef, toRef: output2, curvature: -22 },
  ]

  return (
    <div
      ref={containerRef}
      className="absolute inset-x-0 top-0 h-[72%] overflow-hidden border-b bg-muted/20 text-foreground [mask-image:linear-gradient(to_bottom,black_72%,transparent)]"
      aria-label="Water quality model visualization"
    >
      <div className="absolute inset-x-0 top-2 grid grid-cols-3 text-center text-[8px] font-medium text-muted-foreground sm:text-[10px]">
        <span>Input</span>
        <span>Yodmayom</span>
        <span>Output</span>
      </div>

      {inputRefs.map((ref, index) => (
        <NetworkNode
          key={`input-${index}`}
          ref={ref}
          style={{ left: "16.6667%", top: `${inputPoints[index]}%` }}
          size="input"
        >
          {index === 0 ? "T" : index === 1 ? "DO" : "pH"}
        </NetworkNode>
      ))}

      <NetworkNode
        ref={logoRef}
        style={{ left: "50%", top: "50%" }}
        size="logo"
      >
        <Image
          src="/tab-logo/white/Y-logo-white-optimized.png"
          alt="Yodmayom"
          width={80}
          height={80}
          className="h-auto w-full object-contain"
        />
      </NetworkNode>

      {outputRefs.map((ref, index) => (
        <NetworkNode
          key={`output-${index}`}
          ref={ref}
          style={{ left: "83.3333%", top: `${outputPoints[index]}%` }}
          size="output"
          className="text-center"
        >
          {outputLabels[index]}
        </NetworkNode>
      ))}

      {connections.map(({ fromRef, toRef, curvature }, index) => {
        const shouldAnimate = isInView && !reduceMotion

        return (
          <AnimatedBeam
            key={index}
            containerRef={containerRef}
            fromRef={fromRef}
            toRef={toRef}
            curvature={curvature}
            duration={shouldAnimate ? 4.2 : 0.01}
            delay={index * 0.2}
            pathWidth={1.1}
            pathOpacity={0.2}
            repeat={shouldAnimate ? Infinity : 0}
            gradientStartColor={shouldAnimate ? "#38bdf8" : "transparent"}
            gradientStopColor={shouldAnimate ? "#fb7185" : "transparent"}
          />
        )
      })}
    </div>
  )
}
