// src/app/layout.tsx
import { Toaster } from "sonner"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { NotificationProvider } from "./Components/sections/Announcements/contexts/NotificationContext"

export const metadata = {
  title: "My School Management App",
  description: "A simple school management app built with Next.js",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="min-h-screen bg-background font-sans antialiased">
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
            <NotificationProvider>
          {children}
          </NotificationProvider>
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  )
}
