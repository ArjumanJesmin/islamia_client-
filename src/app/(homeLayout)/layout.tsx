import { Toaster } from "sonner";
import "../globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import Navbar from "../Components/ui/Navbar/Navber";
import Footer from "../Components/ui/footer/Footer";

export const metadata = {
  title: "My School Management App",
  description: "A simple school management app built with ",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="min-h-screen bg-background font-sans antialiased">
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
          <div className="min-h-screen flex flex-col">
            <Toaster />
            <main className="flex-1 pt-16">
              <Navbar />
              {children}
              <Footer />
            </main>
          </div>
        </ThemeProvider>
  
      </body>
    </html>
  );
}
