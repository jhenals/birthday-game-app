import React ,{useState} from 'react'
import { useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'

import { styles } from '../styles'
import {chap1, wrongAnswers} from '../constants'

const Chapter1 = () => {
  const navigate = useNavigate();

  const [index, setIndex] = useState(0);
  const [chapterEnd, setChapterEnd] = useState(false);
  const [introEnd, setIntroEnd] = useState(false);
  const [clue, setClue]= useState('')  
  const [isCorrect, setIsCorrect] = useState(false) 
  

  const handleAnswer = (option) => {
    if(chap1[index].correct === option){
      setClue('')
      setIndex( (prev) => Math.min(prev+1, chap1.length-1))
      if(index === chap1.length-1){
        setChapterEnd(true)
        console.log('end of chapter 1')
      }
    }else{
      setIsCorrect(false)
      const randomClue = wrongAnswers[Math.floor(Math.random() * wrongAnswers.length)];
      setClue(randomClue)  
      setTimeout(()=> setClue(''), 3000)
    }
  }



  return (
    <div className={`bg-primary relative h-full `}>
      <div className={`${styles.mobile}`}>
        {
          !introEnd && (
            <motion.div
              className="w-full h-full flex flex-col items-center justify-center text-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1 }}
              >
                <h1 className={`${styles.heroSubText} h-[200px]`}>Chapter 1:</h1>
                <h2 className={`${styles.heroHeadText}`}>The<br/> Bangtan <br/> Files <br />📂🎤</h2>
                <p className='pt-5'>Nyka... <br/> uncover these BTS facts <br/> like a detective</p>


                <button
                  className="bg-secondary text-white w-1/2 h-1/4 rounded-2xl"
                  onClick={() => setIntroEnd(true)}>
                  Let's gooo!!!
                </button>

          </motion.div>
            
          )

        }
      

        {
          introEnd && !chapterEnd  && (
            <>
              <div className=" w-full h-auto flex flex-col">
                <motion.div
                  key= {index}
                  className="w-full h-[200px] flex flex-wrap text-white font-bold text-center items-center justify-center"
                >
                  {chap1[index].question}
                </motion.div>
        
                <div className=" w-full h-[450px] flex flex-col gap-4">
                    <button className="bg-secondary w-full h-[100px]" onClick={() => handleAnswer("option_a")}>
                      {chap1[index].option_a}
                    </button>
                    <button className="bg-secondary  w-full h-[100px]" onClick={() => handleAnswer("option_b")}>
                      {chap1[index].option_b}
                    </button>
                    <button className="bg-secondary  w-full h-[100px]" onClick={() => handleAnswer("option_c")}>
                      {chap1[index].option_c}
                    </button>
                    <button className="bg-secondary w-full h-[100px]" onClick={() => handleAnswer("option_d")}>
                      {chap1[index].option_d}
                    </button>
                </div>
              </div>
            
              <div className='h-[200px] w-full mt-5'>
                { !isCorrect && (
                  <div className=" w-full h-auto">
                    <p
                      className="w-full flex flex-wrap text-white text-lg "
                    >
                      {clue}
                    </p>
              </div>
            )
            }
              </div>
            </>
          )
        }

        {
          introEnd && chapterEnd && (
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
    </div>

  
      
   
  )
}

export default Chapter1
