
import Link from 'next/link'
import { Button } from "@/components/ui/button"
import { Home, Search, BookOpen, School, Users, FileText } from "lucide-react"

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-slate-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 flex items-center justify-center p-4">
      <div className="max-w-2xl w-full text-center">
        
        {/* Animated Illustration */}
        <div className="relative mb-8">
          <div className="w-48 h-48 mx-auto mb-6 relative">
            {/* Book Stack */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-32 h-40 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg shadow-2xl transform rotate-6 animate-float">
                <div className="absolute inset-2 bg-white/10 rounded-md"></div>
              </div>
              <div className="w-32 h-40 bg-gradient-to-br from-green-500 to-green-600 rounded-lg shadow-2xl transform -rotate-6 animate-float delay-1000">
                <div className="absolute inset-2 bg-white/10 rounded-md"></div>
              </div>
              <div className="w-8 h-8 bg-yellow-400 rounded-full absolute -top-2 -right-2 animate-bounce shadow-lg"></div>
            </div>
            
            {/* 404 Text */}
            <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2">
              <span className="text-6xl font-black bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                404
              </span>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="space-y-6 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white">
            ওহো! পৃষ্ঠাটি হারিয়ে গেছে
          </h1>
          
          <p className="text-xl text-gray-600 dark:text-gray-300">
            এটি এমন দেখাচ্ছে যে আপনি যে পৃষ্ঠাটি খুঁজছেন তা আমরা খুঁজে পাচ্ছি না
          </p>
          
          <p className="text-gray-500 dark:text-gray-400 max-w-md mx-auto leading-relaxed">
            সম্ভবত URL-টি ভুল打了 হয়েছে, অথবা পৃষ্ঠাটি অন্য জায়গায় সরিয়ে নেওয়া হয়েছে। 
            নিচের বাটনগুলো ব্যবহার করে আপনার পথ খুঁজে নিন।
          </p>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
          <Button asChild size="lg" className="gap-2 shadow-lg">
            <Link href="/">
              <Home className="h-4 w-4" />
              হোমপেজ
            </Link>
          </Button>
          
          <Button asChild variant="outline" size="lg" className="gap-2">
            <Link href="/search">
              <Search className="h-4 w-4" />
              সার্চ করুন
            </Link>
          </Button>
        </div>

        {/* Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          {featureCards.map((feature, index) => (
            <Link 
              key={index}
              href={feature.href}
              className="group p-4 bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 hover:border-blue-300 dark:hover:border-blue-600 transition-all duration-300 hover:shadow-lg hover:scale-105"
            >
              <div className="flex flex-col items-center text-center space-y-2">
                <div className="p-3 bg-blue-100 dark:bg-blue-900/30 rounded-full group-hover:bg-blue-200 dark:group-hover:bg-blue-800/50 transition-colors">
                  {feature.icon}
                </div>
                <h3 className="font-semibold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400">
                  {feature.title}
                </h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  {feature.description}
                </p>
              </div>
            </Link>
          ))}
        </div>

        {/* Support Section */}
        <div className="bg-gradient-to-r from-blue-50 to-green-50 dark:from-blue-900/20 dark:to-green-900/20 rounded-xl p-6 border border-blue-200 dark:border-blue-800">
          <div className="flex items-center justify-center gap-3 mb-3">
            <Users className="h-5 w-5 text-blue-600" />
            <h4 className="text-lg font-semibold text-blue-900 dark:text-blue-100">
              সাহায্যের প্রয়োজন?
            </h4>
          </div>
          <p className="text-blue-800 dark:text-blue-200 mb-4">
            আমাদের সাপোর্ট টিম আপনার সাহায্যের জন্য প্রস্তুত
          </p>
          <div className="flex gap-3 justify-center">
            <Button asChild variant="outline" size="sm" className="border-blue-200 text-blue-700">
              <Link href="/help">
                হেল্প সেন্টার
              </Link>
            </Button>
            <Button asChild size="sm" className="bg-blue-600 hover:bg-blue-700">
              <Link href="/contact">
                যোগাযোগ করুন
              </Link>
            </Button>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-8 pt-6 border-t border-gray-200 dark:border-gray-700">
          <p className="text-gray-500 dark:text-gray-400 text-sm">
            © {new Date().getFullYear()} স্কুল ম্যানেজমেন্ট সিস্টেম 
            <span className="mx-2">•</span>
            শিক্ষার জন্য নিবেদিত
          </p>
        </div>
      </div>
    </div>
  )
}

// Feature cards data
const featureCards = [
  {
    href: "/academics",
    icon: <BookOpen className="h-6 w-6 text-blue-600" />,
    title: "একাডেমিক্স",
    description: "কোর্স ও পড়ালেখা"
  },
  {
    href: "/students",
    icon: <School className="h-6 w-6 text-green-600" />,
    title: "শিক্ষার্থী",
    description: "শিক্ষার্থী তথ্য"
  },
  {
    href: "/results",
    icon: <FileText className="h-6 w-6 text-purple-600" />,
    title: "ফলাফল",
    description: "পরীক্ষার রেজাল্ট"
  }
]