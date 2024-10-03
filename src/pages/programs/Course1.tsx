
import React, { useEffect } from 'react';
import { useLoader } from '../../context/LoaderContext';


const Course1: React.FC = () => {

const { setIsLoading } = useLoader();

  useEffect(() => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, [setIsLoading]); // Added missing dependency array and closing parenthesis for useEffect

  return (
    <div>
      <h1>Course 1</h1>
      <p>This is the course 1 page.</p>
    </div>
  );
};

export default Course1;


