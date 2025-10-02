"use client"

import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import React from "react"

type NewsletterProps = {
  title?: string
  subtitle?: string
  onSubmit?: (email: string) => void
}

export default function Newsletter({
  title = "নিউজলেটার সাবস্ক্রাইব করুন",
  subtitle = "সর্বশেষ খবর ও আপডেট পেতে আপনার ইমেইল দিন",
  onSubmit
}: NewsletterProps) {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const form = e.currentTarget
    const email = (form.elements.namedItem("email") as HTMLInputElement).value
    if (onSubmit) onSubmit(email)
    form.reset()
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-background border border-border rounded-lg p-6 lg:p-8 flex flex-col lg:flex-row items-center justify-between gap-4 lg:gap-6"
    >
      {/* Text Section */}
      <div className="text-center lg:text-left flex-1">
        <h4 className="text-lg font-semibold text-foreground mb-1">{title}</h4>
        <p className="text-muted-foreground text-sm">{subtitle}</p>
      </div>

      {/* Input + Button */}
      <div className="flex flex-col sm:flex-row w-full lg:w-auto gap-3">
        <Input
          type="email"
          name="email"
          placeholder="আপনার ইমেইল ঠিকানা"
          className="flex-1 bg-background border-input text-foreground"
          required
        />
        <Button type="submit" className="bg-school-primary hover:bg-school-primary/90 whitespace-nowrap">
          সাবস্ক্রাইব
        </Button>
      </div>
    </form>
  )
}
