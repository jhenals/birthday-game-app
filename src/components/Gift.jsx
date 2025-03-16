import React from 'react'

import { motion } from 'framer-motion'
import { videoGift, bg_3} from '../assets/index.js'

const Gift = () => {
  return (
    <motion.div
      className="z-1 w-full h-full flex flex-col justify-center text-center bg-cover bg-center bg-bgGift"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      >
        <video className='mt-10' width="w-full" height="h-full" controls autoPlay>
          <source src={videoGift} type='video/mp4'/>
        </video>

        <a 
          href={videoGift}
          download={videoGift}
          className= "bottom-0 w-[300px] h-[60px] text-primary font-bold mt-5 text-center underline "
        >
            Download Video 🎥
        </a>
    </motion.div>
  )
}

export default Gift
