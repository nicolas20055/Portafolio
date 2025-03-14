import React from 'react';

export const Certificate = ({ url, titleCertificate }) => {
  return (
    <a href={url} target="_blank" rel="noopener noreferrer" className="block p-4 bg-white rounded-md shadow-md hover:shadow-lg transition duration-300">
      <h3 className="text-lg font-semibold text-gray-800">{titleCertificate}</h3>
    </a>
  );
};

export default Certificate;