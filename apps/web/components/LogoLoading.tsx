"use client"

import Image from "next/image"
import { motion, useReducedMotion } from "motion/react"

export default function Logoloading() {
  const reduceMotion = useReducedMotion()

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-white dark:bg-[#05070b]">
      <motion.div
        animate={reduceMotion ? { opacity: 1 } : { opacity: [0.4, 1, 0.4] }}
        transition={{
          duration: 2,
          ease: "easeInOut",
          repeat: Infinity,
        }}
      >
        <Image
          src="/tab-logo/white/Y-logo-white.png"
          alt="Yodmayom"
          width={120}
          height={120}
          priority
          className="h-20 w-20 object-contain dark:hidden"
        />
        <Image
          src="/tab-logo/black/Y-logo-dark.png"
          alt=""
          width={120}
          height={120}
          priority
          aria-hidden="true"
          className="hidden h-20 w-20 object-contain dark:block"
        />
      </motion.div>
    </div>
  )
}
