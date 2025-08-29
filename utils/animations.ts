// Animation utility functions for consistent animations across components
export type AnimationVariant = {
  hidden: Record<string, unknown>;
  visible: Record<string, unknown>;
};

export const fadeIn = (
  direction: 'up' | 'down' | 'left' | 'right' = 'up',
  duration: number = 0.5,
  delay: number = 0
): AnimationVariant => {
  const variants: AnimationVariant = {
    hidden: {
      y: direction === 'up' ? 40 : direction === 'down' ? -40 : 0,
      x: direction === 'left' ? 40 : direction === 'right' ? -40 : 0,
      opacity: 0,
    },
    visible: {
      y: 0,
      x: 0,
      opacity: 1,
      transition: {
        duration,
        delay,
        ease: 'easeOut',
      },
    },
  };

  return variants;
};

export const slideIn = (
  direction: 'up' | 'down' | 'left' | 'right',
  duration: number = 0.5,
  delay: number = 0,
  distance: number = 100
): AnimationVariant => {
  const variants: AnimationVariant = {
    hidden: {
      y: direction === 'up' ? distance : direction === 'down' ? -distance : 0,
      x: direction === 'left' ? distance : direction === 'right' ? -distance : 0,
      opacity: 0,
    },
    visible: {
      y: 0,
      x: 0,
      opacity: 1,
      transition: {
        duration,
        delay,
        ease: 'easeOut',
      },
    },
  };

  return variants;
};

export const staggerContainer = (
  staggerChildren: number = 0.1,
  delayChildren: number = 0
): AnimationVariant => {
  return {
    hidden: {},
    visible: {
      transition: {
        staggerChildren,
        delayChildren,
      },
    },
  };
};

export const zoomIn = (
  duration: number = 0.5,
  delay: number = 0
): AnimationVariant => {
  return {
    hidden: {
      scale: 0.9,
      opacity: 0,
    },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration,
        delay,
        ease: 'easeOut',
      },
    },
  };
};
