import React from 'react';
import Image from 'next/image';

interface CardProps {
  title: string[];
  description: string;
  imageUrl: string;
}

const Card: React.FC<CardProps> = ({ title, description, imageUrl }) => {
  return (
    <div
      className="relative w-full max-w-md sm:max-w-xs md:max-w-sm lg:max-w-md xl:max-w-lg h-auto overflow-hidden rounded-lg shadow-lg hover:bg-red-600 hover:text-white transition-colors duration-200 ease-in-out"
      role="article"
    >
      <Image
        src={imageUrl}
        alt={title.join(' ')}
        width={384}
        height={256}
        className="object-cover w-full h-48 sm:h-56 md:h-64 lg:h-72 rounded-t-lg"
        loading="lazy"
      />
      <div className="bg-black bg-opacity-60 p-4 text-white">
        <h3 className="text-base sm:text-lg md:text-xl lg:text-2xl font-outfit font-semibold">
          {title.map((line, index) => (
            <React.Fragment key={index}>
              {line}
              <br />
            </React.Fragment>
          ))}
        </h3>
        <p className="text-xs sm:text-sm md:text-base lg:text-lg font-outfit mt-2">
          {description}
        </p>
      </div>
    </div>
  );
};

export default Card;
