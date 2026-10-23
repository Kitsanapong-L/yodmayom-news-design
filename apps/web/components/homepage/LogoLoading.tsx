"use client"

import Image from "next/image"

export default function Logoloading({ leaving = false }: { leaving?: boolean }) {
  return (
    <div
      data-site-loading
      role="status"
      aria-live="polite"
      aria-label="Loading Yodmayom"
      className={`fixed inset-0 z-[9999] flex items-center justify-center bg-white transition-opacity duration-200 ease-out dark:bg-[#05070b] ${
        leaving ? "pointer-events-none opacity-0" : "opacity-100"
      }`}
    >
      <div className="animate-pulse motion-reduce:animate-none">
        <Image
          src="/tab-logo/white/Y-logo-white-optimized.png"
          alt="Yodmayom"
          width={120}
          height={120}
          className="h-20 w-20 object-contain dark:hidden"
        />
        <Image
          src="/tab-logo/black/Y-logo-dark-optimized.png"
          alt=""
          width={120}
          height={120}
          aria-hidden="true"
          className="hidden h-20 w-20 object-contain dark:block"
        />
      </div>
    </div>
  )
}
