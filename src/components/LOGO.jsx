import React from 'react';

const Logo = () => {
  return (
    <img
      src="/image/sslogo.png"  // Make sure your logo file has the correct extension and is in public/image/
      alt="SwasthyaSaathi Logo"
      style={{
        margin: '12px',
        width: '80px',    // Adjust size as needed
        height: 'auto',
        objectFit: 'contain',
      }}
    />
  );
};

export default Logo;
