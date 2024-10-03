
import React, { useEffect } from 'react';
import { useLoader } from '../context/LoaderContext';

const Home: React.FC = () => {
  const { setIsLoading } = useLoader();

  useEffect(() => {
    // Simulate page load or do actual data fetching
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, [setIsLoading]);

  return (
    // Your page content
    <div>
    <h1>Home</h1>
    <p>This is the home page.</p>
  </div>
  );
};

export default Home;