"use client";
import React from 'react';
import SectionHeader from './SectionHeader';
import { skillsData } from '@/lib/data';
import { useSectionInView } from '@/lib/hooks';
import { motion } from 'framer-motion';

const fadeInAnimationVariants = {
    initial: {
        opacity:0,
        y:100,
    }, 
    animate: (index:number) => ({
        opacity:1,
        y:0,
        transition: {
            delay:0.05 * index
        }
    })
}

const Skills = () => {
    
    const { ref } = useSectionInView("Skills");

  return (
    <section ref={ref} id="skills" className='mb-28 max-w-[53rem] scroll-mt-28 text-center sm:mb-40'>
        <SectionHeader>My Skills</SectionHeader>
        <ul className='flex flex-wrap justify-center gap-2 text-lg text-gray-800'>
            {
                skillsData.map((skill, idx) => (
                    <motion.li 
                    className='bg-white dark:bg-white/10 dark:text-white/80 border border-black/[0.1] rounded-xl px-5 py-3' 
                    key={idx}
                    variants={fadeInAnimationVariants}
                    initial='initial'
                    whileInView="animate"
                    viewport={{
                        once:true,
                    }}
                    custom={idx}
                    >
                        {skill}
                    </motion.li>
                ))
            }
        </ul>
    </section>
  )
}

export default Skills;