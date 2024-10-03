import React, { useEffect } from 'react';
import { useLoader } from '../../context/LoaderContext';

const Course2: React.FC = () => {

  const { setIsLoading } = useLoader();

  useEffect(() => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, [setIsLoading]); // Added missing dependency array and closing parenthesis for useEffect

  return (
    <div>
      <h1>Course 2</h1>
      <p>This is the course 1 page.</p>
    </div>
  );
};

export default  Course2;