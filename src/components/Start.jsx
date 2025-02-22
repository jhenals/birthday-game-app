import React from 'react'
import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

const Start = ({startGame}) => {
  const [randomPosition, setRandomPosition] = useState({ x: 0, y: 0 });

  const generateRandomPosition = () => {
    const maxX = window.innerWidth-150 ;
    const maxY = window.innerHeight-60;
    return {
      x: Math.random() * maxX,
      y: Math.random() * maxY,
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
            damping: 50
          }}
          onClick={ ()=>startGame() }>Click Me!</motion.button>
    </motion.div>
  )
}

export default Start
