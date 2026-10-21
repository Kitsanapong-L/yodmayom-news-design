import { Geist_Mono, IBM_Plex_Sans_Thai } from "next/font/google"
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import { MobileNavigation } from "@/components/mobile-navigation"
import { ModeToggle } from "@/components/mode-toggle"
import { Separator } from "@/components/ui/separator"
import { HouseIcon, InfoIcon, UsersIcon } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

import type { Metadata } from "next"
import "@workspace/ui/globals.css"
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
        url: "/banner/banner-yodmayom.png",
        width: 1734,
        height: 907,
        alt: "Yodmayom",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Yodmayom",
    description: "ติดตามข่าวสาร ประกาศ และกิจกรรมจาก Yodmayom",
    images: ["/banner/banner-yodmayom.png"],
  },
}

const ibmPlexSansThai = IBM_Plex_Sans_Thai({
  weight: ["400", "500", "600", "700"],
  style: "normal",
  subsets: ["thai", "latin"],
  display: "swap",
  variable: "--font-ibm-plex-sans-thai",
})

const fontMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
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
        fontMono.variable,
        "font-sans"
      )}
    >
      <body>
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
                className="-ml-2 flex h-10 shrink-0 items-center sm:ml-0"
                aria-label="Yodmayom home"
              >
                <Image
                  src="/nav-logo/white/yodmayom_light.png"
                  alt="Yodmayom"
                  width={180}
                  height={38}
                  priority
                  className="h-7 w-auto object-contain dark:hidden"
                />
                <Image
                  src="/nav-logo/black/yodmayom_dark.png"
                  alt=""
                  width={180}
                  height={38}
                  priority
                  aria-hidden="true"
                  className="hidden h-7 w-auto object-contain dark:block"
                />
              </Link>
              <Separator
                orientation="vertical"
                className="mx-2 hidden !h-5 !self-center md:block"
              />
              <NavigationMenu className="hidden md:flex">
                <NavigationMenuList>
                  <NavigationMenuItem>
                    <NavigationMenuLink
                      className={navigationMenuTriggerStyle()}
                      render={<a href="/" />}
                    >
                      <HouseIcon aria-hidden="true" />
                      <span>Home</span>
                    </NavigationMenuLink>
                    <NavigationMenuLink
                      className={navigationMenuTriggerStyle()}
                      render={<a href="/about" />}
                    >
                      <InfoIcon aria-hidden="true" />
                      <span>About</span>
                    </NavigationMenuLink>
                    <NavigationMenuLink
                      className={navigationMenuTriggerStyle()}
                      render={<a href="/member" />}
                    >
                      <UsersIcon aria-hidden="true" />
                      <span>Member</span>
                    </NavigationMenuLink>
                  </NavigationMenuItem>
                </NavigationMenuList>
              </NavigationMenu>

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
