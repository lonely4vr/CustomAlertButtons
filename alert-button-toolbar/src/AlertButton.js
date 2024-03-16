import React from 'react';

const AlertButton = ({ message, children }) => {
  const handleClick = () => {
    alert(message);
  };

  return (
    <button onClick={handleClick}>
      {children}
    </button>
  );
};

export default AlertButton;
