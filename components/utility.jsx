// Import necessary hooks from React library
import { useEffect, useState } from 'react';

/**
 * A custom hook to monitor and return the browser window's size.
 * It provides an object with the current width and height of the window.
 * This can be useful for responsive designs that adjust to the window size.
 *
 * Returns:
 * { width, height }: An object containing the current width and height of the window.
 */
export const useWindowSize = () => {
  // Initialize state with width and height set to the current window size
  // This ensures that the server-side rendering and client-side rendering are consistent
  // and prevents layout shifts when JavaScript loads.
  // Read more about this issue here: https://joshwcomeau.com/react/the-perils-of-rehydration/
  const [windowSize, setWindowSize] = useState({
    width: typeof window !== 'undefined' ? window.innerWidth : undefined,
    height: typeof window !== 'undefined' ? window.innerHeight : undefined,
  });

  useEffect(() => {
    // Define a function to update the state with the new window size
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    // Add the resize event listener to the window
    window.addEventListener('resize', handleResize);

    // Perform an initial resize event to capture the current window size
    handleResize();

    // Specify how to clean up after this effect by removing the event listener
    return () => window.removeEventListener('resize', handleResize);
  }, []); // The empty dependency array ensures this effect runs only once on mount

  return windowSize;
};
