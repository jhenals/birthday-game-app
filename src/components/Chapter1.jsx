import React ,{useState} from 'react'
import { useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'

import { styles } from '../styles'
import {chap1} from '../constants'

const Chapter1 = () => {
  const navigate = useNavigate();

  const [index, setIndex] = useState(0);
  const [chapterEnd, setChapterEnd] = useState(false);
  const handleAnswer = (option) => {
    if(chap1[index].correct === option){
      setIndex( (prev) => Math.min(prev+1, chap1.length-1))
      if(index === chap1.length-1){
        setChapterEnd(true)
        console.log('end of chapter 1')
      }
    }else{
      console.log('wrong option')
    }
  }



  return (
    <div className={`${styles.padding} bg-primary relative  `}>
      {
        !chapterEnd && (
          <div className=" z-2 w-full flex flex-col">
          <motion.div
            key= {index}
            className="w-full h-[500px] flex flex-wrap text-white font-bold text-center items-center justify-center"
          >
            {chap1[index].question}
          </motion.div>
    
          <div className="flex flex-col gap-4">
              <button className="bg-secondary h-[100px]" onClick={() => handleAnswer("option_a")}>
                {chap1[index].option_a}
              </button>
              <button className="bg-secondary h-[100px]" onClick={() => handleAnswer("option_b")}>
                {chap1[index].option_b}
              </button>
              <button className="bg-secondary h-[100px]" onClick={() => handleAnswer("option_c")}>
                {chap1[index].option_c}
              </button>
              <button className="bg-secondary h-[100px]" onClick={() => handleAnswer("option_d")}>
                {chap1[index].option_d}
              </button>
          </div>
        </div>
        )
      }

      {
        chapterEnd && (
          <div className=" z-2 w-full h-[500px] flex flex-col justify-center">
            <p
              className="w-full h-[400px] flex flex-wrap text-white font-bold text-center items-center justify-center"
            >
            Congratulations! You have completed Chapter 1
            </p>

            <button 
              className="bg-secondary text-white w-1/2 h-1/4 rounded-2xl"
              onClick={() => navigate('/chapter-two')}
            >
              Go to Chapter 2 
            </button>
            
          </div>
        )
      }
    </div>
  )
}

export default Chapter1
