'use client';

import { motion } from 'framer-motion';

interface FloatingWhatsAppProps {
  phoneNumber: string;
  message?: string;
}

const FloatingWhatsApp: React.FC<FloatingWhatsAppProps> = ({
  
  message = "Hello! I'd like to know more about your services.",
}) => {
 
  const whatsappUrl = `https://wa.me/923486906754?text=${encodeURIComponent(message)}`;

  return (
    <motion.div
      className="fixed bottom-6 left-6 z-50 flex flex-col items-start gap-3 md:bottom-8 md:left-8"
      initial={{ x: -100, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ delay: 0.5, duration: 0.5, type: 'spring', stiffness: 110 }}
    >
      {/* Tooltip */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8, y: 10 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ delay: 1.5, duration: 0.3 }}
        className="bg-gray-900/90 backdrop-blur-sm px-4 py-2 rounded-full shadow-xl border border-green-500/30 max-w-[90vw] sm:max-w-xs"
      >
        <p className="text-white text-sm font-medium text-wrap">
          Chat with us on WhatsApp
        </p>
      </motion.div>

      {/* WhatsApp Button */}
      <motion.div
        whileHover={{ scale: 1.1, rotate: 5 }}
        whileTap={{ scale: 0.9 }}
        className="relative"
      >
        <div className="absolute -inset-2 bg-gradient-to-r from-green-400 to-green-600 rounded-full blur-lg opacity-70 animate-pulse" />
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="relative bg-gradient-to-br from-green-500 to-green-600 text-white p-4 rounded-full flex items-center justify-center shadow-xl border-2 border-white/20 hover:border-white/40 transition-all duration-300"
          aria-label="Chat on WhatsApp"
        >
          {/* Official WhatsApp Logo */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            fill="currentColor"
            viewBox="0 0 448 512"
            className="w-8 h-8"
          >
            <path d="M380.9 97.1C339-3.1 225.2-32 135.2 20.5 45.3 73.1 9.5 181.3 50.4 276.1l-34.5 96.7c-5.5 15.3 9.5 29.5 24.6 24.7l98.2-32.2c94.5 49.6 208.7 15.5 259.4-79.5 50.7-95 15.4-209.3-85.2-246.4zM224 372c-39.8 0-77.3-15.5-105.4-43.6C90.5 300.4 75 263 75 223.2c0-39.7 15.5-77.2 43.6-105.3C146.8 90.6 184.3 75 224 75c39.7 0 77.2 15.5 105.3 43.6C357.5 146.1 373 183.5 373 223.2c0 39.8-15.5 77.2-43.7 105.3C301.2 356.5 263.7 372 224 372zm58.3-113.4l-24.7-7.7c-3.3-1.1-7-.3-9.4 2.2l-11 11c-22.8-11.8-41.5-30.3-53.3-53.3l11-11c2.5-2.5 3.3-6.2 2.2-9.4l-7.7-24.7c-1.8-5.9-8.2-9.1-14.1-7.3l-17.3 5.3c-4.7 1.5-8 5.6-8.3 10.4-.7 12.6 1.6 25.1 6.5 36.7 15.5 36.2 43.9 64.6 80.1 80.1 11.6 4.9 24.1 7.2 36.7 6.5 4.9-.3 8.9-3.6 10.4-8.3l5.3-17.3c1.8-5.8-1.4-12.2-7.3-14z" />
          </svg>
        </a>
      </motion.div>
    </motion.div>
  );
};

export default FloatingWhatsApp;
