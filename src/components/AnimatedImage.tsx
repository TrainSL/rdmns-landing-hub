
import { useEffect, useRef } from 'react';
import { cn } from "@/lib/utils";

interface AnimatedImageProps {
  src: string;
  alt: string;
  className?: string;
  delay?: number;
  animation?: 'fade-up' | 'fade-down' | 'fade-left' | 'fade-right' | 'fade-in' | 'float';
  once?: boolean;
  imgClassName?: string;
  threshold?: number;
}

const AnimatedImage = ({
  src,
  alt,
  className = "",
  imgClassName = "",
  delay = 0,
  animation = "fade-up",
  once = true,
  threshold = 0.1
}: AnimatedImageProps) => {
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              if (elementRef.current) {
                elementRef.current.classList.add(`animate-${animation}`);
                elementRef.current.style.opacity = '1';
                elementRef.current.style.transition = 'opacity 0.8s ease-in-out, transform 0.8s ease-in-out';
              }
            }, delay);
            
            if (once) {
              observer.unobserve(entry.target);
            }
          } else if (!once) {
            if (elementRef.current) {
              elementRef.current.classList.remove(`animate-${animation}`);
              elementRef.current.style.opacity = '0';
              elementRef.current.style.transition = 'opacity 0.8s ease-in-out, transform 0.8s ease-in-out';
            }
          }
        });
      },
      { threshold }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => {
      if (elementRef.current) {
        observer.unobserve(elementRef.current);
      }
    };
  }, [animation, delay, once, threshold]);

  return (
    <div
      ref={elementRef}
      className={cn("opacity-0", className)}
      style={{ 
        transition: 'opacity 0.8s ease-in-out, transform 0.8s ease-in-out',
        willChange: 'opacity, transform'
      }}
    >
      <img 
        src={src} 
        alt={alt} 
        className={imgClassName}
        loading="lazy"
      />
    </div>
  );
};

export default AnimatedImage;
