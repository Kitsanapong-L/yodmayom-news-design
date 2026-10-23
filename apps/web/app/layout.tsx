import { IBM_Plex_Sans_Thai } from "next/font/google"
import { MobileNavigation } from "@/components/mobile-navigation"
import { ModeToggle } from "@/components/mode-toggle"
import { SmoothScroll } from "@/components/smooth-scroll"
import { Separator } from "@/components/ui/separator"
import { HouseIcon, InfoIcon, UsersIcon } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

import type { Metadata } from "next"
import "@workspace/ui/globals.css"
import "lenis/dist/lenis.css"
import { ThemeProvider } from "@/components/theme-provider"
import { cn } from "@workspace/ui/lib/utils"

export const metadata: Metadata = {
  metadataBase: new URL("https://yodmayom.cloud"),
  title: "Yodmayom",
  description: "ติดตามข่าวสาร ประกาศ และกิจกรรมจาก Yodmayom",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Yodmayom",
    description: "ติดตามข่าวสาร ประกาศ และกิจกรรมจาก Yodmayom",
    url: "/",
    siteName: "Yodmayom",
    locale: "th_TH",
    type: "website",
    images: [
      {
        url: "/banner/banner-yodmayom-optimized.jpg",
        width: 1200,
        height: 630,
        alt: "Yodmayom",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Yodmayom",
    description: "ติดตามข่าวสาร ประกาศ และกิจกรรมจาก Yodmayom",
    images: ["/banner/banner-yodmayom-optimized.jpg"],
  },
}

const ibmPlexSansThai = IBM_Plex_Sans_Thai({
  weight: ["400", "500", "600"],
  style: "normal",
  subsets: ["thai", "latin"],
  display: "swap",
  variable: "--font-ibm-plex-sans-thai",
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="th"
      suppressHydrationWarning
      className={cn(
        "antialiased",
        ibmPlexSansThai.variable,
        "font-sans"
      )}
    >
      <body>
        <SmoothScroll />
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <header className="sticky top-0 z-50 h-14 bg-background/80 backdrop-blur-md">
            <div className="mx-auto flex h-full w-full max-w-7xl items-center gap-2 px-4 sm:px-6 lg:px-8">
                <Link
                  href="/"
                  className="-ml-0 flex h-10 shrink-0 items-center sm:ml-0"
                  aria-label="Yodmayom home"
                >
                  <Image
                    src="/nav-logo/white/yodmayom_light-optimized.png"
                    alt="Yodmayom"
                    width={180}
                    height={38}
                    className="h-7 w-auto object-contain dark:hidden"
                  />
                  <Image
                    src="/nav-logo/black/yodmayom_dark-optimized.png"
                    alt=""
                    width={180}
                    height={38}
                    aria-hidden="true"
                    className="hidden h-7 w-auto object-contain dark:block"
                  />
                </Link>
                <Separator
                  orientation="vertical"
                  className="ml-4 mr-0 hidden !h-5 -translate-x-0.5 !self-center md:block"
                />
                <nav className="hidden items-center md:flex" aria-label="Main navigation">
                  <Link
                    href="/"
                    className="inline-flex h-9 items-center gap-2 rounded-md px-2.5 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-3 focus-visible:ring-ring/50"
                  >
                    <HouseIcon className="size-4" aria-hidden="true" />
                    <span>Home</span>
                  </Link>
                  <Link
                    href="/about"
                    className="inline-flex h-9 items-center gap-2 rounded-md px-2.5 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-3 focus-visible:ring-ring/50"
                  >
                    <InfoIcon className="size-4" aria-hidden="true" />
                    <span>About</span>
                  </Link>
                  <Link
                    href="/member"
                    className="inline-flex h-9 items-center gap-2 rounded-md px-2.5 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-3 focus-visible:ring-ring/50"
                  >
                    <UsersIcon className="size-4" aria-hidden="true" />
                    <span>Member</span>
                  </Link>
                </nav>

                <div className="ml-auto flex shrink-0 items-center gap-2">
                  <ModeToggle />
                  <div className="md:hidden">
                    <MobileNavigation />
                  </div>
                </div>
            </div>
            <Separator />
          </header>
          <main>{children}</main>
        </ThemeProvider>
      </body>
    </html>
  )
}
