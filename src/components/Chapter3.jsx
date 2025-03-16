import React , {useEffect, useRef, useState} from 'react'
import { useNavigate } from 'react-router-dom'  
import { motion } from 'framer-motion'

import { styles } from '../styles'
import { audioQuestions, wrongAnswers } from '../constants'

const Chapter3 = () => {
  const navigate = useNavigate()  

  const [introEnd, setIntroEnd] = useState(false)
  const [index, setIndex] = useState(0)
  const [isCorrect, setIsCorrect] = useState(null) 
  const [gameSolved, setGameSolved] = useState(false) 
  const [clue, setClue]= useState('')   

  const handleAnswer = (option) => {
    if(option === audioQuestions[index].correct){
      setIsCorrect(true)

      if(index === audioQuestions.length-1){
        setGameSolved(true)
      } else {
      setIndex((prev) => Math.min(prev+1, audioQuestions.length-1))
      }
    } else {
      setIsCorrect(false)
      const randomClue = wrongAnswers[Math.floor(Math.random() * wrongAnswers.length)];
      setClue(randomClue)  
      setTimeout(()=> setClue(''), 3000)
    }

    //Play thr video
    const videoElement = document.getElementById('videoPlayer');
    videoElement.onload();
    videoElement.play();

    setIndex((prev) => Math.min(prev+1, audioQuestions.length-1))
    
  }

  return (
    <div className='bg-primary'>
      <div className={`${styles.mobile}`}>

        {
          !introEnd && (
            <motion.div
            className="w-full h-full flex flex-col items-center justify-center text-center p-5"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            >
              <h1 className={`${styles.heroSubText} h-[300px] mt-10`}>Chapter 3:</h1>
              <h2 className={`${styles.heroHeadText} `}>The<br/> Bangtan <br/> Beats <br />🎶</h2>
              <p className='mt-5 h-full'>Nyka... <br/> listen to the 10second beat <br/> and name that BTS song!</p>


              <button
                className="bg-secondary text-white w-1/2 h-1/4 rounded-2xl mb-10"
                onClick={() => setIntroEnd(true)}>
                Let's gooo!!!
              </button>

        </motion.div>
          )
        }

        {introEnd && !gameSolved && ( 
          <div className=" w-full flex flex-col text-white justify-center items-center ">
            <div className="w-[100%] h-[100%] flex justify-center items-center">
              <video
                key={index}
                id="videoPlayer"
                className="w-full h-full rounded-lg"
                controls
              >
                <source src={audioQuestions[index].audioClip} type="video/mp4" />
                Your browser does not support the video tag.
              </video>

            </div>


            <div className='flex flex-col gap-4 w-full h-full items-center justify-center'>
              <div className="flex flex-col gap-4 mt-8 w-full">
                {audioQuestions[index].options.map((option, i) => (
                  <button
                    key={i}
                    onClick={() => handleAnswer(option)}
                    className="bg-secondary w-full h-[500px] rounded-lg"
                  >
                    {option}
                  </button>
                ))}
              </div>

              <div className='h-full w-full mt-5'>
                { !isCorrect && (
                  <div className=" w-full h-auto">
                    <p
                      className="w-full flex flex-wrap text-white text-lg "
                    >
                      {clue}
                    </p>
                </div>
                )}
              </div>
            </div>  
          </div>
        )} 

        {introEnd && gameSolved && (
          <div className="w-full flex flex-col relative justify-center items-center mt-4 text-white h-[500px]">  
            <div className="text-center text-2xl font-bold p-5 mt-8 h-[500px]">Congratulations! <br />
              You've solved the game!
              <br />
              🎉🎉🥳🎊💃😍🤩
            </div>
              <button
                className="bg-secondary p-4 mt-4 rounded-lg w-[300px] h-[200px]" 
                onClick={() => navigate('/gift')} 
              >
                Click to claim your prize!
              </button>
            </div>
        )}  
      </div>
    </div>
  )
}


export default Chapter3
