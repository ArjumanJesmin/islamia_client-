import Link from "next/link";
import { Button } from "@/components/ui/button";
import { GradientText } from "./Components/ui/gradient-text";
import { Home, Search } from "lucide-react";

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
              <GradientText
                variant="primary"
                size="6xl"
                weight="extrabold"
                align="center"
                responsive={false}
              >
                404
              </GradientText>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="space-y-6 mb-8">
          <GradientText
            variant="accent"
            size="4xl"
            weight="bold"
            align="center"
            responsive
            className="mb-2"
          >
            ওহো! পৃষ্ঠাটি হারিয়ে গেছে
          </GradientText>

          <p className="text-xl text-gray-600 dark:text-gray-300">
            এটি এমন দেখাচ্ছে যে আপনি যে পৃষ্ঠাটি খুঁজছেন তা আমরা খুঁজে পাচ্ছি না
          </p>

          <p className="text-gray-500 dark:text-gray-400 max-w-md mx-auto leading-relaxed">
            সম্ভবত URL-টি ভুল হয়েছে, অথবা পৃষ্ঠাটি অন্য জায়গায় সরিয়ে নেওয়া
            হয়েছে। নিচের বাটনগুলো ব্যবহার করে আপনার পথ খুঁজে নিন।
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
      </div>
    </div>
  );
}