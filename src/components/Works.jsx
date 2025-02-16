import React from "react";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import styled from "styled-components";

import { styles } from "../styles";
import { github } from "../assets";
import { SectionWrapper } from "../hoc";
import { projects, highlightedProjects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";

const ProjectCardCarousel = ({
  name,
  tags,
  image,
  source_code_link,
}) => {
  return (
    <motion.div className='w-[300px] h-[400px] rounded-[20px] p-[1px] shadow-card green-pink-gradient'>
      <div className="bg-[#1d1836] rounded-[20px] p-2 h-full ">
        <div className='relative w-full h-[230px]'>
          <img
            src={image}
            alt='project_image'
            className='w-full h-full object-cover rounded-2xl'
          />

          <div className='absolute inset-0 flex justify-end m-3 card-img_hover'>
            <div
              onClick={() => window.open(source_code_link, "_blank")}
              className='black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer'
            >
              <img
                src={github}
                alt='source code'
                className='w-1/2 h-1/2 object-contain'
              />
            </div>
          </div>
        </div>

        <div className='mt-5'>
          <h3 className='text-white font-bold text-[24px]'>{name}</h3>
         
        </div>

        {/* TODO: When hovering over the project card, the tags and whole description should be 
            displayed in a row below the description.
        */}
        
        <div className='mt-4 flex flex-wrap gap-2'>
          {tags.map((tag) => (
            <p
              key={`${name}-${tag.name}`}
              className={`text-[14px] ${tag.color}`}
            >
              #{tag.name}
            </p>
          ))}
        </div>
        
      </div>
      
    </motion.div>
  );
};

const ProjectCarousel=({projs})=>{
  return (
    <CarouselContainer>
      <Swiper
        centeredSlides={true}
        effect={"coverflow"}
        grabCursor={true}
        initialSlide={1}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        modules={[EffectCoverflow]}>
        {projs.map((project, index) => (
          <SwiperSlide key={`project-${index}`}>
            <ProjectCardCarousel index={index} {...project} />
          </SwiperSlide>
        ))}
        </Swiper>
    </CarouselContainer>
  )
}

const CarouselContainer= styled.div`
  margin-top: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  .swiper .swiper-slide{
    background-positions: center;
    width: 300px;
    border-radius: 10px;
    position: relative;
    overflow: hidden;
    }

  .swiper .swiper-slide::after {
    content: "";
    position: absolute;
    bottom: -1px; /* Adjust the distance of the reflection */
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(transparent, transparent, #0006); /* Reflection effect */
    box-shadow: inset 0 -1px 5px rgba(0, 0, 0, 0.3); /* Optional shadow for more depth */
    transform: scaleY(-1); /* Flips the reflection */
    transform-origin: top;
  }
  `

const ProjectCard = ({ name, description, tags, image, source_code_link }) => {
  return (
    <motion.div className='xl:w-[700px] w-full h-full rounded-[20px] p-[1px] shadow-card green-pink-gradient'>
      <div className="bg-[#1d1836] rounded-[20px] p-2 h-full flex flex-col xs:flex-row md:flex-row  relative ">
        <div className='relative w-[300px] mr-5 '>
          <img
              src={image}
              alt='project_image'
              className='w-full h-full object-cover rounded-2xl '
            />
        </div>
      

        <div className='w-full mt-5 flex flex-col '>
          <div className= 'flex justify-between'>
            <h3 className='text-white font-bold text-[24px]'>{name}</h3>

            <div    
                onClick={ () => window.open(source_code_link, "_blank")}
                className='black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer sm:relative absolute top-0 right-0 mt-2 mr-2'
            >
                <img
                  src={github}
                  alt='source code'
                  className='w-1/2 h-1/2 object-contain'
                />
            </div>
           
          </div>
          
          <div className='p-1'>
            <p className='mt-2 text-secondary text-[14px]  '>
              {description}
            </p>

            <div className='mt-4 flex flex-wrap gap-2'>
              {tags.map((tag) => (
                <p
                  key={`${name}-${tag.name}`}
                  className={`text-[14px] ${tag.color}`}
                >
                  #{tag.name}
                </p>
              ))}
            </div>


          </div>
         
        </div>

      </div>
    </motion.div>
   
  );
};

const ProjectList = ({ projects }) => {
  return(
    <div className='flex flex-col h-[1000px] overflow-y-auto scrollbar-hide  gap-5'>
      {projects.map((project, index) => (
        <ProjectCard key={`project-${index}`} {...project} />
      ))}
    </div>
  )


}
const Works = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} `}>My work</p>
        <h2 className={`${styles.sectionHeadText}`}>Projects.</h2>
      </motion.div>

      <div className='w-full flex'>
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className='mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]'
        >
          The projects featured here showcase my skills and practical experience, 
          including both personal and university-related work. Each project is accompanied 
          by a brief description, along with links to the source code (and live demos).
        </motion.p>
      </div>

      <div className="flex justify-center flex-col items-center mt-10">
         {/*Highlighted Projects  */}
         <div className="hidden xs:block">
          <ProjectCarousel projs={highlightedProjects} />
         </div>
       


        <div className="mt-20 mb-10 justify-center flex-col items-center hidden xs:block">
          <h2 className={styles.heroSubText}>All Projects</h2>
        </div>
         {/* All Project Lists */}
        <ProjectList projects={projects} />
      </div>

    

    </>
  );
};

export default SectionWrapper(Works, "projects");
