import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from 'framer-motion'

import { styles } from "../styles";
import { bordertop, borderbottom, nyka, Butter } from "../assets";
import { intro } from "../constants";	


const MainStory = () => {
	const navigate = useNavigate();	
	const audioRef = useRef(null)

	const [isVisible, setIsVisible]= useState(true)
  const [index, setIndex] = useState(0);

	const startAudio = () => {
    if (audioRef.current) {
      const playPromise = audioRef.current.play();
      if (playPromise !== undefined) {
        playPromise
          .then(() => {
            console.log("Audio is playing");
            setIsPlaying(true);
          })
          .catch((error) => console.log("Autoplay prevented:", error));
      }
    }
  };


  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(false), 3000); // 3s duration
    return () => clearTimeout(timer);
  }, []);


  return (
		<div className={`bg-primary relative h-full `}>
				<audio ref={audioRef} src={Butter} loop 
				onCanPlayThrough={() => console.log("Audio loaded")}
				/>
				<div className={`${styles.mobile}`}>
				
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
						className="w-full h-[3000px] flex flex-wrap !text-[30px]  text-white font-bold text-center items-center justify-center relative"
					>
							<div 
							className="w-full h-auto"
							style={{ display: index===4 ? "block": "none"}}>
							<img className="h-[auto] " src={bordertop} alt="border-top" />
						</div>


						{intro[index]}

						<div 
							className="w-full h-auto"
							style={{ display: index===4 ? "block": "none"}}>
							<img src={borderbottom} alt="border-bottom" />
						</div>


						<div 
							className="w-full h-auto"
							style={{ display: index===2 ? "block": "none"}}>
							<img src={nyka} alt="nyka" />
						</div>

						
					</motion.div>

					<div className="w-full h-full mb-10">
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
									onClick={ ()=> {
										setIndex( (prev) => Math.min(prev+1, intro.length-1));
										if(index === 0) startAudio();
									}
									}
									disabled={index === intro.length-1}
									className="bg-secondary text-white h-full w-full rounded-2xl disabled:opacity-50"
								>
									Next

								</button>
							</div>
							)
						}
						
					</div>
					

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
  	</div>
  )
}

export default MainStory
