import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './Loader.css';

// Placeholder components - replace these with your Bitmoji images
const BoyBitmoji = () => (
  <div className="bitmoji-placeholder">
    {/* Add your boy Bitmoji image here */}
    Boy Bitmoji
  </div>
);

const GirlBitmoji = () => (
  <div className="bitmoji-placeholder">
    {/* Add your girl Bitmoji image here */}
    Girl Bitmoji
  </div>
);

const Loader: React.FC = () => {
  const [currentBitmoji, setCurrentBitmoji] = useState<'boy' | 'girl'>('boy');

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentBitmoji((prev) => (prev === 'boy' ? 'girl' : 'boy'));
    }, 1500); // Change bitmoji every 1.5 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="loader-container">
      <motion.div
        className="loader"
        animate={{
          backgroundColor: ['#30aafb', '#f1ee21', '#30aafb'],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={currentBitmoji}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.5 }}
          >
            {currentBitmoji === 'boy' ? <BoyBitmoji /> : <GirlBitmoji />}
          </motion.div>
        </AnimatePresence>
      </motion.div>
    </div>
  );
};

export default Loader;