import React from 'react';

const Card = ({ children }) => {
  return (
    <div className="overflow-auto">
      {children}
    </div>
  );
};

export default Card;
