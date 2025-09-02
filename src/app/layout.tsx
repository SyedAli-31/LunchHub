import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import FloatingWhatsApp from "@/components/ui/FloatingWhatsApp";
import CookieConsent from "@/components/ui/CookieConsent";
import { Toaster } from "@/components/ui/toaster";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "LunchHub",
  description: "Authentic Shahi Haleem and Homely Weekly Meals",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="font-sans antialiased">
        <Header />
        {children}
        <Toaster />
        <Footer />
        <FloatingWhatsApp phoneNumber="+923486906754" />
        <CookieConsent />
      </body>
    </html>
  );
}
