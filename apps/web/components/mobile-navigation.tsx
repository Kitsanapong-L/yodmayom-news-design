"use client"

import { MenuIcon } from "lucide-react"

import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

export function MobileNavigation() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger
        aria-label="Open navigation menu"
        render={<Button variant="outline" size="icon" className="rounded-lg" />}
      >
        <MenuIcon />
        <span className="sr-only">Open navigation menu</span>
      </DropdownMenuTrigger>

      <DropdownMenuContent align="end" className="w-40">
        <DropdownMenuItem render={<a href="/" />}>Home</DropdownMenuItem>
        <DropdownMenuItem render={<a href="/about" />}>About</DropdownMenuItem>
        <DropdownMenuItem render={<a href="/member" />}>member</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
