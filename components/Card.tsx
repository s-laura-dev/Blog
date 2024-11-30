// app/components/Card.tsx

import Link from "next/link";

interface CardProps {
  title: string;
  description: string;
  imageSrc: string;
  link: string;
}

export const Card = ({ title, description, imageSrc, link }: CardProps) => {
  console.log('CardProps:', title, description, imageSrc, link);
  return (
    <Link href={link} className="bg-white  overflow-hidden group transition-all duration-300 ease-in-out 
                 transform hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[4px_4px_0px_black]">
      <div className="h-48 overflow-hidden">
        <img src={imageSrc} alt={title} className="w-full h-full object-cover" />
      </div>

      {/* Content Section */}
      <div className="p-6">
        <h2 className="text-2xl font-bold text-black mb-2 group-hover:text-blue-600 transition-colors duration-300">
          {title}
        </h2>
        <p className="text-black mb-4">
          {description}
        </p>
        <span className="text-black group-hover:text-blue-700 font-medium">
          Read more →
        </span>
      </div>
    </Link>
  );
};


