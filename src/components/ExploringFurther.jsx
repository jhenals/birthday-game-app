import React from "react";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import { testimonials } from "../constants";
import { exploringfurther } from "../constants";

const FeedbackCard = ({
  index,
  title,
  about,
}) => (
  <motion.div
    variants={fadeIn("", "spring", index * 0.5, 0.75)}
    className='bg-black-200 p-10 rounded-3xl xs:w-[320px] w-full'
  >
    <p className='text-white font-black text-[48px]'></p>

    <div className='mt-1'>
      <p className='text-white text-center tracking-wider cursor-pointer text-[48px]'>{title}</p>

      <div className='mt-7 flex justify-between items-center gap-1'>
        <div className='flex-1 flex flex-col'>
          <p className='text-white font-light text-justify text-[12px]'>
            <span className='blue-text-gradient'>"</span> {about} <span className='blue-text-gradient'>"</span>
          </p>
        </div>

  
      </div>
    </div>
  </motion.div>
);

const ExploringFurther = () => {
  return (
    <div className={`mt-12 bg-black-100 rounded-[20px]`}>
      <div
        className={`bg-tertiary rounded-2xl ${styles.padding} min-h-[300px]`}
      >
        <motion.div variants={textVariant()}>
          <p className={styles.sectionSubText}>More to talk about</p>
          <h2 className={styles.sectionHeadText}>Exploring Further.</h2>
        </motion.div>
      </div>
      <div className={`-mt-20 pb-14 ${styles.paddingX} flex flex-wrap gap-7`}>
        {exploringfurther.map((more, index) => (
          <FeedbackCard key={more.title} index={index} {...more} />
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(ExploringFurther, "exploringfurther");
