"use client"

import React from 'react'
import img from '@/public/img.jpeg'
import Image from 'next/image'
import { delay, easeInOut, motion, spring } from 'framer-motion'
import Link from 'next/link'
import {BsArrowRight, BsLinkedin} from 'react-icons/bs'
import {HiDownload} from 'react-icons/hi'
import { FaGitSquare, FaGithubSquare } from 'react-icons/fa'


export default function Intro() {
  return (
    <section className='mb-28 max-w-[50rem] text-center sm:mb-0'>
        <div className='flex items-center justify-center'>
            <div className='relative'>
                <motion.div
                    initial={{opacity:0,scale:0}}
                    animate={{opacity:1,scale:1}}
                    transition={{
                        type:'tween',
                        duration:0.2
                    }}
                >
                    <Image 
                    src={img}
                    width="192"
                    height="192"
                    quality="95"
                    priority={true}
                    alt="Portfolio image"
                    className='h-24 w-24 rounded-full border-[0.35rem] border-white object-cover shadow-xl'
                    />
                </motion.div>
                <motion.span 
                  className='text-4xl absolute bottom-0 right-0'
                  initial={{opacity:0,scale:0}}
                  animate={{opacity:1,scale:1}}
                  transition={{
                    type:'spring',
                    stiffness:125,
                    delay:0.1,
                    duration:0.7
                }}
                >
                    👋🏻
                </motion.span>
            </div>
        </div>
        <motion.p 
            className=' mb-10 mt-4 px-4 text-4xl !leading-[1.5] sm:text-2xl'
            initial={{opacity:0,y:100}}
            animate={{opacity:1,y:0}}
        >
            
                Hi I am <span className='font-bold text-2xl hover:bg-gradient-to-r from-[#e81cff] to-[#40c9ff] hover:inline-block hover:text-transparent hover:bg-clip-text transition'>Anurag</span> and I am here to sell myself.
                Not exactly myself, 😆 but some of <span className='font-bold text-2xl hover:bg-gradient-to-r from-[#e81cff] to-[#40c9ff] hover:inline-block hover:text-transparent hover:bg-clip-text transition'>robust</span> and <span className='font-bold text-2xl hover:bg-gradient-to-r from-[#e81cff] to-[#40c9ff] hover:inline-block hover:text-transparent hover:bg-clip-text transition'>articulate</span> <span className='underline texxt-2xl font-bold'>code</span> which builds <span className='font-bold text-3xl hover:bg-gradient-to-r from-[#e81cff] to-[#40c9ff] hover:inline-block hover:text-transparent hover:bg-clip-text transition'>picture perfect</span>, <motion.span initial={{opacity:0,x:-100}} animate={{opacity:1,x:0}} transition={{delay:1.5,rotate:30}} className='font-bold text-3xl hover:bg-gradient-to-r from-[#e81cff] to-[#40c9ff] hover:inline-block hover:text-transparent hover:bg-clip-text transition'>user interactive</motion.span> <span>completely responsive</span> <span className='font-bold text-3xl hover:bg-gradient-to-r from-[#e81cff] to-[#40c9ff] hover:inline-block hover:text-transparent hover:bg-clip-text transition'>Web applications.</span> 
            
        </motion.p>
        <motion.div 
           className='flex flex-col sm:flex-row items-center justify-center text-lg font-medium gap-3 px-4'
           initial={{opacity:0,x:-100}}
           animate={{opacity:1,x:0}}
           transition={{delay:0.1}}
        >
            <Link 
              href='#contact'
              className='group bg-gray-900 text-white px-7 py-3 flex items-center gap-2 rounded-2xl outline-none focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105 transition'
              >Contact Me <BsArrowRight className='opacity-70 group-hover:translate-x-1 transition'/>{" "}
            </Link>

            <a
              className='group bg-white text-gray-900 px-7 py-3 flex items-center gap-2 rounded-2xl outline-none focus:scale-110 hover:scale-110 active:scale-105 transition cursor-pointer border border-black/10 '
              href='/AnuragAmbekarCV .pdf'
              download
            >
                Download CV 
                <HiDownload className='text-xl opacity-60 group-hover: translate-y-1 transition'/>
            </a>

            <a 
              className='bg-white text-gray-900 p-4 flex items-center gap-2 rounded-2xl focus:scale-120 hover:scale-110 active:scale-105 transition cursor-pointer border border-black/10'
              href=''
              target='_blank'
            >
                <BsLinkedin/>
            </a>

            <a 
              className='bg-white text-gray-900 p-4 flex items-center gap-2 rounded-2xl text-[1.35rem] focus:scale-120 hover:scale-110 active:scale-105 transition cursor-pointer border border-black/10'
              href=''
              target='_blank'
            >
                <FaGithubSquare/>
            </a>

        </motion.div>
    </section>
  )
}
