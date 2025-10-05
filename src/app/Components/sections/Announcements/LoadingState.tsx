// src/components/home/announcements/LoadingState.tsx
"use client"

import { Skeleton } from "@/components/ui/skeleton"

const LoadingState = () => (
  <section className="py-20 bg-gradient-to-br from-orange-50 to-amber-50">
    <div className="container">
      <div className="text-center mb-12">
        <Skeleton className="h-12 w-1/3 mx-auto mb-4" />
        <Skeleton className="h-6 w-1/2 mx-auto" />
      </div>
      <div className="flex justify-center mb-8">
        <Skeleton className="h-12 w-64 rounded-2xl" />
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <Skeleton className="h-96 rounded-2xl" />
        <Skeleton className="h-96 rounded-2xl" />
      </div>
    </div>
  </section>
)

export default LoadingState
