import React from 'react'
import { motion } from "framer-motion";

import { styles } from "../styles";
import { accounts } from "../constants";
import { slideIn } from "../utils/motion";

const SocMedCards = ({ name, link, icon, index }) => {
  return (
    <motion.div
    variants={slideIn("up", "tween", index * 0.2, 1)}
   
  >
     <a
        href={link}
        target='_blank'
        rel='noopener noreferrer'
        className='shadow-sm text-white font-black bg-black-200 p-10 rounded-full xs:w-[100px] text-[20px] cursor-pointer'
      >
        {icon}
      </a> 

      <div className='mt-1'>
        <p className='text-white text-center tracking-wider text-[5px]'>
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
      
      <div className={`relative mt-10 pb-14 flex flex-row flex-wrap gap-7`}>
        {accounts.map((acc, index) => (
          <SocMedCards key={acc.title} index={index} {...acc} />
        ))}
      </div>

     
    </div>
  )
}

export default SocialMediaAcc
