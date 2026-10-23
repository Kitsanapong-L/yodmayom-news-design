import { HouseIcon, InfoIcon, MenuIcon, UsersIcon } from "lucide-react"
import Link from "next/link"

const mobileLinkClass =
  "flex items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:bg-accent"

export function MobileNavigation() {
  return (
    <details className="group relative">
      <summary
        aria-label="Open navigation menu"
        className="flex size-9 cursor-pointer list-none items-center justify-center rounded-lg border bg-background shadow-xs transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-3 focus-visible:ring-ring/50 [&::-webkit-details-marker]:hidden"
      >
        <MenuIcon className="size-4" aria-hidden="true" />
        <span className="sr-only">Open navigation menu</span>
      </summary>

      <nav
        className="absolute top-11 right-0 z-50 grid w-40 gap-1 rounded-md border bg-popover p-1 text-popover-foreground shadow-md"
        aria-label="Mobile navigation"
      >
        <Link href="/" className={mobileLinkClass}>
          <HouseIcon className="size-4" aria-hidden="true" />
          <span>Home</span>
        </Link>
        <Link href="/about" className={mobileLinkClass}>
          <InfoIcon className="size-4" aria-hidden="true" />
          <span>About</span>
        </Link>
        <Link href="/member" className={mobileLinkClass}>
          <UsersIcon className="size-4" aria-hidden="true" />
          <span>Member</span>
        </Link>
      </nav>
    </details>
  )
}
