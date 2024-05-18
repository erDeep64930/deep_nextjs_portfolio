"use client"
import React from 'react'
import { motion } from 'framer-motion'
const Testpage = () => {
  // const variants = {
  //  variant1: {x:400, y:300, opacity:0.5},
  //  variant2: {x:300, y:-300, rotation:90}
  // }}
  return (
    <div className='h-full flex items-center justify-center'>
   <div className='w-96 h-96 bg-red-400 rounded'>
    <motion.div className='w-96 h-96 bg-red-400 rounded' initial={{x:-100}} animate={{x:200 , y:300, opacitty:0.5}} transition={{delay:2 , duration:4}}></motion.div>
    </div> 
    </div>
  )
}

export default Testpage