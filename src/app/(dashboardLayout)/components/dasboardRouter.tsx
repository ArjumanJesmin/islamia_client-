"use client"

import { useSession } from "next-auth/react"
import { useRouter } from "next/navigation"
import { useEffect } from "react"
import { Loader2 } from "lucide-react"

export default function DashboardRouter() {
  const { data: session, status } = useSession()
  const router = useRouter()

  useEffect(() => {
    if (status === "loading") return

    if (!session) {
      router.push("/auth/signin")
      return
    }

    // Redirect based on user role
    switch (session.user.role) {
      case "STUDENT":
        router.push("/student")
        break
      case "TEACHER":
        router.push("/teacher")
        break
      case "ADMIN":
        router.push("/admin")
        break
      case "PARENT":
        router.push("/parent")
        break
      default:
        router.push("/auth/signin")
    }
  }, [session, status, router])

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="text-center">
        <Loader2 className="h-8 w-8 animate-spin mx-auto text-blue-600" />
        <p className="mt-4 text-gray-600">ড্যাশবোর্ড লোড হচ্ছে...</p>
      </div>
    </div>
  )
}