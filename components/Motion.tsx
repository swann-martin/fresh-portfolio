import { JSX } from "preact";
import { useEffect, useRef, useState } from "preact/hooks";
import type { AnimationVariant } from "../utils/animations.ts";

interface MotionProps {
  initial?: "hidden" | string;
  animate?: "visible" | string;
  variants?: AnimationVariant;
  transition?: {
    duration?: number;
    delay?: number;
    ease?: string;
  };
  class?: string;
  style?: JSX.CSSProperties;
  children: JSX.Element | JSX.Element[] | string;
  viewport?: {
    once?: boolean;
    margin?: string;
  };
}

/**
 * A simplified version of Framer Motion for Preact
 * This component adds animation capabilities to any element
 */
export function Motion({
  initial = "hidden",
  animate = "visible",
  variants = null,
  transition,
  class: className = "",
  style = {},
  children,
  viewport = { once: false, margin: "-100px" },
}: MotionProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [isInView, setIsInView] = useState(false);
  const [animationStyles, setAnimationStyles] = useState<JSX.CSSProperties>({});

  // Check if element is in viewport
  useEffect(() => {
    if (!ref.current || !variants) return;

    try {
      const observer = new IntersectionObserver(
        ([entry]) => {
          setIsInView(entry.isIntersecting);

          if (entry.isIntersecting && viewport.once) {
            if (ref.current) {
              observer.unobserve(ref.current);
            }
          }
        },
        {
          rootMargin: viewport.margin,
          threshold: 0.1,
        },
      );

      if (ref.current) {
        observer.observe(ref.current);
      }

      return () => {
        if (ref.current) {
          observer.unobserve(ref.current);
        }
      };
    } catch (error) {
      console.error("IntersectionObserver error:", error);
      // Default to visible if there's an error
      setIsInView(true);
    }
  }, [ref, viewport]);

  // Apply animation styles when in view
  useEffect(() => {
    if (!variants) {
      setAnimationStyles({});
      return;
    }

    try {
      // Initial state
      if (!isInView) {
        setAnimationStyles({
          ...variants[initial],
          transition: `all ${transition?.duration || 0.5}s ${transition?.ease || "ease-out"} ${transition?.delay || 0}s`,
        });
      } else {
        // Animated state
        setAnimationStyles({
          ...variants[animate],
          transition: `all ${transition?.duration || 0.5}s ${transition?.ease || "ease-out"} ${transition?.delay || 0}s`,
        });
      }
    } catch (error) {
      console.error("Animation styles error:", error);
      setAnimationStyles({});
    }
  }, [isInView, variants, initial, animate, transition]);

  return (
    <div
      ref={ref}
      class={className}
      style={Object.assign({}, style, animationStyles || {})}
    >
      {children}
    </div>
  );
}

export default Motion;
