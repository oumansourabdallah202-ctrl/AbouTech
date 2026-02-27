import { useEffect } from 'react';

const useSmoothScroll = () => {
  useEffect(() => {
    const handleScroll = (event: WheelEvent) => {
      event.preventDefault();
      const scrollAmount = event.deltaY < 0 ? -100 : 100;
      window.scrollBy({
        top: scrollAmount,
        behavior: 'smooth',
      });
    };

    window.addEventListener('wheel', handleScroll, { passive: false });

    return () => {
      window.removeEventListener('wheel', handleScroll);
    };
  }, []);
};

export default useSmoothScroll;