import React, { useEffect } from 'react';
import { useLoader } from '../../context/LoaderContext';


const AboutFounderMessage: React.FC = () => {

        
  const { setIsLoading } = useLoader();

  useEffect(() => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, [setIsLoading]); // Added missing dependency array and closing parenthesis for useEffect


  return (
    <div>
      <h1>Founder Message</h1>
      <p>This is the founder message page.</p>
    </div>
  );
};

export default AboutFounderMessage;