"use client"

import { useEffect, useState } from "react"
import { ServiceCard } from "@/components/service-card"
import type { Service } from "@/types"

export default function Services() {
  const [services, setServices] = useState<Service[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState("")

  useEffect(() => {
    async function loadServices() {
      try {
        const response = await fetch("/api/services")

        if (!response.ok) {
          throw new Error("Failed to load services")
        }

        const data = await response.json()

        setServices(data.services)
      } catch {
        setError("Unable to load services. Please try again.")
      } finally {
        setLoading(false)
      }
    }

    loadServices()
  }, [])

  return (
    <div className="container-page">
      <div className="mx-auto max-w-7xl">

        <div className="mb-8">
          <p className="text-sm font-bold text-success">
            SERVICE CATALOG
          </p>

          <h1 className="mt-1 text-3xl font-black">
            Choose the right service
          </h1>

          <p className="mt-2 max-w-2xl text-slate-500">
            Transparent pricing, clear durations and practical service
            options for restaurant kitchens.
          </p>
        </div>

        {loading && (
          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {[1, 2, 3, 4].map((item) => (
              <div
                key={item}
                className="h-64 animate-pulse rounded-2xl bg-slate-200"
              />
            ))}
          </div>
        )}

        {!loading && error && (
          <div
            role="alert"
            className="rounded-2xl border border-red-200 bg-red-50 p-6 text-red-700"
          >
            {error}
          </div>
        )}

        {!loading && !error && (
          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {services.map((service) => (
              <ServiceCard
                key={service.id}
                service={service}
              />
            ))}
          </div>
        )}

      </div>
    </div>
  )
}