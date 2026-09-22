"use client"

import { FormEvent, useState } from "react"
import {
  UserRound,
  Building2,
  Mail,
  Phone,
  MapPin,
  Save,
  Pencil,
  CheckCircle2,
} from "lucide-react"
import { useAppStore } from "@/lib/store"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader } from "@/components/ui/card"

export default function Profile() {
  const profile = useAppStore((state) => state.profile)
  const updateProfile = useAppStore((state) => state.updateProfile)

  const [p, setP] = useState(profile)
  const [editing, setEditing] = useState(false)
  const [saved, setSaved] = useState(false)

  function set(
    key: keyof typeof p,
    value: string | boolean
  ) {
    setP((current) => ({
      ...current,
      [key]: value,
    }))
  }

  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()

    updateProfile(p)
    setEditing(false)
    setSaved(true)

    setTimeout(() => {
      setSaved(false)
    }, 3000)
  }

  function cancelEdit() {
    setP(profile)
    setEditing(false)
  }

  return (
    <div className="container-page">
      <div className="mx-auto max-w-4xl">
        <div className="mb-7">
          <p className="text-sm font-bold text-success">
            ACCOUNT SETTINGS
          </p>

          <h1 className="mt-1 text-3xl font-black">
            Profile & preferences
          </h1>

          <p className="mt-2 text-slate-500">
            Keep your restaurant details and service notifications up to date.
          </p>
        </div>

        <form onSubmit={submit}>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between gap-4">
              <div>
                <h2 className="text-lg font-black">
                  Restaurant profile
                </h2>

                <p className="mt-1 text-sm text-slate-500">
                  Update your account information.
                </p>
              </div>

              {!editing && (
                <Button
                  type="button"
                  onClick={() => {
                    setEditing(true)
                    setSaved(false)
                  }}
                >
                  <Pencil size={17} />
                  Edit profile
                </Button>
              )}
            </CardHeader>

            <CardContent className="space-y-5">
              <div className="grid gap-4 sm:grid-cols-2">
                <Field
                  icon={<UserRound />}
                  label="Your name"
                  value={p.name}
                  disabled={!editing}
                  onChange={(value) => set("name", value)}
                />

                <Field
                  icon={<Building2 />}
                  label="Restaurant name"
                  value={p.restaurant}
                  disabled={!editing}
                  onChange={(value) => set("restaurant", value)}
                />

                <Field
                  icon={<Mail />}
                  label="Email"
                  value={p.email}
                  type="email"
                  disabled={!editing}
                  onChange={(value) => set("email", value)}
                />

                <Field
                  icon={<Phone />}
                  label="Phone"
                  value={p.phone}
                  disabled={!editing}
                  onChange={(value) => set("phone", value)}
                />
              </div>

              <Field
                icon={<MapPin />}
                label="Service address"
                value={p.address}
                disabled={!editing}
                onChange={(value) => set("address", value)}
              />

              <div
                className={`rounded-xl p-4 ${
                  editing ? "bg-slate-50" : "bg-slate-100/70"
                }`}
              >
                <p className="font-bold">
                  Notification preferences
                </p>

                <label className="mt-4 flex items-center justify-between gap-4">
                  <span>
                    <span className="block text-sm font-semibold">
                      Email updates
                    </span>

                    <span className="text-xs text-slate-500">
                      Booking confirmations and service reports
                    </span>
                  </span>

                  <input
                    type="checkbox"
                    checked={p.emailUpdates}
                    disabled={!editing}
                    onChange={(event) =>
                      set("emailUpdates", event.target.checked)
                    }
                    className="h-5 w-5 accent-brand disabled:opacity-50"
                  />
                </label>

                <label className="mt-4 flex items-center justify-between gap-4">
                  <span>
                    <span className="block text-sm font-semibold">
                      SMS updates
                    </span>

                    <span className="text-xs text-slate-500">
                      Time-sensitive service reminders
                    </span>
                  </span>

                  <input
                    type="checkbox"
                    checked={p.smsUpdates}
                    disabled={!editing}
                    onChange={(event) =>
                      set("smsUpdates", event.target.checked)
                    }
                    className="h-5 w-5 accent-brand disabled:opacity-50"
                  />
                </label>
              </div>

              {editing && (
                <div className="flex flex-col-reverse gap-3 sm:flex-row sm:justify-end">
                  <Button
                    type="button"
                    variant="outline"
                    onClick={cancelEdit}
                  >
                    Cancel
                  </Button>

                  <Button type="submit">
                    <Save size={17} />
                    Save changes
                  </Button>
                </div>
              )}

              {saved && (
                <div
                  role="status"
                  className="flex items-center gap-2 rounded-xl border border-emerald-200 bg-emerald-50 p-4 text-emerald-700"
                >
                  <CheckCircle2 size={18} />
                  Profile updated successfully.
                </div>
              )}
            </CardContent>
          </Card>
        </form>
      </div>
    </div>
  )
}

function Field({
  icon,
  label,
  value,
  onChange,
  type = "text",
  disabled = false,
}: {
  icon: React.ReactNode
  label: string
  value: string
  onChange: (value: string) => void
  type?: string
  disabled?: boolean
}) {
  return (
    <label className="block">
      <span className="mb-2 block text-sm font-bold">
        {label}
      </span>

      <div className="relative">
        <span className="absolute left-3 top-3.5 text-slate-400">
          {icon}
        </span>

        <input
          type={type}
          value={value}
          disabled={disabled}
          onChange={(event) => onChange(event.target.value)}
          className={`w-full rounded-xl border px-10 py-3 text-sm outline-none transition ${
            disabled
              ? "cursor-not-allowed border-slate-200 bg-slate-100 text-slate-500"
              : "border-slate-300 bg-white focus:border-blue-800 focus:ring-2 focus:ring-blue-100"
          }`}
        />
      </div>
    </label>
  )
}