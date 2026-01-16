import React, { useState, useEffect, useRef } from 'react';

export const SplashScreen = ({ onComplete }) => {
  const [isVisible, setIsVisible] = useState(true);
  const [isFading, setIsFading] = useState(false);
  const videoRef = useRef(null);

  useEffect(() => {
    const video = videoRef.current;
    
    if (video) {
      // Try to play the video
      const playVideo = async () => {
        try {
          await video.play();
        } catch (err) {
          // If autoplay fails, skip to main content
          console.log('Autoplay prevented, skipping intro');
          handleVideoEnd();
        }
      };
      
      playVideo();
    }
  }, []);

  const handleVideoEnd = () => {
    setIsFading(true);
    // Wait for fade animation to complete
    setTimeout(() => {
      setIsVisible(false);
      if (onComplete) onComplete();
    }, 800);
  };

  // Also handle if video can't load
  const handleVideoError = () => {
    handleVideoEnd();
  };

  if (!isVisible) return null;

  return (
    <div 
      className={`fixed inset-0 z-[100] bg-black flex items-center justify-center transition-opacity duration-700 ${
        isFading ? 'opacity-0' : 'opacity-100'
      }`}
    >
      <video
        ref={videoRef}
        src="https://customer-assets.emergentagent.com/job_lamko-b2b/artifacts/9gclcc1o_generated-video.mp4"
        className="w-full h-full object-cover"
        muted
        playsInline
        autoPlay
        onEnded={handleVideoEnd}
        onError={handleVideoError}
      />
    </div>
  );
};
