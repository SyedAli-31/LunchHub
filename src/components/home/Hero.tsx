"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, Play } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

interface HeroSlide {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  image: string;
  primaryCTA: {
    text: string;
    href: string;
  };
  secondaryCTA: {
    text: string;
    href: string;
  };
}

const heroSlides: HeroSlide[] = [
  {
    id: 1,
    title: "Fresh Office Lunch Service",
    subtitle: "Ghar Jaisa Taste • Daily Fresh • Premium Quality",
    description:
      "500+ offices ka bharosa! Authentic Pakistani cuisine delivered fresh to your workplace. 4-week rotating menu with traditional flavors.",
    image: "/lunch.png",
    primaryCTA: {
      text: "Order Today",
      href: "https://wa.me/923486906754?text=Today ka lunch order karna hai",
    },
    secondaryCTA: {
      text: "View Menu",
      href: "/menu",
    },
  },
  {
    id: 2,
    title: "Special Shahi Haleem",
    subtitle: "Advance Order • Authentic Recipe • Premium Experience",
    description:
      "Original 6-hour slow-cooked haleem with traditional spices. Perfect for special occasions and winter months. Minimum 10 plates order.",
    image: "/Haleem-1.jpg",
    primaryCTA: {
      text: "Order Haleem",
      href: "https://wa.me/923486906754?text=Special haleem order karna hai",
    },
    secondaryCTA: {
      text: "Learn More",
      href: "#special-haleem",
    },
  },
  {
    id: 3,
    title: "Weekly Office Contracts",
    subtitle: "20% Savings • Dedicated Support • Priority Delivery",
    description:
      "Lock in weekly contracts for your office and save big! Dedicated account manager, priority delivery, and customized menu options.",
    image: "/corporate.jpg",
    primaryCTA: {
      text: "Weekly Plan",
      href: "https://wa.me/923486906754?text=Weekly contract ke baare mein jaanna hai",
    },
    secondaryCTA: {
      text: "Build Plan",
      href: "#meal-plans",
    },
  },
];

const HeroCarousel: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState<number>(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState<boolean>(true);
  const [isLoaded, setIsLoaded] = useState<boolean>(false);
  const [isTransitioning, setIsTransitioning] = useState<boolean>(false);

  // Create extended array for seamless infinite scroll
  const extendedSlides = [...heroSlides, heroSlides[0]]; // Add first slide at end for smooth transition

  // Preload first image safely
  useEffect(() => {
    const img = document.createElement("img");
    img.src = heroSlides[0].image;
    img.onload = () => setIsLoaded(true);
  }, []);

  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setIsTransitioning(true);
      setCurrentSlide((prev) => {
        const nextSlide = prev + 1;
        // If we reach the duplicate slide (index 3), smoothly reset to 0
        if (nextSlide === heroSlides.length) {
          // After animation completes, instantly jump to slide 0 without animation
          setTimeout(() => {
            setIsTransitioning(false);
            setCurrentSlide(0);
          }, 800); // Match transition duration
          return nextSlide; // Show duplicate slide briefly
        }
        setIsTransitioning(false);
        return nextSlide;
      });
    }, 3000);

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
    setIsAutoPlaying(false);
  };

  const goToPrevious = () => {
    setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length);
    setIsAutoPlaying(false);
  };

  const goToNext = () => {
    setIsTransitioning(true);
    setCurrentSlide((prev) => {
      const nextSlide = prev + 1;
      if (nextSlide === heroSlides.length) {
        setTimeout(() => {
          setIsTransitioning(false);
          setCurrentSlide(0);
        }, 800);
        return nextSlide;
      }
      setIsTransitioning(false);
      return nextSlide;
    });
    setIsAutoPlaying(false);
  };

  const currentSlideData = heroSlides[currentSlide % heroSlides.length];

  if (!isLoaded) {
    return (
      <section className="min-h-screen bg-gradient-to-br from-primary/10 to-primary/20 flex items-center justify-center">
        <div className="text-center">
          <div className="w-12 h-12 border-4 border-primary border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-muted-foreground">Loading...</p>
        </div>
      </section>
    );
  }

  return (
    <section className="relative min-h-screen overflow-hidden">
      {/* Background Images */}
      <div className="absolute inset-0">
        <motion.div
          className="flex w-full h-full"
          animate={{ x: `-${currentSlide * 100}%` }}
          transition={{
            duration: isTransitioning ? 0.8 : 0,
            ease: "easeInOut"
          }}
        >
          {extendedSlides.map((slide, index) => (
            <div key={`${slide.id}-${index}`} className="relative w-full h-full flex-shrink-0">
              <Image
                src={slide.image}
                alt={slide.title}
                fill
                className="object-cover"
                priority={index === 0}
                quality={100}
                unoptimized
              />
              <div className="absolute inset-0 bg-black/40"></div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Content Overlay */}
      <div className="relative z-10 min-h-screen flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 w-full">
          <div className="max-w-4xl">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentSlide % heroSlides.length}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="text-white space-y-6"
              >
                <motion.div
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                  className="inline-flex items-center px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-sm font-medium"
                >
                  <Play className="w-4 h-4 mr-2" />
                  {currentSlideData.subtitle}
                </motion.div>

                <motion.h1
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="text-4xl sm:text-5xl lg:text-7xl font-bold leading-tight"
                >
                  {currentSlideData.title}
                </motion.h1>

                <motion.p
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  className="text-xl sm:text-2xl leading-relaxed text-white/90 max-w-3xl"
                >
                  {currentSlideData.description}
                </motion.p>

                <motion.div
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  className="flex flex-col sm:flex-row gap-4 pt-4"
                >
                  <Button asChild size="lg" className="gradient-maroon-amber text-white hover:shadow-2xl text-lg px-8 py-4">
                    {currentSlideData.primaryCTA.href.startsWith("http") ? (
                      <a href={currentSlideData.primaryCTA.href} target="_blank" rel="noopener noreferrer">
                        {currentSlideData.primaryCTA.text}
                      </a>
                    ) : (
                      <Link href={currentSlideData.primaryCTA.href}>{currentSlideData.primaryCTA.text}</Link>
                    )}
                  </Button>

                  <Button asChild variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-black text-lg px-8 py-4 bg-white/10 backdrop-blur-sm">
                    {currentSlideData.secondaryCTA.href.startsWith("http") ? (
                      <a href={currentSlideData.secondaryCTA.href} target="_blank" rel="noopener noreferrer">
                        {currentSlideData.secondaryCTA.text}
                      </a>
                    ) : (
                      <Link href={currentSlideData.secondaryCTA.href}>{currentSlideData.secondaryCTA.text}</Link>
                    )}
                  </Button>
                </motion.div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={goToPrevious}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-all duration-300"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>

      <button
        onClick={goToNext}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-all duration-300"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Slide Dots */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex space-x-3">
        {heroSlides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${index === (currentSlide % heroSlides.length) ? "bg-white scale-125" : "bg-white/50 hover:bg-white/75"
              }`}
          />
        ))}
      </div>

      {/* Progress Bar */}
      <div className="absolute bottom-0 left-0 w-full h-1 bg-white/20 z-20">
        <motion.div
          className="h-full bg-white"
          initial={{ width: "0%" }}
          animate={{ width: "100%" }}
          transition={{ duration: 3, ease: "linear", repeat: Infinity }}
          key={currentSlide % heroSlides.length}
        />
      </div>

      {/* Stats Overlay */}
      <motion.div
        className="absolute bottom-20 right-8 z-20 hidden lg:block"
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 0.8 }}
      >
        <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 text-white text-center grid gap-4">
          <div>
            <div className="text-3xl font-bold">50+</div>
            <div className="text-sm text-white/80">Happy Offices</div>
          </div>
          <div>
            <div className="text-3xl font-bold">4</div>
            <div className="text-sm text-white/80">Weekly Rotation</div>
          </div>
          <div>
            <div className="text-3xl font-bold">100%</div>
            <div className="text-sm text-white/80">Fresh Daily</div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default HeroCarousel;
