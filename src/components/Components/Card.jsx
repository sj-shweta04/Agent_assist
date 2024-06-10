import React from 'react';

const Card = ({ children }) => {
  return (
    <div className='overflow-auto flex-1'>
      {children}
    </div>
  );
};

export default Card;
