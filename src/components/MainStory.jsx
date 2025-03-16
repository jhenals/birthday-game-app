import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from 'framer-motion'

import { styles } from "../styles";
import { intro } from "../constants";	


const MainStory = () => {
	const navigate = useNavigate();	

	const [isVisible, setIsVisible]= useState(true)
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(false), 3000); // 3s duration
    return () => clearTimeout(timer);
  }, []);


  return (
    <div className={`${styles.padding} bg-primary relative  `}>
      {isVisible && (
			<motion.div
			className="absolute inset-0 bg-black z-10"
			initial={{ opacity: 1 }}
			animate={{ opacity: 0 }}
			transition={{ duration: 3 }}
			/> 
     	)}

		<div className=" z-2 w-full h-full flex flex-col">
			<motion.div
				key= {index}
				className="w-full h-full flex flex-wrap !text-[30px]  text-white font-bold text-center items-center justify-center"
			>
				{intro[index]}

				<div 
					className="w-full h-full flex flex-col items-center justify-center"
					style={{ display: index===2 ? "block": "none"}}>
					 <img src="src/assets/nykss/nyk1.png" alt="nyka" />
				</div>

				
			</motion.div>

			{ index<intro.length-1 && (
					<div className=" h-[100px] w-full flex flex-row gap-4 pt-4 ">
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
						className="bg-secondary text-white h-full w-full rounded-2xl disabled:opacity-50"
					>
						Next

					</button>
				 </div>
				)
			}

			{index===intro.length-1 && (
				<div className="w-full h-full flex flex-col justify-center items-center">
				<button
					onClick={ ()=> navigate('/chapter-one')}
					className="bg-secondary text-white w-1/2 h-1/4 rounded-2xl"
				>
					Start the Adventure!
				</button>
			</div>
			)

			}
    </div>  
  	</div>
  )
}

export default MainStory
