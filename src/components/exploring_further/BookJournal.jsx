import React from 'react'
import { motion } from "framer-motion";

import { styles } from '../../styles'
import { textVariant } from '../../utils/motion';

const BookJournal = () => {
  return (
    <div className={styles.subSectionDiv}>
       <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>My Reads</p>
        <h2 className={styles.sectionHeadText}>Bookshelf.</h2>
      </motion.div>

  </div>
  )
}

export default BookJournal
