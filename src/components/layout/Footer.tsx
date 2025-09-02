'use client';

import Link from "next/link";
import { Phone, Mail, MessageCircle, Facebook, Instagram } from "lucide-react";
import Image from "next/image";


interface QuickLink {
  name: string;
  href: string;
}

const Footer: React.FC = () => {
  const quickLinks: QuickLink[] = [
    { name: "Home", href: "/" },
    { name: "Menu", href: "/menu" },
    { name: "About", href: "/about" },
    { name: "Corporate", href: "/corporate" },
    { name: "Contact", href: "/contact" },
  ];

  const services: string[] = [
    "Daily Orders",
    "Weekly Contracts",
    "Bulk Catering",
    "Event Catering",
    "Custom Menus",
  ];

  return (
    <footer className="bg-accent-foreground text-white py-12 md:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4 sm:col-span-2 lg:col-span-1">
            <div className="flex items-center space-x-3">
              {/* Logo */}
              <Link href="/" className="flex items-center space-x-3" data-testid="logo-link">
                <div className="w-12 h-12 rounded-full bg-gradient-to-r from-momra-maroon to-momra-amber flex items-center justify-center shadow-lg relative overflow-hidden">
                  <Image src="/logo.png" alt="logo" fill className="object-cover" />
                </div>
                <div>
                  <h1 className="text-xl md:text-2xl font-extrabold tracking-tight">LunchHub</h1>
               
                </div>
              </Link>
              <div>
                
               
              </div>
            </div>
            <p className="text-sm text-gray-300 leading-relaxed">
              Serving fresh, authentic Pakistani cuisine to offices across the city.
              Your trusted partner for daily lunch solutions.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="font-bold text-white mb-4">Quick Links</h4>
            <nav className="space-y-2">
              {quickLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  data-testid={`footer-link-${link.name.toLowerCase()}`}
                  className="block text-sm text-gray-300 hover:text-white transition-colors duration-200"
                >
                  {link.name}
                </Link>
              ))}
            </nav>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h4 className="font-bold text-white mb-4">Services</h4>
            <nav className="space-y-2">
              {services.map((service) => (
                <div
                  key={service}
                  className="block text-sm text-gray-300 hover:text-white transition-colors duration-200 cursor-default"
                >
                  {service}
                </div>
              ))}
            </nav>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="font-bold text-white mb-4">Contact</h4>
            <div className="space-y-3">
              <Link
                href="https://wa.me/923486906754"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-3 text-sm text-gray-300 hover:text-white transition-colors duration-200 group"
                data-testid="footer-whatsapp-link"
              >
                <MessageCircle className="w-4 h-4 flex-shrink-0 group-hover:text-green-400 transition-colors" />
                <span>WhatsApp Orders</span>
              </Link>
              <Link
                href="tel:+923486906754"
                className="flex items-center space-x-3 text-sm text-gray-300 hover:text-white transition-colors duration-200 group"
                data-testid="footer-phone-link"
              >
                <Phone className="w-4 h-4 flex-shrink-0 group-hover:text-blue-400 transition-colors" />
                <span>03486906754</span>
              </Link>
              <Link
                href="mailto:orders@momrafoods.com"
                className="flex items-center space-x-3 text-sm text-gray-300 hover:text-white transition-colors duration-200 group"
                data-testid="footer-email-link"
              >
                <Mail className="w-4 h-4 flex-shrink-0 group-hover:text-red-400 transition-colors" />
                <span>lunch-hub@gmail.com</span>
              </Link>
            </div>

            {/* Social Links */}
            <div className="mt-6">
              <h5 className="font-semibold mb-3 text-sm text-white">Follow Us</h5>
              <div className="flex space-x-3">
                <Link
                  href="#"
                  className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition-colors duration-200 group"
                  data-testid="social-facebook"
                  aria-label="Follow us on Facebook"
                >
                  <Facebook className="w-4 h-4 group-hover:text-blue-400 transition-colors" />
                </Link>
                <Link
                  href="#"
                  className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition-colors duration-200 group"
                  data-testid="social-instagram"
                  aria-label="Follow us on Instagram"
                >
                  <Instagram className="w-4 h-4 group-hover:text-pink-400 transition-colors" />
                </Link>
                <Link
                  href="https://wa.me/923486906754"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center hover:bg-green-600 transition-colors duration-200"
                  data-testid="social-whatsapp"
                  aria-label="Contact us on WhatsApp"
                >
                  <MessageCircle className="w-4 h-4 text-white" />
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-gray-700 mt-8 md:mt-12 pt-6 md:pt-8 flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
          <p className="text-sm text-gray-300 text-center md:text-left">
            © 2024 Momra Foods. All rights reserved.
          </p>
          <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-6 text-center">
            <Link
              href="/privacy"
              className="text-sm text-gray-300 hover:text-white transition-colors duration-200"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms"
              className="text-sm text-gray-300 hover:text-white transition-colors duration-200"
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
