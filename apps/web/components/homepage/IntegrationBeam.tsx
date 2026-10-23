"use client"

import Image from "next/image"
import { motion } from "motion/react"
import {
  forwardRef,
  useId,
  useLayoutEffect,
  useRef,
  useState,
  type CSSProperties,
  type ReactNode,
  type RefObject,
} from "react"

type NetworkNodeProps = {
  children?: ReactNode
  className?: string
  size?: "default" | "input" | "logo" | "output"
  style: CSSProperties
}

type BeamGeometry = {
  width: number
  height: number
  paths: string[]
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
const curvatures = [40, 0, -40, 54, -54]

export default function IntegrationBeam({
  expanded = false,
}: {
  expanded?: boolean
}) {
  const beamId = useId().replaceAll(":", "")
  const containerRef = useRef<HTMLDivElement>(null)
  const input1 = useRef<HTMLDivElement>(null)
  const input2 = useRef<HTMLDivElement>(null)
  const input3 = useRef<HTMLDivElement>(null)
  const logoRef = useRef<HTMLDivElement>(null)
  const output1 = useRef<HTMLDivElement>(null)
  const output2 = useRef<HTMLDivElement>(null)
  const [beamActive, setBeamActive] = useState(true)
  const [geometry, setGeometry] = useState<BeamGeometry>({
    width: 0,
    height: 0,
    paths: [],
  })

  const inputRefs = [input1, input2, input3]
  const outputRefs = [output1, output2]
  const outputLabels = ["Risk value", "Predict value"]
  const activeInputPoints = expanded ? expandedInputPoints : inputPoints
  const activeOutputPoints = expanded ? expandedOutputPoints : outputPoints
  const logoTop = expanded ? "50%" : "56%"

  useLayoutEffect(() => {
    const container = containerRef.current
    if (!container) return

    const connections: Array<
      [RefObject<HTMLDivElement | null>, RefObject<HTMLDivElement | null>]
    > = [
      [input1, logoRef],
      [input2, logoRef],
      [input3, logoRef],
      [logoRef, output1],
      [logoRef, output2],
    ]

    const updatePaths = () => {
      const containerRect = container.getBoundingClientRect()
      const paths = connections.map(([fromRef, toRef], index) => {
        const from = fromRef.current?.getBoundingClientRect()
        const to = toRef.current?.getBoundingClientRect()
        if (!from || !to) return ""

        const startX = from.left - containerRect.left + from.width / 2
        const startY = from.top - containerRect.top + from.height / 2
        const endX = to.left - containerRect.left + to.width / 2
        const endY = to.top - containerRect.top + to.height / 2
        const controlX = (startX + endX) / 2
        const controlY = startY - (curvatures[index] ?? 0)

        return `M ${startX},${startY} Q ${controlX},${controlY} ${endX},${endY}`
      })

      setGeometry({
        width: containerRect.width,
        height: containerRect.height,
        paths,
      })
    }

    const frame = window.requestAnimationFrame(updatePaths)
    const resizeObserver = new ResizeObserver(updatePaths)
    resizeObserver.observe(container)

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)")
    let visible = true
    const syncActivity = () => setBeamActive(visible && !reduceMotion.matches)
    const visibilityObserver = new IntersectionObserver(
      ([entry]) => {
        visible = Boolean(entry?.isIntersecting)
        syncActivity()
      },
      { threshold: 0.05 }
    )
    visibilityObserver.observe(container)
    reduceMotion.addEventListener("change", syncActivity)
    syncActivity()

    return () => {
      window.cancelAnimationFrame(frame)
      resizeObserver.disconnect()
      visibilityObserver.disconnect()
      reduceMotion.removeEventListener("change", syncActivity)
    }
  }, [expanded])

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
      <svg
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        width={geometry.width}
        height={geometry.height}
        viewBox={`0 0 ${geometry.width} ${geometry.height}`}
        fill="none"
      >
        <defs>
          {beamActive &&
            geometry.paths.map((_, index) => (
              <motion.linearGradient
                key={`gradient-${index}`}
                id={`${beamId}-${index}`}
                className="transform-gpu"
                gradientUnits="userSpaceOnUse"
                initial={{ x1: "0%", x2: "0%", y1: "0%", y2: "0%" }}
                animate={{
                  x1: ["10%", "110%"],
                  x2: ["0%", "100%"],
                  y1: ["0%", "0%"],
                  y2: ["0%", "0%"],
                }}
                transition={{
                  delay: index * 0.2,
                  duration: 3.6,
                  ease: [0.16, 1, 0.3, 1],
                  repeat: Infinity,
                }}
              >
                <stop stopColor="#38bdf8" stopOpacity="0" />
                <stop stopColor="#38bdf8" />
                <stop offset="32.5%" stopColor="#fb7185" />
                <stop
                  offset="100%"
                  stopColor="#fb7185"
                  stopOpacity="0"
                />
              </motion.linearGradient>
            ))}
        </defs>

        {geometry.paths.map((path, index) => (
          <g key={`beam-${index}`}>
            <path
              d={path}
              stroke="gray"
              strokeWidth="1.3"
              strokeOpacity="0.25"
              strokeLinecap="round"
            />
            {beamActive && (
              <path
                d={path}
                stroke={`url(#${beamId}-${index})`}
                strokeWidth="1.3"
                strokeLinecap="round"
              />
            )}
          </g>
        ))}
      </svg>

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
    </div>
  )
}
