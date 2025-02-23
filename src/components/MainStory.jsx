import React, { useState, useEffect } from "react";
import { motion } from 'framer-motion'

import { styles } from "../styles";
import Stars from './canvas/Stars'


const MainStory = () => {
  const [isVisible, setIsVisible]= useState(true)

  const intro= [
    "🎉 DUN... DUN... DUN...",
    "Today is a VERY special day! 🎉",
    "It’s Nyka’s birthday! 🎂✨",
    "But wait… something suspicious is going on. 🤨",
    "BTS and her super awesome, totally amazing cousin (yeah, it's me 😏) have a TOP-SECRET mission for her.",
    "Before she can unlock her mystery gift, she must prove one thing:",
    "💜 Is she REALLY a true BTS fan? 💜",
    "They’ve set up some fun, little tests just for her. Will she pass the test? ",
		"Or will she have to face… the ultimate Bangtan penalty? (Just kidding… or are we? 👀)",
    "👉 Are you ready, Nyka? Let the adventure begin! 🚀💜"

  ]

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(false), 3000); // 3s duration
    return () => clearTimeout(timer);
  }, []);


  return (
    <div className={`${styles.padding} bg-primary relative`}>
      {isVisible && (
			<motion.div
			className="absolute inset-0 bg-black z-10"
			initial={{ opacity: 1 }}
			animate={{ opacity: 0 }}
			transition={{ duration: 3 }}
			/> 
     	)}

		<div className="relative z-0 w-full h-full flex flex-col">
			<motion.div
				key= {index}
				className="w-full h-full flex flex-wrap !text-[30px]  text-white font-bold text-center items-center justify-center"
			>
				{intro[index]}

				
			</motion.div>

			{ index<intro.length-1 && (
					<div className="relative h-[100px] w-full flex flex-row gap-4 pt-4 ">
					<button
						onClick={ ()=> setIndex( (prev) => Math.max(prev-1, 0))}
						disabled={index === 1}
						className="bg-secondary text-white w-full h-full rounded-2xl disabled:opacity-50 "  
						>
							Back
					</button>
	
					<button
						onClick={ ()=> setIndex( (prev) => Math.min(prev+1, intro.length-1))}
						disabled={index === intro.length-1}
						className="bg-secondary text-white h-full w-full rounded-2xl disabled:opacity"
					>
						Next
					</button>
				 </div>
				)
			}

			{index===intro.length-1 && (
				<div className="w-full h-full flex flex-col justify-center items-center">
				<button
					onClick={ ()=> setIndex(0)}
					className="bg-secondary text-white w-1/2 h-1/4 rounded-2xl"
				>
					Start the Adventure!
				</button>
			</div>
			)

			}


		
      
    </div>  
   	<Stars />
  	</div>
  )
}

export default MainStory
