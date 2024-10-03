import React, { useEffect, useState } from 'react';
import { useLoader } from '../context/LoaderContext';
import './Home.css';

const Home: React.FC = () => {
  const { setIsLoading } = useLoader();
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, [setIsLoading]);

  return (
    <div className="home-container">
      <div className="background-bubbles">
        {[...Array(20)].map((_, i) => (
          <div 
            key={i} 
            className="bubble" 
            style={{
              '--size': `${20 + Math.random() * 60}px`,
              '--left': `${Math.random() * 100}%`,
              '--animDuration': `${5 + Math.random() * 10}s`,
            } as React.CSSProperties}
          />
        ))}
      </div>
      <div 
        className="mouse-doughnut"
        style={{
          left: `${mousePosition.x}px`,
          top: `${mousePosition.y}px`,
        }}
      />
      <div className="content">
        <h1>Nurturing them the right way.</h1>
        <p>"Driving Endless Possibilities"</p>
       
      </div>
    </div>
  );
};

export default Home;