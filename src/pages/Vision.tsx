import React, { useEffect } from 'react';
import { useLoader } from '../context/LoaderContext';


const Vision: React.FC = () => {


  const { setIsLoading } = useLoader();

  useEffect(() => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, [setIsLoading]); // Added missing dependency array and closing parenthesis for useEffect

  return (
    <div>
      <h1>Vision</h1>
      <p>This is the vision page.</p>
    </div>
  );
};

export default Vision;