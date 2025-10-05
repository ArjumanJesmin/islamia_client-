// src/app/(dashboardLayout)/layout.tsx
import type { Metadata } from "next"
import { Sidebar } from "./components/Sidebar"

export const metadata: Metadata = {
  title: "Dashboard | My School Management App",
  description: "Dashboard section of school management",
}

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="flex min-h-screen">
      {/* <Sidebar /> */}
      <main className="flex-1 p-6 bg-gray-50">{children}</main>
    </div>
  )
}
