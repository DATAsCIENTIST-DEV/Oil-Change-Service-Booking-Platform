import { NextResponse } from "next/server"

const services = [
  {
    id: "basic-oil-change",
    name: "Basic Oil Change",
    description: "Standard fryer oil change for restaurants.",
    price: 89,
    duration: "30 min",
    features: [
      "Complete oil replacement",
      "Fryer safety check",
      "Oil disposal included",
    ],
  },
  {
    id: "deep-oil-change",
    name: "Deep Oil Change",
    description: "Complete fryer oil replacement and cleaning.",
    price: 149,
    duration: "60 min",
    features: [
      "Complete oil replacement",
      "Deep fryer cleaning",
      "Fryer inspection",
    ],
  },
  {
    id: "premium-kitchen-service",
    name: "Premium Kitchen Service",
    description: "Oil change plus fryer inspection and maintenance.",
    price: 229,
    duration: "90 min",
    features: [
      "Complete oil replacement",
      "Deep fryer cleaning",
      "Full maintenance inspection",
      "Safety inspection",
    ],
  },
  {
    id: "emergency-oil-service",
    name: "Emergency Oil Service",
    description: "Priority oil change for urgent restaurant needs.",
    price: 299,
    duration: "45 min",
    features: [
      "Priority scheduling",
      "Complete oil replacement",
      "Emergency fryer check",
    ],
  },
]

export async function GET() {
  return NextResponse.json({
    success: true,
    services,
  })
}