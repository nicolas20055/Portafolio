import React, { useState, useEffect } from 'react';


export const CardInfoAnimated = ({ title, content, images }) => {
  const [currentIconIndex, setCurrentIconIndex] = useState(0); 
  const animationSpeed = 1000; 

  
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIconIndex((prevIndex) => {
        const nextIndex = prevIndex + 1;
        return nextIndex >= images.length ? 0 : nextIndex; 
      });
    }, animationSpeed); 

    return () => clearInterval(timer);  
  }, [images]);  

  return (
    <div className="w-10/12 gap-52 sm:w-64 md:w-72 lg:w-96 xl:w-[800px] rounded-lg overflow-hidden shadow-lg bg-transparent border border-gray-200 transition-all duration-300 ease-in-out hover:scale-105 h-[400px]">
      <div className="px-6 py-4">
        <h2 className="  truncate flex justify-center items-center text-4xl font-bold bg-gradient-to-r from-blue-400  via-green-400 to-red-500 bg-[length:200%_200%] animate-textGradient bg-clip-text text-transparent">{title}</h2>
      </div>

      <div className="px-6 py-4">
        <p className="text-gray-100 text-base">{content}</p>
      </div>

      <div className="flex justify-center items-center h-48 relative overflow-hidden">
        {}
        <div className="flex justify-center items-center w-[150px] h-[150px] text-6xl">  {}
          {images[currentIconIndex]}  {}
        </div>
      </div>
    </div>
  );
};


const TechnicalSkills = () => {
  const icons = [
    <FaJava />,
    <IoLogoJavascript />,
    <FaReact />,
    <TbBrandCSharp />,
    <FaCss3Alt />,
    <SiTypescript />,
    <RiTailwindCssFill />
  ];

  return (
    <CardInfoAnimated
      title="Technical Skills"
      content="Lenguajes de programación que he aprendido."
      images={icons}  
    />
  );
};

export default TechnicalSkills;
