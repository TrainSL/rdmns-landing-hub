
import { Loader2 } from "lucide-react";
import { useEffect, useState } from "react";

const LoadingScreen = () => {
  const [fadeOut, setFadeOut] = useState(false);
  
  useEffect(() => {
    const handleLoad = () => {
      // Add a slight delay for smoother transition
      setTimeout(() => {
        setFadeOut(true);
        
        // Remove the component from DOM after animation completes
        setTimeout(() => {
          const loadingElement = document.getElementById('loading-screen');
          if (loadingElement) {
            loadingElement.style.display = 'none';
          }
        }, 500); // match this with the CSS transition duration
      }, 300);
    };
    
    // Check if document is already loaded
    if (document.readyState === 'complete') {
      handleLoad();
    } else {
      window.addEventListener('load', handleLoad);
    }
    
    return () => {
      window.removeEventListener('load', handleLoad);
    };
  }, []);
  
  return (
    <div 
      id="loading-screen"
      className={`fixed inset-0 z-50 flex flex-col items-center justify-center bg-white transition-opacity duration-500 ${
        fadeOut ? 'opacity-0' : 'opacity-100'
      }`}
    >
      <div className="animate-pulse-slow mb-8">
        <img 
          src="/placeholder.svg" 
          alt="RDMNS.LK"
          className="w-32 h-32"
        />
      </div>
      <div className="flex items-center gap-2">
        <Loader2 className="h-6 w-6 animate-spin text-rdmns-blue" />
        <span className="text-lg font-medium text-rdmns-dark">Loading RDMNS.LK...</span>
      </div>
    </div>
  );
};

export default LoadingScreen;
