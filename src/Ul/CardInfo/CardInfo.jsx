import React from 'react';

export const CardInfo = ({ title, content, images, customClass, }) => {
  return (
    <div className={`w-10/12 gap-52 sm:w-64 md:w-72 lg:w-96 xl:w-[800px] rounded-lg overflow-hidden shadow-lg bg-transparent border border-gray-200 h-[400px] ${customClass}`}>
      <div className="px-6 py-4">
        <h2 className="font-semibold text-xl text-gray-100 truncate flex justify-center items-center ">{title}</h2>
      </div>

      <div className="px-6 py-4 justify-center items-center">
        <p className="text-gray-100 text-base">{content}</p>
      </div>

      {images && images.length > 0 && (
        <div className="flex justify-center items-center h-48 relative">
          {images.map((img, index) => (
            <div key={index} className="w-[150px] h-[150px] rounded-lg flex-shrink-0 object-contain m-2">
              {typeof img === 'string' ? (
                <img
                  src={img}
                  alt={`imagen ${index + 1}`}
                  className="w-full h-full object-contain"
                  style={{ mixBlendMode: 'multiply' }}
                />
              ) : (
                img
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};


