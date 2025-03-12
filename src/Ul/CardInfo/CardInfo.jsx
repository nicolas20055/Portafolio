import React from 'react';

export const CardInfo = ({ title, content, images }) => {
  return (
    <div className="w-10/12  gap-52 sm:w-64 md:w-72 lg:w-96 xl:w-[800px] rounded-lg overflow-hidden shadow-lg bg-transparent border border-gray-200 h-[400px]">
      <div className="px-6 py-4">
        <h2 className="font-semibold text-xl text-gray-100 truncate flex justify-center items-center ">{title}</h2>
      </div>

      <div className="px-6 py-4 justify-center items-center">
        <p className="text-gray-100 text-base">{content}</p>
      </div>

      <div className="flex justify-center items-center h-48 relative">
        {images &&
          images.map((img, index) => (
            <img
              key={index}
              src={img}
              alt={`imagen ${index + 1}`}
              className="w-[150px] h-[150px] rounded-lg flex-shrink-0 object-contain m-2"
              style={{ mixBlendMode: 'multiply' }}
            />
          ))}
      </div>
    </div>
  );
};