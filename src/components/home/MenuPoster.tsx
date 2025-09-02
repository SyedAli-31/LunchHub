"use client";

import { FC } from "react";

import Link from "next/link";
import { motion, MotionConfig } from "framer-motion";
import { Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";

interface MenuItem {
  day: string;
  dish: string;
  serve?: string;
  special?: boolean;
}

interface Week {
  title: string;
  items: MenuItem[];
}

const weeks: Week[] = [
  {
    title: "Week 1",
    items: [
      { day: "Monday", dish: "Hyderabadi Khatti Daal", serve: "Steamed Rice or Roti" },
      { day: "Tuesday", dish: "Tomato Curry", serve: "Roti" },
      { day: "Wednesday", dish: "Moong Meethi Daal", serve: "2 Chapati" },
      { day: "Thursday", dish: "Chicken Karai", serve: "Roti" },
      { day: "Friday (Special)", dish: "Chicken Biryani", serve: "Raita", special: true },
    ],
  },
  {
    title: "Week 2",
    items: [
      { day: "Monday", dish: "Dahi ki Curry", serve: "2 Chapati or Rice" },
      { day: "Tuesday", dish: "Chana Salan", serve: "2 Chapati" },
      { day: "Wednesday", dish: "Chicken Nihari", serve: "2 Chapati" },
      { day: "Thursday", dish: "Mixed Sabzi", serve: "2 Chapati" },
      { day: "Friday (Special)", dish: "Chana Pulao", special: true },
    ],
  },
  {
    title: "Week 3",
    items: [
      { day: "Monday", dish: "Khatti Daal", serve: "2 Chapati" },
      { day: "Tuesday", dish: "Bhindi Salan", serve: "2 Chapati" },
      { day: "Wednesday", dish: "Moong Masoor Mix Daal", serve: "2 Chapati or Rice" },
      { day: "Thursday", dish: "Tomato Curry", serve: "2 Chapati" },
      { day: "Friday (Special)", dish: "Chicken Biryani", special: true },
    ],
  },
  {
    title: "Week 4",
    items: [
      { day: "Monday", dish: "Dahi ki Curry", serve: "Rice" },
      { day: "Tuesday", dish: "Chanay ki Daal", serve: "2 Chapati" },
      { day: "Wednesday", dish: "Chicken Salan", serve: "Roti" },
      { day: "Thursday", dish: "Seasonal Sabzi", serve: "2 Chapati" },
      { day: "Friday (Special)", dish: "Chana Pulao", special: true },
    ],
  },
];

const MenuPoster: FC = () => {
  return (
    <MotionConfig transition={{ duration: 0.5 }}>
      <div className="w-full max-w-6xl mx-auto p-6 sm:p-8 font-sans  bg-gradient-to-r from-red-50 to-orange-50 rounded-2xl shadow-2xl overflow-hidden">
        {/* Header */}
        <header className="flex flex-col md:flex-row md:items-center md:justify-between mb-8 gap-4 md:gap-0">
          <div className="flex items-center gap-4">
            {/* Logo */}
            <Link href="/" className="flex items-center space-x-3" data-testid="logo-link">
              <div className="w-14 h-14 rounded-full bg-gradient-to-r from-momra-maroon to-momra-amber flex items-center justify-center shadow-lg relative overflow-hidden">
                <Image src="/logo.png" alt="logo" fill className="object-cover" />
              </div>
              <div>
                <h1 className="text-2xl md:text-3xl font-extrabold tracking-tight">LunchHub</h1>
                <p className="text-sm opacity-80">Office Lunch Service • Fresh • Homely</p>
              </div>
            </Link>
           
          </div>

          <div className="flex flex-col items-start md:items-end">
            <div className="inline-flex items-center gap-2 px-3 py-2 bg-white/90 rounded-full shadow-md">
              <Phone size={16} />
              <span className="text-sm font-medium">Order: 03486906754</span>
            </div>
            <span className="mt-2 text-xs opacity-70">Mon-Fri • Packaged fresh • Contract & Single Orders</span>
          </div>
        </header>

        {/* Hero tagline */}
        <section className="mb-8">
          <motion.h2
            initial={{ y: -8, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="text-3xl md:text-4xl lg:text-5xl font-extrabold leading-tight"
          >
            4-Week Office Lunch Rotation
          </motion.h2>
          <p className="mt-2 text-sm md:text-base opacity-80">
            Authentic home-cooked meals, curated for busy offices. Reserve for the week or order daily.
          </p>
        </section>

        {/* Weeks grid */}
        <main className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {weeks.map((week, idx) => (
            <motion.div
              key={week.title}
              initial={{ scale: 0.98, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: idx * 0.06 }}
              className="rounded-xl bg-white p-6 shadow-lg border border-border hover:shadow-xl transition-shadow"
              data-testid={`week-${idx + 1}-card`}
            >
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg md:text-xl font-bold">{week.title}</h3>
                <div className="text-xs md:text-sm px-3 py-1 bg-accent text-accent-foreground rounded-full font-semibold">
                  Weekly Plan
                </div>
              </div>

              <ul className="space-y-3 text-sm md:text-base">
                {week.items.map((item) => (
                  <li
                    key={item.day}
                    className="flex items-center justify-between p-3 rounded-lg hover:bg-muted transition-colors"
                    data-testid={`menu-item-${item.day.toLowerCase().replace(/\s+/g, '-')}`}
                  >
                    <div>
                      <div className="flex items-baseline gap-2 md:gap-3">
                        <span className="font-medium">{item.day}</span>
                        {item.serve && (
                          <span className="text-xs md:text-sm text-muted-foreground">• {item.serve}</span>
                        )}
                      </div>
                      <div className="text-sm md:text-base text-muted-foreground">{item.dish}</div>
                    </div>

                    {item.special && (
                      <div className="ml-2 self-start">
                        <span className="px-3 py-1 rounded-full bg-gradient-to-r from-red-500 to-orange-500 text-white text-xs md:text-sm font-bold shadow-sm">
                          SPECIAL
                        </span>
                      </div>
                    )}
                  </li>
                ))}
              </ul>

              <div className="mt-4 text-xs md:text-sm text-muted-foreground flex items-center justify-between">
                <span>Fresh, hygienic & packed daily</span>
                <span>Portion: Office Standard</span>
              </div>
            </motion.div>
          ))}
        </main>

        {/* CTA bar */}
        <footer className="mt-8 flex flex-col md:flex-row items-start md:items-center justify-between bg-white/90 p-6 rounded-xl shadow-lg gap-4 md:gap-0">
          <div>
            <h4 className="font-bold text-sm md:text-base">
              Corporate? Bulk orders & weekly contracts
            </h4>
            <p className="text-xs md:text-sm text-muted-foreground">
              Dedicated account manager • On-time delivery • Menu customization
            </p>
          </div>

          <div className="flex flex-col items-start md:items-end gap-2">
            <Button asChild className="bg-gradient-to-r from-momra-maroon via-momra-warms to-momra-amber  text-white hover:shadow-lg" data-testid="menu-order-button">
              <Link href="https://wa.me/03486906754" target="_blank" rel="noopener noreferrer">
                Order Now
              </Link>
            </Button>
            <span className="text-xs md:text-sm text-muted-foreground">WhatsApp: 03486906754</span>
          </div>
        </footer>
      </div>
    </MotionConfig>
  );
};

export default MenuPoster;
