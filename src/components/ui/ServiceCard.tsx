'use client';

import { ReactNode, useCallback } from 'react';
import { motion, Variants } from 'framer-motion';
import { Card } from '@/components/ui/card';
import { useRouter } from 'next/navigation';

interface ServiceCardProps {
  id: number;
  title: string;
  description: string;
  icon: ReactNode;
  gradientColor: string;
  variants?: Variants;
}

const ServiceCard = ({
  id,
  title,
  description,
  icon,
  gradientColor,
  variants,
}: ServiceCardProps) => {
  const router = useRouter();

  const handleCardClick = useCallback(() => {
    router.push(`/service/${id}`);
  }, [id, router]);

  return (
    <motion.div
      variants={variants}
      onMouseEnter={() => router.prefetch(`/service/${id}`)} // 🧠 Prefetch the route
    >
      <Card
        onClick={handleCardClick}
        className="bg-gradient-to-br from-[#ffffff] to-[#dbd9e4] backdrop-blur-sm border border-violet-800 hover:border-amber-400 transition-all duration-300 overflow-hidden group cursor-pointer"
      >
        <div className="p-6 h-full flex flex-col">
          <div
            className={`w-14 h-14 rounded-lg mb-4 flex items-center justify-center ${gradientColor} text-white transform transition-transform group-hover:scale-110`}
          >
            {icon}
          </div>

          <h3 className="text-xl font-semibold mb-3 text-[#080662] group-hover:text-blue-600 transition-colors">
            {title}
          </h3>

          <p className="text-gray-800 mb-6 flex-grow">{description}</p>

          <div className="inline-flex items-center font-black text-[#0d0b32] hover:from-blue-300 hover:to-blue-700 transition-colors mt-auto">
            Learn More
            <svg
              className="ml-2 -mr-1 w-4 h-4"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                clipRule="evenodd"
              ></path>
            </svg>
          </div>
        </div>
      </Card>
    </motion.div>
  );
};

export default ServiceCard;
