// src/components/home/announcements/helpers.ts
import { Bell, Calendar, AlertCircle } from "lucide-react"

// Function to return status color
export function getStatusColor(status: string) {
  switch (status) {
    case "active":
      return "text-green-600"
    case "upcoming":
      return "text-blue-600"
    case "ended":
      return "text-gray-500"
    default:
      return "text-muted-foreground"
  }
}

// Function to return status icon
export function getStatusIcon(status: string) {
  switch (status) {
    case "active":
      return Bell
    case "upcoming":
      return Calendar
    case "ended":
      return AlertCircle
    default:
      return AlertCircle
  }
}

// Function to return readable status text
export function getStatusText(status: string) {
  switch (status) {
    case "active":
      return "Ongoing"
    case "upcoming":
      return "Coming Soon"
    case "ended":
      return "Completed"
    default:
      return "Unknown"
  }
}
