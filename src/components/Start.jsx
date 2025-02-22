import React from 'react'
import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

const Start = ({startGame}) => {
  const [randomPosition, setRandomPosition] = useState({ x: 0, y: 0 });

  const getRandomNumber = (min, max) => { 
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

  const generateRandomPosition = () => {
    const maxWidth= window.innerWidth;
    const maxHeight= window.innerHeight;
  
    const randomX =getRandomNumber(-maxWidth, maxWidth);
    const randomY = getRandomNumber(-maxHeight, maxHeight);

    
    return {
      x: Math.random() * randomX,
      y: Math.random() * randomY,
    };
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setRandomPosition(generateRandomPosition());
    }, 1000);

    return () => clearInterval(interval); 
  }, []);

  return (
    <motion.div
      className=/* bg-starting_page bg-no-repeat bg-cover */ 'bg-primary flex flex-col items-center justify-center h-screen text-white'
      >
        <motion.button
          className='bg-secondary border-none text-white px-4 py-2 text-center rounded-[8px] shadow-lg w-[150px] h-[60px]'
          animate={{
            x: randomPosition.x, 
            y: randomPosition.y, 
          }}
          transition={{
            duration: 10, 

            type: "spring",
            stiffness: 100,
            damping: 35
          }}
          onClick={ ()=>startGame() }>Click Me!</motion.button>
    </motion.div>
  )
}

export default Start
