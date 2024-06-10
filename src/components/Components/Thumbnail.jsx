import React from 'react';

const Thumbnail = ({ imageSrc, title, description }) => {
  return (
    <div className="max-w-xs rounded overflow-hidden shadow-lg bg-white">
      <img className="w-full" src={imageSrc} alt={title} />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{title}</div>
        {description && <p className="text-gray-700 text-base">{description}</p>}
      </div>
    </div>
  );
};

export default Thumbnail;
