"use client"
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Cookie, X } from 'lucide-react';

const CookieConsent = () => {
  // Check if user has already accepted cookies
  const [showConsent, setShowConsent] = useState(false);

  useEffect(() => {
    // Check if user accepted cookies previously
    const hasAccepted = localStorage.getItem('cookieConsent');
    if (!hasAccepted) {
      // Wait a bit before showing the banner
      const timer = setTimeout(() => {
        setShowConsent(true);
      }, 2000);
      
      return () => clearTimeout(timer);
    }
  }, []);

  const acceptCookies = () => {
    localStorage.setItem('cookieConsent', 'true');
    setShowConsent(false);
  };

  const declineCookies = () => {
    localStorage.setItem('cookieConsent', 'false');
    setShowConsent(false);
  };

  return (
    <AnimatePresence>
      {showConsent && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ type: 'spring', stiffness: 80, damping: 20 }}
          className="fixed bottom-0 left-0 right-0 z-50 p-4"
        >
          <div className="max-w-6xl mx-auto bg-gray-900/90 backdrop-blur-md border border-gray-800 rounded-lg shadow-2xl overflow-hidden">
            <div className="p-4 md:p-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
              <div className="flex items-start gap-4">
                <span className="bg-amber-500/20 p-3 rounded-full text-amber-500">
                  <Cookie className="h-6 w-6" />
                </span>
                <div>
                  <h3 className="text-lg font-semibold text-white mb-1">Cookie Consent</h3>
                  <p className="text-gray-300 text-sm md:text-base max-w-3xl">
                    We use cookies to enhance your browsing experience, analyze site traffic, and provide personalized content.
                    By clicking &quot;Accept All&quot;, you consent to our use of cookies as described in our Cookie Policy.

                  </p>
                </div>
              </div>
              
              <div className="flex items-center gap-2 md:gap-3 self-end md:self-auto ml-auto md:ml-0">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={declineCookies}
                  className="border-gray-700 text-gray-300 hover:bg-gray-800"
                >
                  Decline
                </Button>
                <Button
                  size="sm"
                  onClick={acceptCookies}
                  className="bg-amber-500 hover:bg-amber-600 text-gray-900 font-medium"
                >
                  Accept All
                </Button>
                <button 
                  onClick={declineCookies}
                  className="text-gray-400 hover:text-white p-1"
                  aria-label="Close cookie consent banner"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default CookieConsent;