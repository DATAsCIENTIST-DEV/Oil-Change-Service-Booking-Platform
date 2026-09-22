import { NextResponse } from "next/server"
import db from "../../../lib/db"

export async function POST(request: Request) {
  try {
    const body = await request.json()

    const {
      service,
      date,
      time,
      restaurant,
      address,
      notes,
    } = body

    if (!service || !date || !time || !restaurant || !address) {
      return NextResponse.json(
        {
          success: false,
          message: "Please complete all required fields.",
        },
        { status: 400 }
      )
    }

    const serviceNames: Record<string, string> = {
      "basic-oil-change": "Basic Oil Change",
      "deep-oil-change": "Deep Oil Change",
      "premium-kitchen-service": "Premium Kitchen Service",
      "emergency-oil-service": "Emergency Oil Service",
    }

    const serviceName = serviceNames[service] || service

    const id = `booking-${Date.now()}`
    const createdAt = new Date().toISOString()

    const insertBooking = db.prepare(`
      INSERT INTO bookings (
        id,
        service_id,
        service_name,
        restaurant,
        date,
        time,
        address,
        notes,
        status,
        created_at
      )
      VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
    `)

    insertBooking.run(
      id,
      service,
      serviceName,
      restaurant,
      date,
      time,
      address,
      notes || "",
      "scheduled",
      createdAt
    )

    const booking = {
      id,
      service: service,
      serviceId: service,
      serviceName,
      date,
      time,
      restaurant,
      address,
      notes: notes || "",
      status: "scheduled",
      createdAt,
    }

    return NextResponse.json({
      success: true,
      message: "Booking created successfully.",
      booking,
    })
  } catch (error) {
    console.error("Booking error:", error)

    return NextResponse.json(
      {
        success: false,
        message: "Unable to create booking.",
      },
      { status: 500 }
    )
  }
}