import Image from "next/image";
import { Card } from "@/components/ui/card";
import { Star } from "lucide-react";

interface TestimonialCardProps {
  name: string;
  position: string;
  image: string;
  quote: string;
  rating: number;
  slideWidth: number;
}

const TestimonialCard = ({
  name,
  position,
  image,
  quote,
  rating,
  slideWidth,
}: TestimonialCardProps) => {
  return (
    <div
      className="flex-shrink-0 px-4 py-6"
      style={{ width: slideWidth }}
    >
      <Card className="bg-black/95 backdrop-blur-sm border-gray-800 h-full p-6 transition-all duration-300 hover:border-primary">
        <div className="flex items-center mb-4">
          <Image
            src={image}
            alt={name}
            width={64}
            height={64}
            className="rounded-full border-2 border-primary object-cover"
          />
          <div className="ml-4">
            <h3 className="font-semibold text-white">{name}</h3>
            <p className="text-sm text-gray-400">{position}</p>
          </div>
        </div>

        <div className="flex text-amber-500 mb-4">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              className="h-5 w-5"
              fill={i < rating ? "currentColor" : "none"}
            />
          ))}
        </div>

        <p className="text-gray-300 italic mb-4 leading-relaxed">
          &quot;{quote}&quot;
        </p>
      </Card>
    </div>
  );
};

export default TestimonialCard;