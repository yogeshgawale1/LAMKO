import React, { useState, useEffect, useRef } from 'react';

export const SplashScreen = ({ onComplete }) => {
  const [isVisible, setIsVisible] = useState(true);
  const [isFading, setIsFading] = useState(false);
  const videoRef = useRef(null);
  const hasEnded = useRef(false);

  const handleVideoEnd = () => {
    if (hasEnded.current) return;
    hasEnded.current = true;
    
    setIsFading(true);
    setTimeout(() => {
      setIsVisible(false);
      if (onComplete) onComplete();
    }, 800);
  };

  useEffect(() => {
    const video = videoRef.current;
    
    // Fallback timeout - end splash after 5 seconds max
    const fallbackTimer = setTimeout(() => {
      handleVideoEnd();
    }, 5000);
    
    if (video) {
      const playVideo = async () => {
        try {
          await video.play();
        } catch (err) {
          console.log('Autoplay prevented, skipping intro');
          handleVideoEnd();
        }
      };
      
      playVideo();
    }
    
    return () => clearTimeout(fallbackTimer);
  }, []);

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
