"use client";
import Image from 'next/image';
import { motion } from "framer-motion";
import React from 'react';
import Link from 'next/link';
import { BsArrowRight, BsLinkedin } from "react-icons/bs";
import { HiDownload } from "react-icons/hi";
import { FaGithubSquare, FaReact } from 'react-icons/fa';
import { SiDjango, SiFlask, SiFastapi, SiNextdotjs, SiPostgresql, SiMongodb } from "react-icons/si";
import { useSectionInView } from '@/lib/hooks';
import { useActiveSectionContext } from '@/context/activeSectionContext';

const Intro = () => {

  const { ref } = useSectionInView("Home", 0.5);
  const { setActiveSection, setTimeOfLastClick } = useActiveSectionContext();

  return (
    <section ref={ref} id='home' className='mb-28 max-w-[50rem] text-center sm:mb-0 scroll-mt-[100rem]'>
        <div className='flex items-center justify-center'>
            <div>
                <Image src="/Jithin.jpeg" alt='Jithin potrait' width={200} height={200} quality={95} priority={true}
                className='h-60 w-60 rounded-full object-cover border-[0.35rem] border-white dark:border-gray-400 shadow-xl' ></Image>
            </div>
        </div>
        <motion.h1
        className="mb-10 mt-4 px-4 text-xl font-medium !leading-[1.5] sm:text-2xl"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <p className="font-bold text-4xl text-gray-900 dark:text-gray-100">Jithin Manilal</p> 
        <p className='dark:text-gray-200 font-semibold text-gray-800'>
          Full Stack Python Developer
        </p>
        <p className='dark:text-gray-300 text-gray-600 text-xl'><span><SiDjango className="inline" /></span>{"  "}Django {" "}  <span><FaReact className='inline'/></span>{"  "}React.js{" "}  <span><SiPostgresql className='inline'/></span>{"  "}Postgresql</p>
        <p className='dark:text-gray-300 text-gray-600 text-base'> <span><SiFlask className="inline" /></span>{" "}Flask  {" "}<span><SiFastapi className="inline" /></span>{" "}FastAPI {" "}  <span><SiNextdotjs className="inline" /></span>{" "} Next.js {" "}<span><SiMongodb className="inline" /></span>MongoDB</p>
      </motion.h1>
      <motion.div className='flex flex-col sm:flex-row justify-center gap-2 px-4 text-base font-medium'
  initial={{ opacity: 0, y: 100 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ delay: 0.1 }}
>
  <Link
    href="#contact"
    onClick={() => {
      setActiveSection("Contact");
      setTimeOfLastClick(Date.now());
    }}
    className='group bg-gray-900 text-white px-7 py-3 flex items-center justify-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105 transition'
  >
    Reach me here <BsArrowRight className="opacity-70 group-hover:translate-x-1 transition" />
  </Link>
  {/* <a
    href="/Jithin_CV.pdf"
    download={true}
    className='group bg-white dark:bg-white/10 dark:text-white/60 border border-black/10 px-7 py-3 flex items-center justify-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 hover:text-gray-950 active:scale-105 transition'
  >
    Get Resume <HiDownload className="opacity-60 group-hover:translate-y-1 transition" />
  </a> */}
  <a
    href="https://www.linkedin.com/in/jithin-manilal/"
    target='_blank'
    className='group bg-white dark:bg-white/10 dark:text-white/60 border border-black/10  p-4 flex items-center justify-center gap-2  rounded-full outline-none focus:scale-[1.15] hover:scale-[1.15] hover:text-gray-950 active:scale-105 transition'
  >
    <BsLinkedin />
  </a>
  <a
    href="https://github.com/jithinmanilal"
    target='_blank'
    className='group bg-white dark:bg-white/10 dark:text-white/60 border border-black/10  p-4 flex items-center justify-center gap-2 text-[1.3rem] rounded-full outline-none focus:scale-[1.15] hover:scale-[1.15] hover:text-gray-950 active:scale-105 transition'
  >
    <FaGithubSquare />
  </a>
</motion.div>

    </section>
  )
}

export default Intro;