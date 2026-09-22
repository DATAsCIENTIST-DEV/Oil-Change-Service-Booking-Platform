import type { Booking, Notification } from "@/types"

export const seedBookings: Booking[] = [
  {
    id: "529",
    serviceId: "premium-kitchen-service",
    serviceName: "Premium Kitchen Service",
    restaurant: "Burger Barn",
    date: "2026-09-18",
    time: "12:00",
    address: "321 Cedar Lane, Seattle, WA 98101",
    notes: "",
    status: "scheduled",
    createdAt: "2026-09-18T10:00:00.000Z",
  },
]

export const seedNotifications: Notification[] = [
  {
    id: "notification-1",
    title: "Booking confirmed",
    body: "Your Premium Kitchen Service booking has been confirmed.",
    time: "Just now",
    read: false,
    type: "booking",
  },
]