
import { useEffect, useRef } from 'react';
import { cn } from "@/lib/utils";

interface AnimatedTextProps {
  text: string;
  className?: string;
  delay?: number;
  animation?: 'fade-up' | 'fade-down' | 'fade-left' | 'fade-right' | 'fade-in';
  tag?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span' | 'div';
  once?: boolean;
  threshold?: number;
}

const AnimatedText = ({
  text,
  className = "",
  delay = 0,
  animation = "fade-up",
  tag: Tag = "div",
  once = true,
  threshold = 0.1
}: AnimatedTextProps) => {
  const elementRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              if (elementRef.current) {
                // Add the animation class
                elementRef.current.classList.add(`animate-${animation}`);
                // Make visible with transition
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
    <Tag
      ref={elementRef as any}
      className={cn("opacity-0", className)}
      style={{ 
        transition: 'opacity 0.8s ease-in-out, transform 0.8s ease-in-out',
        willChange: 'opacity, transform'
      }}
    >
      {text}
    </Tag>
  );
};

export default AnimatedText;
