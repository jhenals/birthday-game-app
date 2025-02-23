import React , {useEffect, useRef, useState} from 'react'
import { useNavigate } from 'react-router-dom'  
import { motion } from 'framer-motion'

import { audioQuestions } from '../constants'

const Chapter3 = () => {
  const navigate = useNavigate()  

  const [index, setIndex] = useState(0)
  const [isCorrect, setIsCorrect] = useState(null)  

  const audioRef = useRef(null)

  const handleAnswer = (option) => {
    setUserAnswer(option)
    console.log(option)
    if(option === audioQuestions[index].correct){
      setIsCorrect(true)
      setIndex((prev) => Math.min(prev+1, audioQuestions.length-1))

    } else {
      setIsCorrect(false)
    }
  }

  return (
    <div className='bg-primary '>
      <div className=" flex flex-col text-white relative justify-center items-center mt-4">
        {/* <div className="text-2xl font-bold mt-8">
          Listen to the clip and guess the BTS song!
        </div> */}


        <div className="h-[250px] w-[250px] bg-white rounded-lg">
          {/*  <audio ref={audioRef} controls>
            <source src={audioQuestions[index].audioClip} type="audio/mp3" />
            Your browser does not support the audio element.
          </audio> */}
        </div>

        <div className='flex flex-col gap-4 w-full h-full items-center justify-center'>
          <div className="flex flex-col gap-4 mt-8 ">
          {audioQuestions[index].options.map((option, i) => (
            <button
              key={i}
              onClick={() => handleAnswer(option)}
              className="bg-secondary p-4 w-full h-[500px] rounded-lg"
            >
              {option}
            </button>
          ))}
          </div>

          <div className='h-[200px] w-full p-4'>
            {isCorrect !== null && (
              <div className={`mt-4 text-lg font-semibold ${isCorrect ? '' : 'text-red-500'}`}>
                {isCorrect ? '' : 'Oops! Try again! ❌'}
              </div>
            )}
          </div>
            
        </div>

     
    

    

      {/* Next Button 
      <button
        onClick={handleNext}
        className="mt-8 bg text-white p-4 rounded-lg"
      >
        {index < audioQuestions.length - 1 ? 'Next Question' : 'Next Chapter'}
      </button> */}
      </div>
    </div>
  )
}

export default Chapter3
