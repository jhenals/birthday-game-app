import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

import { chapt2images } from '../constants'

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
  const[cards, setCards]= useState(shuffleArray(chapt2images))
  const [ flipped, setFlipped]= useState([])
  const [solved, setSolved]= useState([])
  const [clue, setClue]= useState('')  
  const [gameSolved, setGameSolved]= useState(true)

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
        setClue('Sorry! Try again')
        setTimeout(()=> setFlipped([]), 1000)
      }
    }}, [flipped, cards])

  useEffect(()=>{
    if(solved.length === cards.length){
      setGameSolved(true)
    }
  })

  return (
    <div className='bg-primary '>
      <div className='flex flex-col w-full h-[1000px] m-2.5'>
        <div className='grid grid-cols-3 gap-2 mt-8 '>
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
            <div
            className='mt-4 text-white font-semibold text-xl'
          >
            {clue}
          </div>
          )
        }

        { gameSolved && (
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
    </div>
  )
}

export default Chapter2
