"use client"

import { Bell } from "lucide-react"
import Link from "next/link"
import { useAppStore } from "@/lib/store"

export function Header() {
  const unread = useAppStore(
    (state) => state.notifications.filter((n) => !n.read).length
  )

  const profile = useAppStore((state) => state.profile)

  const initials = profile.name
    .trim()
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((name) => name[0].toUpperCase())
    .join("")

  return (
    <header className="sticky top-0 z-20 flex h-16 items-center justify-between border-b border-slate-200 bg-white/90 px-4 backdrop-blur lg:ml-64 lg:px-8">
      <div className="hidden text-sm text-slate-500 sm:block">
        Restaurant Operations /{" "}
        <span className="font-semibold text-ink">
          Oil service
        </span>
      </div>

      <div className="flex items-center gap-3">
        <Link
          href="/notifications"
          className="relative rounded-xl p-2 text-slate-600 hover:bg-slate-100"
          aria-label="Notifications"
        >
          <Bell size={20} />

          {unread > 0 && (
            <span className="absolute right-1 top-1 h-2 w-2 rounded-full bg-success" />
          )}
        </Link>

        <Link
          href="/profile"
          aria-label={`Open profile for ${profile.name}`}
          className="grid h-9 w-9 place-items-center rounded-full bg-brand text-sm font-bold text-white transition hover:opacity-90"
        >
          {initials || "U"}
        </Link>
      </div>
    </header>
  )
}
