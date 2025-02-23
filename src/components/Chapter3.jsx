import React , {useEffect, useRef, useState} from 'react'
import { useNavigate } from 'react-router-dom'  
import { motion } from 'framer-motion'

import { audioQuestions } from '../constants'

const Chapter3 = () => {
  const navigate = useNavigate()  

  const [index, setIndex] = useState(0)
  const [isCorrect, setIsCorrect] = useState(null) 
  const  [gameSolved, setGameSolved] = useState(true)  

  const audioRef = useRef(null)

  const handleAnswer = (option) => {
    console.log(option)
    if(option === audioQuestions[index].correct){
      setIsCorrect(true)
      setIndex((prev) => Math.min(prev+1, audioQuestions.length-1))

    } else {
      setIsCorrect(false)
    }
  }

  const nextChapter = () => {
    if(index === audioQuestions.length-1){
      setGameSolved(true)
    }
  }

  return (
    <div className='bg-primary'>

      {!gameSolved && ( 
      
        <div className=" flex flex-col text-white relative justify-center items-center mt-4">
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
        </div>
    
      )} 

      {gameSolved && (
        <div className="flex flex-col relative justify-center items-center mt-4 text-white h-[500px]">  
          <div className="text-center text-2xl font-bold p-5 mt-8 h-[500px]">Congratulations! You've solved the game!</div>
          <button
            className="bg-secondary p-4 mt-4 rounded-lg w-[300px] h-[200px]" 
            onClick={() => navigate('/gift')} 
          s>
            Next Chapter
          </button>
        </div>
      )}    

    </div> 
  )}

export default Chapter3
