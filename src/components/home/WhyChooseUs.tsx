'use client';

import { motion } from "framer-motion";
import Link from "next/link";
import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import {
  CheckCircle,
  Clock,
  Users,
  Star,
  ChefHat,
  Truck,
  Phone,
  MessageCircle,
  ShoppingCart,
  Calendar,
  ThumbsUp,

  Award,
  Timer,
  Heart
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import HeroCarousel from "./Hero";
import Image from "next/image";

interface HowItWorksStep {
  icon: React.ElementType;
  title: string;
  description: string;
}

interface PopularDish {
  name: string;
  description: string;
  price: string;
  image: string;
}

const Home: React.FC = () => {

  
  const slides = ["/Haleem-3.png", "/Haleem-2.png"];
  const [current, setCurrent] = useState(0);

    // Auto-slide every 4 sec (optional)
    useEffect(() => {
      const timer = setInterval(() => {
        setCurrent((prev) => (prev + 1) % slides.length);
      }, 4000);
      return () => clearInterval(timer);
    }, [slides.length]);

    const prevSlide = () => {
      setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
    };

    const nextSlide = () => {
      setCurrent((prev) => (prev + 1) % slides.length);
    };

  const features = [
  
    {
      icon: Heart,
      title: "Fresh & Homely",
      desc: "Prepared daily with fresh ingredients and traditional recipes",
    },
    {
      icon: Clock,
      title: "Reliable Service",
      desc: "Consistent quality and on-time delivery every day",
    },
    {
      icon: Users,
      title: "Community Focus",
      desc: "Building lasting relationships with our corporate clients",
    },
  ];

  const howItWorks: HowItWorksStep[] = [
    {
      icon: MessageCircle,
      title: "WhatsApp Se Order",
      description: "Simple WhatsApp message bhejein ya call karein",
    },
    {
      icon: ChefHat,
      title: "Fresh Cooking",
      description: "Hum fresh ingredients se daily cooking karte hain",
    },
    {
      icon: Truck,
      title: "Office Delivery",
      description: "Time par aapke office mein delivery kar dete hain",
    },
  ];

  const popularDishes: PopularDish[] = [
    {
      name: "Chicken Biryani",
      description: "Special Friday biryani with raita",
      price: "From ₨350",
      image: "/biryani.jpg",
    },
    {
      name: "Shahi Beef Haleem",
      description: "Authentic Shahi Beef haleem (advance order)",
      price: "₨200/plate",
      image: "/Haleem-1.jpg",
    },
    {
      name: "Chicken Karahi",
      description: "Homestyle chicken karahi with fresh naan",
      price: "From ₨580",
      image: "/karahi.jpg",
    },
  ];

  
  return (
    <div className="min-h-screen">
      {/* Hero Carousel Section */}
      <HeroCarousel />

      {/* Special Haleem Section */}
      <section id="special-haleem" className="py-16 md:py-20 bg-gradient-to-r from-red-50 to-orange-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
            {/* Left Carousel */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="order-2 lg:order-1"
            >
              <div className="relative w-full h-[500px] overflow-hidden rounded-2xl shadow-2xl">
                {slides.map((src, index) => (
                  <motion.div
                    key={src}
                    className="absolute inset-0 w-full h-full"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: index === current ? 1 : 0 }}
                    transition={{ duration: 0.8 }}
                  >
                    <Image
                      src={src}
                      alt={`Special Haleem ${index + 1}`}
                      fill
                      className="object-cover rounded-2xl"
                      priority={index === 0}
                    />
                  </motion.div>
                ))}

                {/* Controls */}
                <button
                  onClick={prevSlide}
                  className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/40 p-2 rounded-full text-white"
                >
                  <ChevronLeft className="w-6 h-6" />
                </button>
                <button
                  onClick={nextSlide}
                  className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/40 p-2 rounded-full text-white"
                >
                  <ChevronRight className="w-6 h-6" />
                </button>

                {/* Dots */}
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                  {slides.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={() => setCurrent(idx)}
                      className={`w-3 h-3 rounded-full ${idx === current ? "bg-red-600" : "bg-white/70"
                        }`}
                    />
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Right Content (as it is) */}
            <motion.div
              className="space-y-6 order-1 lg:order-2"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              {/* tumhara jo text tha wahi */}
              <div className="space-y-4">
                <div className="inline-flex items-center px-4 py-2 bg-red-100 text-red-700 rounded-full text-sm font-medium">
                  🔥 Special Order Exclusive
                </div>
                <h2 className="hidden md:inline-flex text-3xl sm:text-4xl md:text-5xl font-bold">
                  Special Shahi Piyala Haleem
                </h2>
                <p className="md:hidden inline-flex text-3xl sm:text-4xl md:text-5xl font-bold">Special Shahi Piyala Haleem</p>
                <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
                  Original recipe se banaya gaya authentic haleem. Special occasions ke liye perfect.
                  Advance order required for fresh preparation.
                </p>
              </div>

              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                  <span className="text-sm md:text-base">Traditional Recipe, Authentic Taste</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                  <span className="text-sm md:text-base">Premium quality meat</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                  <span className="text-sm md:text-base">Minimum 10 plates per order</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                  <span className="text-sm md:text-base">Advance notice required for bulk order</span>
                </div>
              </div>

              {/* features, price, button ... baki sab same */}
            </motion.div>
          </div>



        </div>
      </section>

      {/* Popular Dishes Section */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-12 md:mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
              Most Loved Dishes
            </h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
              Our bestsellers, crafted with authentic flavors and trusted by our valued customers.
            </p>

          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {popularDishes.map((dish, index) => (
              <motion.div
                key={dish.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                data-testid={`popular-dish-${dish.name.toLowerCase().replace(/\s+/g, '-')}`}
              >
                <Card className="overflow-hidden hover:shadow-xl transition-shadow group h-full">
                  <div className="relative w-full h-48">
                    <Image
                      src={dish.image}
                      alt={dish.name}
                      fill
                      className="object-cover rounded-t-xl group-hover:scale-105 transition-transform duration-300"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      priority
                    />
                 
                  <div className="absolute top-4 right-4 bg-primary text-white px-2 py-1 rounded-full text-sm font-bold">
                    {dish.price}
                    </div>
                  </div>
                  <CardHeader>
                    <CardTitle className="text-xl">{dish.name}</CardTitle>
                    <CardDescription>{dish.description}</CardDescription>
                  </CardHeader>
                  <CardContent className="mt-auto">
                    <Button
                      asChild
                      className="w-full bg-gradient-to-r from-momra-maroon via-momra-warms to-momra-amber text-white"
                    >
                      <Link
                        href={`https://wa.me/923486906754?text=I want to order ${dish.name} for my office. Quantity ( ?)`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center"
                      >
                        <ShoppingCart className="w-4 h-4 mr-2" />
                        Order Now
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-16 md:py-20 bg-gradient-to-r from-orange-50 to-red-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-12 md:mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">Kaise Order Karein?</h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
              3 simple steps mein aapka fresh lunch ready! No app download, no complications.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {howItWorks.map((step, index) => (
              <motion.div
                key={step.title}
                className="text-center relative"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                data-testid={`step-${index + 1}`}
              >
                {/* Step Number */}
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-8 h-8 bg-red-600 text-white rounded-full flex items-center justify-center text-sm font-bold z-10">
                  {index + 1}
                </div>

                <div className="bg-white p-6 md:p-8 rounded-2xl shadow-lg">
                  <div className="w-16 h-16 bg-gradient-to-r from-momra-maroon via-momra-warms to-momra-amber rounded-full flex items-center justify-center mx-auto mb-6">
                    <step.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold mb-4">{step.title}</h3>
                  <p className="text-gray-600">{step.description}</p>
                </div>

                {/* Arrow for desktop */}
                {index < howItWorks.length - 1 && (
                  <div className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2 text-red-600">
                    <div className="w-8 h-8 text-2xl">→</div>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

    

      {/* Interactive Pricing Section */}
      <section className="py-16 md:py-20 bg-gradient-to-r from-orange-50 to-red-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-12 md:mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">Pricing Plans</h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
              Choose the perfect plan for your office size. Special discounts on Bulk orders!
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <Card className="relative overflow-hidden h-full">
                <CardHeader className="text-center">
                  <CardTitle className="text-2xl">Daily Order</CardTitle>
                  <CardDescription>Perfect for small teams</CardDescription>
                  <div className="text-4xl font-bold text-red-600 mt-4">₨300-350</div>
                  <div className="text-sm text-gray-500">per person</div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                      <span className="text-sm">Fresh daily cooking</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                      <span className="text-sm">Same day delivery</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                      <span className="text-sm">No minimum quantity</span>
                    </div>
                  </div>
                  <Button
                    asChild
                    className="w-full"
                    variant="outline"
                  >
                    <Link
                      href="https://wa.me/923486906754?text=I want daily lunch orders"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center"
                    >
                      Start Daily Orders
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="relative overflow-hidden border-red-500 shadow-xl h-full">
                <div className="absolute top-0 left-0 right-0 bg-red-600 text-white text-center py-2 text-sm font-medium">
                  Most Popular
                </div>
                <CardHeader className="text-center pt-12">
                  <CardTitle className="text-2xl">Weekly Contract</CardTitle>
                  <CardDescription>Best value for offices</CardDescription>
                  <div className="text-4xl font-bold text-red-600 mt-4">₨280-320</div>
                  <div className="text-sm text-gray-500">per person</div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                      <span className="text-sm">20% discount on daily rates</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                      <span className="text-sm">Priority delivery</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                      <span className="text-sm">Dedicated support</span>
                    </div>
                  
                  </div>
                  <Button
                    asChild
                    className="w-full bg-gradient-to-r from-momra-maroon via-momra-warms to-momra-amber text-white"
                  >
                    <Link
                      href="https://wa.me/923486906754?text=I want weekly contract for my office"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center"
                    >
                      Get Weekly Contract
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="md:col-span-2 lg:col-span-1"
            >
              <Card className="relative overflow-hidden h-full">
                <CardHeader className="text-center">
                  <CardTitle className="text-2xl">Bulk Orders</CardTitle>
                  <CardDescription>For large orders</CardDescription>
                  <div className="text-4xl font-bold text-red-600 mt-4">₨250-300</div>
                  <div className="text-sm text-gray-500">per person</div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                      <span className="text-sm">Available for a minimum of 50 servings</span>
                    </div>
                    
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                      <span className="text-sm">Custom packaging</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                      <span className="text-sm">Menu customization</span>
                    </div>
                  </div>
                  <Button
                    asChild
                    className="w-full"
                    variant="outline"
                  >
                    <Link
                      href="https://wa.me/923486906754?text=I need bulk order for an event"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center"
                    >
                      Plan Event
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Premium Special Occasions Section */}
      <section id="special-occasions" className="py-20 md:py-14 bg-gradient-to-br from-amber-50 via-orange-50 to-red-50 relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-20 left-10 w-64 h-64 bg-gradient-to-r from-amber-400 to-orange-500 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-80 h-80 bg-gradient-to-r from-red-400 to-pink-500 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Section Header */}
          <motion.div
            className="text-center mb-16 md:mb-20"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-amber-100 to-orange-100 rounded-full text-amber-800 font-semibold text-lg mb-6">
              <Star className="w-5 h-5 mr-2 text-amber-600" />
              Premium Special Occasions
            </div>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-8 bg-gradient-to-r from-amber-800 via-red-700 to-orange-800 bg-clip-text text-transparent">
              Ghar Ki Dawat Ka
              <br />
              <span className="text-3xl sm:text-4xl md:text-5xl">Luxury Experience</span>
            </h2>
            <p className="text-lg md:text-xl text-slate-600 max-w-4xl mx-auto leading-relaxed">
              Special occasions deserve special food. Transform your home gatherings with our premium haleem and biryani
              - carefully crafted for memorable celebrations with family and friends.
            </p>
          </motion.div>

          {/* Premium Food Cards */}
          <div className="grid lg:grid-cols-2 gap-8 md:gap-12 mb-16 md:mb-20">
            {/* Premium Haleem Card */}
            <motion.div
              className="group relative"
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <Card className="overflow-hidden md:w-full w-80 h-full border-0 shadow-2xl bg-gradient-to-br from-white via-amber-50 to-orange-50 group-hover:shadow-3xl transition-all duration-500">
                <div className="relative h-64 md:h-80 overflow-hidden">
                  
                    <Image
                      src="/Haleem-1.jpg"
                      alt="Special Hyderabadi Haleem"
                      fill
                      className="object-cover rounded-2xl shadow-2xl"
                      priority
                    />
                 
                  <div className="absolute top-4 left-4 bg-gradient-to-r from-amber-500 to-orange-500 text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg">
                    🏆 Trending Dish
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                </div>

                <CardContent className="p-6 md:p-8 relative">
                  <div className="absolute -top-6 left-6 md:left-8 w-12 h-12 bg-gradient-to-r from-amber-500 to-orange-500 rounded-full flex items-center justify-center shadow-xl">
                    <ChefHat className="w-6 h-6 text-white" />
                  </div>

                  <div className="mt-4 space-y-6">
                    <div>
                      <h3 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-amber-700 to-red-700 bg-clip-text text-transparent mb-3">
                        Premium Shahi Beef Haleem
                      </h3>
                      <p className="text-slate-600 leading-relaxed text-base md:text-lg">
                        Made with premium beef, wheat and aromatic spices - perfect for family gatherings, dawats, and special events.
                      </p>
                    </div>

                    <div className="space-y-3">
                      <div className="flex items-center text-slate-700">
                        <Timer className="w-5 h-5 mr-3 text-amber-600 flex-shrink-0" />
                        <span className="font-medium text-sm md:text-base">Prepared with Premium Ingredients & Spices</span>
                      </div>
                      <div className="flex items-center text-slate-700">
                        <Award className="w-5 h-5 mr-3 text-amber-600 flex-shrink-0" />
                        <span className="font-medium text-sm md:text-base">Premium Beef & authentic recipes</span>
                      </div>
                      <div className="flex items-center text-slate-700">
                        <Users className="w-5 h-5 mr-3 text-amber-600 flex-shrink-0" />
                        <span className="font-medium text-sm md:text-base">Perfect for 15+ guests</span>
                      </div>
                    </div>

                    <div className="border-t border-amber-200 pt-6">
                      <div className="flex items-center justify-between mb-6">
                        <div>
                          <p className="text-sm text-slate-500 uppercase tracking-wide font-semibold">Starting From</p>
                          <p className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-amber-700 to-red-700 bg-clip-text text-transparent">
                            ₨600<span className="text-lg">/Kg</span>
                          </p>
                        </div>
                        <div className="text-right">
                          <p className="text-sm text-slate-500">Minimum Order</p>
                          <p className="text-lg md:text-xl font-bold text-slate-700">5 Kg</p>
                        </div>
                      </div>

                      <Button
                        asChild
                        size="lg"
                        className="w-full bg-gradient-to-r from-momra-maroon via-momra-warms to-momra-amber text-white hover:shadow-2xl text-base md:text-lg py-4 group-hover:scale-105 transition-transform duration-300"
                        data-testid="dawat-haleem-order"
                      >
                        <Link
                          href="https://wa.me/923486906754?text=Ghar ki dawat ke liye premium shahi haleem order karna hai."
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center justify-center"
                        >
                          <MessageCircle className="w-5 h-5 mr-3" />
                          Order Premium Haleem
                          <Star className="w-5 h-5 ml-3" />
                        </Link>
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Premium Biryani Card */}
            <motion.div
              className="group relative"
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <Card className="overflow-hidden md:w-full w-80 h-full border-0 shadow-2xl bg-gradient-to-br from-white via-orange-50 to-red-50 group-hover:shadow-3xl transition-all duration-500">
                <div className="relative h-64 md:h-80 overflow-hidden">
                 
                    <Image
                      src="/biryani.jpg"
                      alt="Special Hyderabadi Haleem"
                      fill
                      className="object-cover rounded-2xl shadow-2xl"
                      priority
                    />
                 
                  <div className="absolute top-4 left-4 bg-gradient-to-r from-red-500 to-pink-500 text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg">
                    🔥 Most Popular
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                </div>

                <CardContent className="p-6 md:p-8 relative">
                  <div className="absolute -top-6 left-6 md:left-8 w-12 h-12 bg-gradient-to-r from-red-500 to-pink-500 rounded-full flex items-center justify-center shadow-xl">
                    <ShoppingCart className="w-6 h-6 text-white" />
                  </div>

                  <div className="mt-4 space-y-6">
                    <div>
                      <h3 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-red-700 to-pink-700 bg-clip-text text-transparent mb-3">
                        Special Occasion Biryani
                      </h3>
                      <p className="text-slate-600 leading-relaxed text-base md:text-lg">
                        Fragrant basmati rice layered with tender chicken or Beef, cooked with premium and traditional style.
                        Perfect centerpiece for your special events and family gatherings.
                      </p>
                    </div>

                    <div className="space-y-3">
                      <div className="flex items-center text-slate-700">
                        <Timer className="w-5 h-5 mr-3 text-red-600 flex-shrink-0" />
                        <span className="font-medium text-sm md:text-base">Traditional cooking method</span>
                      </div>
                      <div className="flex items-center text-slate-700">
                        <Award className="w-5 h-5 mr-3 text-red-600 flex-shrink-0" />
                        <span className="font-medium text-sm md:text-base">Premium rice & quality</span>
                      </div>
                      <div className="flex items-center text-slate-700">
                        <Users className="w-5 h-5 mr-3 text-red-600 flex-shrink-0" />
                        <span className="font-medium text-sm md:text-base">Chicken or Beef options</span>
                      </div>
                    </div>

                    <div className="border-t border-red-200 pt-6">
                      <div className="flex items-center justify-between mb-6">
                        <div>
                          <p className="text-sm text-slate-500 uppercase tracking-wide font-semibold">Starting From</p>
                          <p className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-red-700 to-pink-700 bg-clip-text text-transparent">
                            ₨400<span className="text-lg">/plate</span>
                          </p>
                        </div>
                        <div className="text-right">
                          <p className="text-sm text-slate-500">Minimum Order</p>
                          <p className="text-lg md:text-xl font-bold text-slate-700">5 Kg</p>
                        </div>
                      </div>

                      <Button
                        asChild
                        size="lg"
                        className="w-full bg-gradient-to-r from-red-600 to-pink-600 hover:from-red-700 hover:to-pink-700 text-white hover:shadow-2xl text-base md:text-lg py-4 group-hover:scale-105 transition-transform duration-300"
                        data-testid="dawat-biryani-order"
                      >
                        <Link
                          href="https://wa.me/923486906754?text=Ghar ki dawat ke liye special biryani order karna hai."
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center justify-center"
                        >
                          <MessageCircle className="w-5 h-5 mr-3" />
                          Order Special Biryani
                          <Star className="w-5 h-5 ml-3" />
                        </Link>
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>

          {/* Fresh Food Promise Section */}
          <section className="py-16 md:py-20 bg-gradient-to-r from-green-50 to-blue-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true }}
                  className="order-2 lg:order-1"
                >
                  <div className="relative w-full h-[300px] md:h-[500px]"> {/* Adjust height as needed */}
                     <Image
                                src="/fresh.png"
                                alt="LunchHub Kitchen"
                                width={600}
                                height={400}
                                className="rounded-3xl shadow-2xl object-cover w-full h-auto"
                              />
                  </div>
                </motion.div>

                <motion.div
                  className="space-y-6 order-1 lg:order-2"
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  viewport={{ once: true }}
                >
                  <div className="space-y-4">
                    <div className="inline-flex items-center px-4 py-2 bg-green-100 text-green-700 rounded-full text-sm font-medium">
                      🚚 Fresh Food, Delivered Daily!
                    </div>
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold">
                      Food That Makes You Smile :)
                    </h2>
                    <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
                      Upgrade to fresh and delicious meals delivered to your doorstep. Let Momra Foods take care of everyday meals,
                      so you can focus on what matters most - your work and success!
                    </p>
                  </div>

                  <div className="space-y-4">
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                      <span className="text-sm md:text-base">Daily fresh cooking with premium ingredients</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                      <span className="text-sm md:text-base">Temperature-controlled delivery system</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                      <span className="text-sm md:text-base">Hygienic packaging and handling</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                      <span className="text-sm md:text-base">On-time delivery guarantee</span>
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-4">
                    <Button
                      asChild
                      size="lg"
                      className="bg-gradient-to-r from-momra-maroon via-momra-warms to-momra-amber text-white hover:shadow-xl"
                      data-testid="fresh-food-order"
                    >
                      <Link
                        href="https://wa.me/923486906754?text=I want fresh food delivery for my office"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center"
                      >
                        <MessageCircle className="w-5 h-5 mr-2" />
                        Order Now!
                      </Link>
                    </Button>

                    <Button
                      asChild
                      variant="outline"
                      size="lg"
                      className="hover:shadow-lg"
                      data-testid="fresh-food-talk"
                    >
                      <Link href="tel:+923486906754" className="inline-flex items-center justify-center">
                        <Phone className="w-5 h-5 mr-2" />
                        Talk to us?
                      </Link>
                    </Button>
                  </div>
                </motion.div>
              </div>
            </div>
          </section>
      
          
        </div>
      </section>
      


      {/* Features Section */}
      <section className="py-6 md:py-10 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Heading */}
          <motion.div
            className="text-center mb-12 md:mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
              Our Core Values
            </h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
              We&apos;re committed to providing the best office lunch experience with authentic flavors, reliable service, and genuine care for our community.
            </p>
          </motion.div>

          {/* Features Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon; // grab the icon component
              return (
                <motion.div
                  key={feature.title}
                  className="text-center p-6 md:p-8 bg-gradient-to-br from-red-50 to-orange-50 rounded-2xl"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  data-testid={`feature-${feature.title.toLowerCase().replace(/\s+/g, '-')}`}
                >
                  <div className="w-16 h-16 bg-gradient-to-r from-momra-maroon via-momra-warms to-momra-amber rounded-full flex items-center justify-center mx-auto mb-6">
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold mb-4">{feature.title}</h3>
                  <p className="text-gray-600 text-sm md:text-base">{feature.desc}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>
     

      {/* Final CTA Section */}
      <section className="py-16 md:py-20 bg-gradient-to-r from-red-50 to-orange-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">Aaj Hi Order Karein!</h2>
            <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              20+ offices ka bharosa. Fresh food, on-time delivery, aur ghar jaisa taste.
              Aapka lunch ka problem solve karne ke liye hum yahan hain!
            </p>

            {/* Quick Action Buttons */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-2 gap-4 max-w-4xl mx-auto mb-8">
              <Button
                asChild
                size="lg"
                className="bg-gradient-to-r from-momra-maroon via-momra-warms to-momra-amber text-white hover:shadow-xl"
                data-testid="cta-quick-order"
              >
                <Link
                  href="https://wa.me/923486906754?text=Office k liye lunch order karna hai"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center"
                >
                  <MessageCircle className="w-5 h-5 mr-2" />
                  Order Now
                </Link>
              </Button>

              <Button
                asChild
                size="lg"
                variant="outline"
                className="hover:shadow-lg border-red-500 text-red-600 hover:bg-red-600 hover:text-white"
                data-testid="cta-weekly-plan"
              >
                <Link
                  href="/menu"
                 
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center"
                >
                  <Calendar className="w-5 h-5 mr-2" />
                  Menu Plan
                </Link>
              </Button>

              
            </div>

            {/* Contact Info */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 md:gap-6 text-gray-600">
              <div className="flex items-center space-x-2">
                <Phone className="w-5 h-5" />
                <span className="text-sm md:text-base">03486906754</span>
              </div>
              <div className="flex items-center space-x-2">
                <Clock className="w-5 h-5" />
                <span className="text-sm md:text-base">Mon-Fri: 9AM-6PM</span>
              </div>
              <div className="flex items-center space-x-2">
                <ThumbsUp className="w-5 h-5" />
                <span className="text-sm md:text-base">20+ Happy Offices</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;
