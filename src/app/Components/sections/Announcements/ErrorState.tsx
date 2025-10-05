// src/components/home/announcements/ErrorState.tsx
"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { AlertCircle } from "lucide-react"

export default function ErrorState({
  activeTab,
  onRetry,
  onSwitchTab,
}: {
  activeTab: "announcements" | "events"
  onRetry: () => void
  onSwitchTab: () => void
}) {
  return (
    <section className="py-20 bg-gradient-to-br from-orange-50 to-amber-50">
      <div className="container text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
          ডেটা লোড করতে সমস্যা হয়েছে
        </h2>
        <Card className="border-0 shadow-xl bg-white/80 backdrop-blur-sm max-w-2xl mx-auto">
          <CardContent className="p-8 text-center">
            <AlertCircle className="w-16 h-16 text-orange-500 mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              ডেটা লোড করতে সমস্যা হয়েছে
            </h3>
            <p className="text-gray-600 mb-6">
              {activeTab === "announcements"
                ? "ঘোষণাগুলো লোড করতে সমস্যা হচ্ছে।"
                : "ইভেন্টগুলো লোড করতে সমস্যা হচ্ছে।"}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button onClick={onRetry} className="bg-orange-600 hover:bg-orange-700 text-white">
                আবার চেষ্টা করুন
              </Button>
              <Button variant="outline" onClick={onSwitchTab}>
                অন্য ট্যাবে যান
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
