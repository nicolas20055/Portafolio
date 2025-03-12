import React, { useState, useEffect } from 'react';

export const CardInfoAnimated = ({ title, content, images }) => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const imageWidth = 150;
  const animationSpeed = 1;
  const containerWidth = 800;
  const duplicatedImages = [...images, ...images];
  const totalContentWidth = duplicatedImages.length * imageWidth;

  useEffect(() => {
    const timer = setInterval(() => {
      setScrollPosition((prevPosition) => {
        let newPosition = prevPosition + animationSpeed;
        if (newPosition > images.length * imageWidth) {
          newPosition = animationSpeed;
        }
        return newPosition;
      });
    }, 20);

    return () => clearInterval(timer);
  }, [images, animationSpeed, imageWidth]);

  return (
    <div className="w-10/12  gap-52 sm:w-64 md:w-72 lg:w-96 xl:w-[800px] rounded-lg overflow-hidden shadow-lg bg-transparent border border-gray-200 transition-all duration-300 ease-in-out hover:scale-105 h-[400px]">
      <div className="px-6 py-4">
        <h2 className="font-semibold text-xl text-gray-100 truncate flex justify-center items-center ">{title}</h2>
      </div>

      <div className="px-6 py-4 ">
        <p className="text-gray-100 text-base">{content}</p>
      </div>

      <div className="flex justify-start items-center h-48 relative overflow-hidden">
        <div
          className="flex"
          style={{
            transform: `translateX(-${scrollPosition}px)`,
            width: `${totalContentWidth}px`,
          }}
        >
          {duplicatedImages &&
            duplicatedImages.map((img, index) => (
              <img
                key={index}
                src={img}
                alt={`imagen ${index + 1}`}
                className="w-[150px] h-[150px] rounded-lg flex-shrink-0 object-contain"
                style={{ mixBlendMode: 'multiply' }}
              />
            ))}
        </div>
      </div>
    </div>
  );
};
