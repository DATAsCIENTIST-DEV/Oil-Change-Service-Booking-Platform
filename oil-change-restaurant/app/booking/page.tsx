"use client"

import { useState } from "react"
import { useAppStore } from "@/lib/store"

export default function BookingPage() {
  const addBooking = useAppStore((state) => state.addBooking)

  const [loading, setLoading] = useState(false)
  const [message, setMessage] = useState("")
  const [error, setError] = useState("")

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()

    setLoading(true)
    setMessage("")
    setError("")

    const form = event.currentTarget
    const formData = new FormData(form)

    const bookingData = {
      service: formData.get("service"),
      date: formData.get("date"),
      time: formData.get("time"),
      restaurant: formData.get("restaurant"),
      address: formData.get("address"),
      notes: formData.get("notes"),
    }

    try {
      const response = await fetch("/api/bookings", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(bookingData),
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.message || "Booking failed")
      }

      const serviceNames: Record<string, string> = {
        "basic-oil-change": "Basic Oil Change",
        "deep-oil-change": "Deep Oil Change",
        "premium-kitchen-service": "Premium Kitchen Service",
        "emergency-oil-service": "Emergency Oil Service",
      }
addBooking({
  id: data.booking.id,
  serviceId: data.booking.service,
  serviceName:
    serviceNames[data.booking.service] || data.booking.service,
  restaurant: data.booking.restaurant,
  date: data.booking.date,
  time: data.booking.time,
  address: data.booking.address,
  notes: data.booking.notes || "",
  status: "scheduled",
  createdAt: data.booking.createdAt,
})

      setMessage(
        `Booking confirmed! Your booking ID is ${data.booking.id}.`
      )

      form.reset()
    } catch (err) {
      setError(
        err instanceof Error
          ? err.message
          : "Unable to create booking."
      )
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="container-page">
      <div className="mx-auto max-w-3xl">

        <div className="mb-8">
          <p className="text-sm font-bold text-success">
            BOOK A SERVICE
          </p>

          <h1 className="mt-1 text-3xl font-black">
            Schedule your oil change
          </h1>

          <p className="mt-2 text-slate-500">
            Choose a service, date and time that works for your restaurant.
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="space-y-6 rounded-2xl border bg-white p-6 shadow-sm"
        >
          <div>
            <label
              htmlFor="service"
              className="mb-2 block text-sm font-bold"
            >
              Select Service
            </label>

            <select
              id="service"
              name="service"
              required
              className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 outline-none focus:border-blue-800"
            >
              <option value="">Choose a service</option>

              <option value="basic-oil-change">
                Basic Oil Change — $89
              </option>

              <option value="deep-oil-change">
                Deep Oil Change — $149
              </option>

              <option value="premium-kitchen-service">
                Premium Kitchen Service — $229
              </option>

              <option value="emergency-oil-service">
                Emergency Oil Service — $299
              </option>
            </select>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            <div>
              <label
                htmlFor="date"
                className="mb-2 block text-sm font-bold"
              >
                Service Date
              </label>

              <input
                id="date"
                name="date"
                type="date"
                required
                className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none focus:border-blue-800"
              />
            </div>

            <div>
              <label
                htmlFor="time"
                className="mb-2 block text-sm font-bold"
              >
                Service Time
              </label>

              <input
                id="time"
                name="time"
                type="time"
                required
                className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none focus:border-blue-800"
              />
            </div>
          </div>

          <div>
            <label
              htmlFor="restaurant"
              className="mb-2 block text-sm font-bold"
            >
              Restaurant Name
            </label>

            <input
              id="restaurant"
              name="restaurant"
              type="text"
              required
              placeholder="Enter restaurant name"
              className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none focus:border-blue-800"
            />
          </div>

          <div>
            <label
              htmlFor="address"
              className="mb-2 block text-sm font-bold"
            >
              Restaurant Address
            </label>

            <textarea
              id="address"
              name="address"
              required
              rows={3}
              placeholder="Enter restaurant address"
              className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none focus:border-blue-800"
            />
          </div>

          <div>
            <label
              htmlFor="notes"
              className="mb-2 block text-sm font-bold"
            >
              Additional Notes
            </label>

            <textarea
              id="notes"
              name="notes"
              rows={3}
              placeholder="Any special instructions?"
              className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none focus:border-blue-800"
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full rounded-xl bg-blue-900 px-5 py-3 font-bold text-white transition hover:bg-blue-800 disabled:cursor-not-allowed disabled:opacity-60"
          >
            {loading ? "Creating Booking..." : "Schedule Service"}
          </button>

          {message && (
            <div
              role="status"
              className="rounded-xl border border-emerald-200 bg-emerald-50 p-4 text-emerald-700"
            >
              {message}
            </div>
          )}

          {error && (
            <div
              role="alert"
              className="rounded-xl border border-red-200 bg-red-50 p-4 text-red-700"
            >
              {error}
            </div>
          )}
        </form>
      </div>
    </div>
  )
}