"use client";
// Import necessary hooks and utilities from React and additional libraries
import React, { useEffect, useRef, useState } from 'react';
import { useMediaQuery } from 'react-responsive';
import { useWindowSize } from '../utility';

// Define the IframeFood component
const IframeFood = () => {
  // State to manage the display of the iframe animation
  const [showAnimation, setShowAnimation] = useState(false);
  // Use media query to detect if the device is desktop or laptop based on the width
  const isDesktopOrLaptop = useMediaQuery({ query: '(min-width: 700px)' });
  // Reference for the iframe element for direct DOM manipulation if necessary
  const pageRef = useRef(null);
  // Utilize custom hook to obtain window size for dynamic styling
  const size = useWindowSize();
  // State to manage the source URL of the iframe
  const [src] = useState('/foodGallery/FoodGallery.htm');
  // State to track if the iframe content has loaded
  const [load, setLoad] = useState(false);

  // Effect hook to initialize component state based on device type
  useEffect(() => {
    // Show animation only on desktop or laptop devices
    if (isDesktopOrLaptop) {
      setShowAnimation(true);
    }

    // Set up an onload event listener for the iframe to update the load state
    const iframe = document.getElementById('food-iframe');
    if (iframe) {
      iframe.onload = () => setLoad(true);
    }
  }, [isDesktopOrLaptop]); // Dependency array to re-run the effect only when isDesktopOrLaptop changes

  const iframeSrc = typeof window !== "undefined" ? `${window.origin}/foodGallery/FoodGallery.htm` : '';

  // Render the component UI
  return (
    <>
      {/* {showAnimation && ( */}
        <div className="w-full h-full z-50"> 

        <iframe
  id="food-iframe"
  src={iframeSrc}
  scrolling="yes"
  frameBorder="0"
  allowFullScreen={true}
  allow="autoplay; fullscreen"
  style={{ }}
  width="100%"
  ref={pageRef}
  height={size.height}
  onLoad={() => setLoad(true)} // Directly update load state on load
  loading="lazy"
/>

         

          {!isDesktopOrLaptop && (
            <ToggleAnimationButton showAnimation={showAnimation} toggleAnimation={() => setShowAnimation(!showAnimation)} />
          )}
        </div>
      {/* )} */}
      {!isDesktopOrLaptop && !showAnimation && (
        <MobileView toggleAnimation={() => setShowAnimation(!showAnimation)} />
      )}
    </>
  );
};

// Component to handle toggle animation button for mobile view
const ToggleAnimationButton = ({ showAnimation, toggleAnimation }) => (
  <button
    className={`h-20 flex items-center justify-end px-10 gap-4 ${showAnimation ? 'absolute right-0 top-5' : 'pt-10'}`}
    onClick={toggleAnimation}
  >
    {/* Animation toggle icon here */}
  </button>
);

// Mobile view component
const MobileView = ({ toggleAnimation }) => (
  <div className="h-[100vh] flex flex-col">
    <ToggleAnimationButton showAnimation={false} toggleAnimation={toggleAnimation} />
    {/* Content here */}
  </div>
);

export default IframeFood;
