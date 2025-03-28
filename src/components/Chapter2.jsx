import React, { useEffect, useState, useRef} from 'react'
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

import { styles } from '../styles'
import {Fire} from '../assets'
import { chapt2images , wrongAnswers} from '../constants'

const shuffleArray = (array) => {
  let shuffledArray = [...array];
  for (let i = shuffledArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
  }
  return shuffledArray;
};

const Chapter2 = () => {
  const navigate = useNavigate();
    const audioRef = useRef(null)
  
  
  const [introEnd, setIntroEnd] = useState(false)
  const[cards, setCards]= useState(shuffleArray(chapt2images))
  const [ flipped, setFlipped]= useState([])
  const [solved, setSolved]= useState([])
  const [clue, setClue]= useState('')  
  const [gameSolved, setGameSolved]= useState(false)

   useEffect(()=>{
      if(audioRef.current){
        audioRef.current.play().catch((error)=>
          console.log('Audio autoplay prevented:', error));
      }
      return ()=>{
        if(audioRef.current){
          audioRef.current.pause()
          audioRef.current.currentTime = 0;
        }
      };
    },[]);


  const handleCardClick= (index)=>{
    if( flipped.length <2 && 
      !flipped.includes(index) &&
      !solved.includes(cards[index].name)
    ){
      setFlipped( (flipped)=> [...flipped, index])
    }
  }

  useEffect(()=>{
    if(flipped.length === 2){
      const [first, second]= flipped
      if(cards[first].name === cards[second].name){
        setSolved([...solved, cards[first].name])
        setClue('Great! You found a match')
        setFlipped([])
      }else{
         const randomClue = wrongAnswers[Math.floor(Math.random() * wrongAnswers.length)];
        setClue(randomClue)  
        setTimeout(()=> setClue(''), 3000)
        setTimeout(()=> setFlipped([]), 1000)
      }
    }}, [flipped, cards])

  useEffect(()=>{
    if(solved.length === cards.length/2){
      setGameSolved(true)
    }
  }, [solved, cards])

  return (
    <>
    <div className='bg-primary '>
      <audio ref={audioRef} src={Fire} />
      
      <div className={`${styles.mobile}`}>
      {
        !introEnd && (
          <motion.div
            className="w-full h-full flex flex-col items-center justify-center text-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            >
              <h1 className={`${styles.heroSubText} h-[600px] mt-10`}>Chapter 2:</h1>
              <h2 className={`${styles.heroHeadText}`}>Permission<br/> to Match <br />🕺💃🎶 </h2>
              <p className='my-10'>Flip, <br/>Match, <br/> and Prove your ARMY memory skill!</p>


              <button
                className="bg-secondary text-white w-1/2 h-1/4 rounded-2xl mb-10"
                onClick={() => setIntroEnd(true)}>
                Let's gooo!!!
              </button>

        </motion.div>
              
        )
      }

      {
        introEnd && (
          <div className='flex flex-col w-[390px] h-[1000px]'>
            <div className='grid grid-cols-3 mt-8 w-[350px] gap-2'>
              {cards.map( (card,index) => (
                <motion.div
                  key={index}
                  onClick={()=> handleCardClick(index)} 
                  className='relative w-[100px] h-[100px] bg-secondary rounded-lg flex items-center justify-center'
                >
                  <div 
                    className={`w-full h-full rounded-lg absolute flex items-center justify-center 
                      ${flipped.includes(index) || solved.includes(index) ? 'bg-transparent' : ''}`}
                  >
                    {flipped.includes(index) || solved.includes(card.name) ? 
                    (
                      <img 
                        src={card.image} 
                        alt={card.name} 
                        className='w-full h-full object-cover rounded-lg'/>
                    ) : (
                      <div
                        className='w-full h-full bg-secondary rounded-lg'
                      >
                        
                      </div>
                    )}
                    
                  </div>
                </motion.div>
              ))} 
            </div>            
          <div>

          {
            !gameSolved && (
              <div className="w-full h-auto">
                <p
                  className="text-white text-sm w-[390px] pr-5"
                >
                  {clue}
                </p>
              </div>
            )
          }
  
          {
            gameSolved && (
            <div className='relative items-center justify-center mt-8'>
               <button
              className="h-[100px] w-[250px] bg-secondary text-white rounded-lg shadow-lg"
              onClick={ ()=> navigate('/chapter-three')}
            >
              Next Chapter
            </button>
              
            </div>
             
            )
          }
  
            
          </div>
   
        </div>

        )
      }
    
    
        
      </div>
    </div>
    </>
  )
}

export default Chapter2
