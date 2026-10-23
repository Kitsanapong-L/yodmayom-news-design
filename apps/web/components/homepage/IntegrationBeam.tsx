"use client"

import Image from "next/image"
import {
  forwardRef,
  useRef,
  type CSSProperties,
  type ReactNode,
  type RefObject,
} from "react"

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
            ? "size-14 p-3 sm:size-20 sm:p-4"
            : size === "output"
              ? "h-8 min-w-18 px-2 text-[8px] whitespace-nowrap sm:h-12 sm:min-w-24 sm:px-3 sm:text-[10px]"
              : size === "input"
                ? "size-8 text-[9px] sm:size-12 sm:text-xs"
                : "size-8 text-[9px] sm:size-10 sm:text-[10px]"
        } ${className}`}
      >
        {children}
      </div>
    )
  }
)

const inputPoints = [34, 56, 78]
const outputPoints = [45, 67]
const expandedInputPoints = [28, 50, 72]
const expandedOutputPoints = [39, 61]

export default function IntegrationBeam({
  expanded = false,
}: {
  expanded?: boolean
}) {
  const containerRef = useRef<HTMLDivElement>(null)
  const input1 = useRef<HTMLDivElement>(null)
  const input2 = useRef<HTMLDivElement>(null)
  const input3 = useRef<HTMLDivElement>(null)
  const logoRef = useRef<HTMLDivElement>(null)
  const output1 = useRef<HTMLDivElement>(null)
  const output2 = useRef<HTMLDivElement>(null)
  const inputRefs = [input1, input2, input3]
  const outputRefs = [output1, output2]
  const outputLabels = ["Risk value", "Predict value"]
  const activeInputPoints = expanded ? expandedInputPoints : inputPoints
  const activeOutputPoints = expanded ? expandedOutputPoints : outputPoints
  const logoTop = expanded ? "50%" : "56%"
  const connections: Array<{
    fromRef: RefObject<HTMLDivElement | null>
    toRef: RefObject<HTMLDivElement | null>
    curvature: number
  }> = [
    { fromRef: input1, toRef: logoRef, curvature: 40 },
    { fromRef: input2, toRef: logoRef, curvature: 0 },
    { fromRef: input3, toRef: logoRef, curvature: -40 },
    { fromRef: logoRef, toRef: output1, curvature: 54 },
    { fromRef: logoRef, toRef: output2, curvature: -54 },
  ]

  return (
    <div
      ref={containerRef}
      className={`absolute inset-x-0 top-0 origin-center overflow-hidden bg-muted/20 text-foreground transition-all duration-300 ease-out group-hover:scale-105 motion-reduce:transform-none motion-reduce:transition-none ${
        expanded
          ? "h-full"
          : "h-[60%] border-b [mask-image:linear-gradient(to_bottom,black_45%,transparent_88%)] sm:h-[72%] sm:[mask-image:linear-gradient(to_bottom,black_72%,transparent)]"
      }`}
      aria-label="Water quality model visualization"
    >
      {inputRefs.map((ref, index) => (
        <NetworkNode
          key={`input-${index}`}
          ref={ref}
          style={{ left: "16.6667%", top: `${activeInputPoints[index]}%` }}
          size="input"
        >
          {index === 0 ? "T" : index === 1 ? "DO" : "pH"}
        </NetworkNode>
      ))}

      <NetworkNode
        ref={logoRef}
        style={{ left: "50%", top: logoTop }}
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
          style={{ left: "83.3333%", top: `${activeOutputPoints[index]}%` }}
          size="output"
          className="text-center"
        >
          {outputLabels[index]}
        </NetworkNode>
      ))}

      {connections.map(({ fromRef, toRef, curvature }, index) => (
        <AnimatedBeam
          key={index}
          className="opacity-90"
          containerRef={containerRef}
          fromRef={fromRef}
          toRef={toRef}
          curvature={curvature}
          duration={3.6}
          delay={index * 0.2}
          pathWidth={1.3}
          pathOpacity={0.25}
          gradientStartColor="#38bdf8"
          gradientStopColor="#fb7185"
        />
      ))}
    </div>
  )
}
