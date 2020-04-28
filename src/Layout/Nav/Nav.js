import React, { useState, useEffect } from 'react';

const Nav = () => {
    const size = useWindowSize();
    const render = (size.width > 980) ? renderDesktop() : renderMobile();
    return render;
}
const renderDesktop = () => {
    return (
        <h1>Desktop</h1>
    )
}
const renderMobile = () => {
    return (
        <h1>Mobile</h1>
    )
}
const useWindowSize = () => {
    const isClient = typeof window === 'object';
  
    const getSize = () => {
      return {
        width: isClient ? window.innerWidth : undefined,
        height: isClient ? window.innerHeight : undefined
      };
    }
  
    const [windowSize, setWindowSize] = useState(getSize);
  
    useEffect(() => {
      if (!isClient) {
        return false;
      }
      
      function handleResize() {
        setWindowSize(getSize());
      }
  
      window.addEventListener('resize', handleResize);
      return () => window.removeEventListener('resize', handleResize);
    }, []); // Empty array ensures that effect is only run on mount and unmount
  
    return windowSize;
  }

export default Nav;