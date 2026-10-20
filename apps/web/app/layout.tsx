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
import Image from "next/image"
import Link from "next/link"

import type { Metadata } from "next"
import "@workspace/ui/globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { cn } from "@workspace/ui/lib/utils"

export const metadata: Metadata = {
  title: "Yodmayom",
  description: "Yodmayom",
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
                  src="/yodmayom_logo_no_bg.png"
                  alt="Yodmayom"
                  width={100}
                  height={40}
                  className="h-9 w-auto object-contain"
                />
              </Link>
              <NavigationMenu className="hidden md:flex">
                <NavigationMenuList>
                  <NavigationMenuItem>
                    <NavigationMenuLink
                      className={navigationMenuTriggerStyle()}
                      render={<a href="/">Home</a>}
                    />
                    <NavigationMenuLink
                      className={navigationMenuTriggerStyle()}
                      render={<a href="/about">About</a>}
                    />
                    <NavigationMenuLink
                      className={navigationMenuTriggerStyle()}
                      render={<a href="/member">member</a>}
                    />
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
