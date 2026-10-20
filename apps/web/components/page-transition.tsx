"use client"

import { usePathname } from "next/navigation"
import AnimatedContent from "./AnimatedContent"

export function PageTransition({
    children,
}: {
    children: React.ReactNode
}) {
    const pathname = usePathname()

    return (
        <AnimatedContent
            key={pathname}
            distance={24}
            direction="vertical"
            duration={0.45}
            ease="power3.out"
            initialOpacity={0}
            animateOpacity
            threshold={0}
        >
            {children}
        </AnimatedContent>
    )
}