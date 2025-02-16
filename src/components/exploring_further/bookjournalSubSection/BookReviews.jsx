import React from 'react'
import { motion } from "framer-motion";

import { styles } from '../../../styles';
import { fadeIn, textVariant } from '../../../utils/motion';

const BookReviews = () => {
  return (
    <div className={styles.subSectionDiv}>
    <motion.div variants={textVariant()}>
     <p className={styles.sectionSubText}>Thoughts and Insights</p>
     <h2 className={styles.sectionHeadText}>Book Reviews.</h2>
   </motion.div>

   <motion.p
     variants={fadeIn("", "", 0.1, 1)}
     className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'
   >
     I love reading books! <br/>
      Here, I share the books I've read and my thoughts on them. Whether it's fiction, non-fiction, technical reads or poetry, I explore themes, lessons and takeaways that resonate with me.
     My goal is to create a space where I can connect with fellow book lovers and share the joy of reading.
   </motion.p>

</div>
   
  )
}

export default BookReviews
