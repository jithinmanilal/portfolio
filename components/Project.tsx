"use client";
import React, { useRef } from "react";
import Image from 'next/image';
import { motion, useScroll, useTransform } from 'framer-motion';
import { projectsData } from '@/lib/data';


type ProjectProps = typeof projectsData[number];

export default function Project({ title, description, tags, imageUrl, siteUrl }: ProjectProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1.33 1"]
  });

  const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.5, 1])
  const opacityProgress = useTransform(scrollYProgress, [0, 1], [0.6, 1])
  

  return (
    <motion.div ref={ref} style={{scale:scaleProgress, opacity:opacityProgress}} className="group mb-3 sm:mb-8 last:mb-0">
        <section className='bg-gray-100 dark:bg-white/10 dark:hover:bg-white/20 dark:text-white max-w-[42rem] border border-black/5 rounded-lg overflow-hidden sm:pr-8 relative sm:h-[20rem] sm:group-even:pl-8 hover:bg-gray-200 transition'>
        <div className='pt-4 pb-7 px-5 sm:pl-10 sm:pr-2 sm:pt-10 sm:max-w-[50%] flex flex-col h-full sm:group-even:ml-[18rem]'>
            <h3 className='text-lg font-semibold'>{title}</h3>
            <p className='mt-2 leading-relaxed text-gray-700 dark:text-white/70'>{description}</p>
            <ul className='flex flex-wrap mt-4 gap-2 sm:mt-auto'>
            {tags.map((tag, idx) => (
                <li className='bg-black/[0.7] px-3 py-1 text-[0.7rem] uppercase tracking-wider text-white dark:text-white/70 rounded-full' key={idx}>{tag}</li>
            ))}
            </ul>
        </div>
        <a target="_blank" href={siteUrl}>
          <Image className='absolute hidden sm:block top-8 -right-40 w-[28.25rem] rounded-t-lg shadow-2xl group-hover:-translate-x-3 group-hover:translate-y-3 group-hover:-rotate-2 group-even:group-hover:translate-x-3 group-even:group-hover:translate-y-3 group-even:group-hover:rotate-2 group-hover:scale-105 group-even:right-[initial] group-even:-left-40 transition' src={imageUrl} alt={title} quality={95} />
        </a>
        </section>
    </motion.div>
  )
}