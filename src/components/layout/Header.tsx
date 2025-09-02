"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";

interface NavItem {
  name: string;
  href: string;
}

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const navigation: NavItem[] = [
    { name: "Home", href: "/" },
    { name: "Menu", href: "/menu" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
  ];

  const isActive = (href: string) => {
    if (href === "/" && pathname === "/") return true;
    if (href !== "/" && pathname.startsWith(href)) return true;
    return false;
  };

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [mobileMenuOpen]);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 glass-effect border-b border-border bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3" data-testid="logo-link">
            <div className="w-12 h-12 rounded-full bg-gradient-to-r from-momra-maroon to-momra-amber flex items-center justify-center shadow-lg relative overflow-hidden">
              <Image src="/logo.png" alt="logo" fill className="object-cover" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-foreground">LunchHub</h1>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                data-testid={`nav-link-${item.name.toLowerCase()}`}
              >
                <span
                  className={`text-foreground hover:text-primary transition-colors ${isActive(item.href) ? "text-primary font-medium" : ""
                    }`}
                >
                  {item.name}
                </span>
              </Link>
            ))}
          </nav>

          {/* CTA Button & Mobile Menu Toggle */}
          <div className="flex items-center space-x-4">
            <Button
              asChild
              className="hidden sm:flex bg-gradient-to-r from-momra-maroon to-momra-amber text-white hover:shadow-lg"
              size="sm"
              data-testid="header-order-button"
            >
              <a
                href="https://wa.me/923486906754"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Phone className="w-4 h-4 mr-2" />
                Order Now
              </a>
            </Button>

            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="sm"
              className="md:hidden p-2"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              data-testid="mobile-menu-button"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ x: "-100%" }}
            animate={{ x: 0 }}
            exit={{ x: "-100%" }}
            transition={{ type: "tween", duration: 0.3 }}
            className="fixed top-16 left-0 w-full max-h-[calc(100vh-4rem)] bg-background z-40 md:hidden overflow-y-auto border-b border-border"
            data-testid="mobile-menu"
          >
            <div className="p-6 space-y-6">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  data-testid={`mobile-nav-link-${item.name.toLowerCase()}`}
                >
                  <span
                    className={`block text-lg font-medium text-foreground hover:text-primary transition-colors ${isActive(item.href) ? "text-primary" : ""
                      }`}
                  >
                    {item.name}
                  </span>
                </Link>
              ))}
              <div className="pt-4 border-t border-border">
                <Button
                  asChild
                  className="w-full bg-gradient-to-r from-momra-maroon to-momra-amber text-white justify-center"
                  data-testid="mobile-order-button"
                >
                  <Link
                    href="https://wa.me/923486906754"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Phone className="w-5 h-5 mr-2" />
                    Order Now
                  </Link>
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
