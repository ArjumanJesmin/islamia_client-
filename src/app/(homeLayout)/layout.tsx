import Footer from "../Components/ui/footer/Footer"
import Navbar from "../Components/ui/Navbar/Navber"


export const metadata = {
  title: "Home | My School Management App",
  description: "Home layout section",
}

export default function HomeLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar/>
      <main className="flex-1 pt-16">{children}</main>
      <Footer />
    </div>
  )
}
