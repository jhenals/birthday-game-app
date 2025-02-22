import React from 'react'
import { motion } from 'framer-motion'

const Start = () => {
  const startGame = () => {
    console.log('Game Started')
  }

  return (
    <motion.div
      className=/* bg-starting_page bg-no-repeat bg-cover */ 'bg-primary flex flex-col items-center justify-center h-screen text-white'>
        <button
          className='bg-secondary border-none text-white px-4 py-2 text-center rounded-[8px]  shadow-lg'
          onClick={startGame()}>Click Me</button>
    </motion.div>
  )
}

export default Start
