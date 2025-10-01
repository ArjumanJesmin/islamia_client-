"use client"

import { Swiper, SwiperSlide } from "swiper/react"
import { Navigation, Pagination, Autoplay, EffectFade } from "swiper/modules"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { useState, useEffect } from "react"

import "swiper/css"
import "swiper/css/navigation"
import "swiper/css/pagination"
import "swiper/css/effect-fade"

type HeroSectionProps = {
  title: string
  subtitle: string
  images: string[]
  ctaText?: string
  onCtaClick?: () => void
}

const HeroSection: React.FC<HeroSectionProps> = ({
  title,
  subtitle,
  images,
  ctaText = "Learn More",
  onCtaClick,
}) => {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const displayImages = images.length > 0 ? images : [
    "/api/placeholder/1920/1080?text=School+1",
    "/api/placeholder/1920/1080?text=School+2",
    "/api/placeholder/1920/1080?text=School+3"
  ]

  if (!mounted) {
    return (
      <section className="relative w-full h-[60vh] md:h-[70vh] lg:h-[80vh] flex items-center justify-center bg-gradient-to-br from-school-primary/10 to-school-secondary/10">
        <div className="container text-center">
          <div className="animate-pulse">
            <div className="h-12 bg-foreground/10 rounded-lg mb-4 mx-auto max-w-2xl"></div>
            <div className="h-6 bg-foreground/10 rounded mb-6 mx-auto max-w-md"></div>
            <div className="h-12 bg-foreground/10 rounded-lg mx-auto max-w-xs"></div>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section className="relative w-full h-[60vh] md:h-[70vh] lg:h-[80vh] overflow-hidden">
      {/* Background Carousel */}
      <Swiper
        modules={[Navigation, Pagination, Autoplay, EffectFade]}
        effect="fade"
        speed={1000}
        navigation={true}
        pagination={{ clickable: true }}
        autoplay={{ 
          delay: 5000,
          disableOnInteraction: false,
        }}
        loop={true}
        className="absolute inset-0 w-full h-full"
      >
        {displayImages.map((img, index) => (
          <SwiperSlide key={index} className="relative w-full h-full">
            <Image
              src={img}
              alt={`${title} - Slide ${index + 1}`}
              fill
              priority={index === 0}
              sizes="100vw"
              className="object-cover"
              onError={(e) => {
                const target = e.target as HTMLImageElement
                target.src = `/api/placeholder/1920/1080?text=Slide+${index + 1}`
              }}
            />
            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Content Overlay */}
      <div className="absolute inset-0 z-10 flex items-center justify-center">
        <div className="container text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 md:mb-6 leading-tight">
            {title}
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl text-gray-100 mb-6 md:mb-8 max-w-2xl mx-auto leading-relaxed">
            {subtitle}
          </p>
          {ctaText && (
            <Button
              onClick={onCtaClick}
              size="lg"
              className="bg-school-primary hover:bg-school-primary/90 text-white px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
            >
              {ctaText}
            </Button>
          )}
        </div>
      </div>
    </section>
  )
}

export default HeroSection