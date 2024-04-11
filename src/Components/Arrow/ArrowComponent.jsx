import React from 'react';

const ArrowComponent = ({ color = '#000', size = 24 }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width={size}
      height={size}
      fill={color}
    >
      <path d="M12 21l-12-18h24z" />
    </svg>
  );
};

export default ArrowComponent;
