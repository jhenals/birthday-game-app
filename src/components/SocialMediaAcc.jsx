import React from 'react'
import { motion } from "framer-motion";

import { styles } from "../styles";
import { accounts } from "../constants";
import { slideIn } from "../utils/motion";

const SocMedCards = ({ name, url, icon, index }) => {
  return (
    <motion.div
    variants={slideIn("up", "tween", index * 0.2, 1)}
    className="flex flex-col items-center"
  >
      <a
    href={url}
    target='_blank'
    rel='noopener noreferrer'
    className=" bg-tertiary rounded-full w-[70px] h-[70px] flex justify-center items-center cursor-pointer"
  >
    
     <i className={`fa-brands ${icon} text-[30px] text-white `}/>  
  </a> 
  <div className="mt-2">
    <p className="text-white text-center tracking-wider text-xs">
      {name}
    </p>
  </div>
  </motion.div>
    
  )
}

const SocialMediaAcc = () => {
  return (
    <div className='flex-[0.75] bg-black-100 p-8 rounded-2xl'>
      <motion.div
        variants={slideIn("up", "tween", 0.2, 1)}
        className='flex flex-col'
      >
        <p className={styles.sectionSubText}>Let's Connect!</p>
        <h3 className={styles.sectionHeadText}>Social Links.</h3>
      </motion.div>
      
      <div className={`mt-10 pb-14 flex flex-row flex-wrap gap-7`}>
        {accounts.map((acc, index) => (
          <SocMedCards key={acc.name} index={index} {...acc} />
        ))}
      </div>

     
    </div>
  )
}

export default SocialMediaAcc
