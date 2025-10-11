export const fadeIn = (delay: number = 0) => {
  return {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    transition: { duration: 0.3, delay: delay * 0.1 },
  };
};
