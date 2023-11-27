import { useCallback, useEffect, useState } from 'react';

export const useDimensions = ( ref ) => {
  const [dimensions, setDimensions] = useState({
    width: 0,
    height: 0,
  });

  const handleDimensions = useCallback(() => {
    const element = ref.current && ref.current.getBoundingClientRect();
    setDimensions({ width: element?.width, height: element?.height });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [ref.current]);

  useEffect(() => {
    const id = setInterval(() => {
      handleDimensions();
    }, 1000);

    return () => {
      clearInterval(id);
    };
  }, [handleDimensions]);

  useEffect(() => {
    handleDimensions();

    window.addEventListener('resize', handleDimensions);

    return () => {
      window.removeEventListener('resize', handleDimensions);
    };
  }, [handleDimensions]);

  return { width: dimensions.width, height: dimensions.height };
};
