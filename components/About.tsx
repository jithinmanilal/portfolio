"use client";
import React from 'react';
import SectionHeader from './SectionHeader';
import { motion } from 'framer-motion';
import { useSectionInView } from '@/lib/hooks';

const About = () => {

  const { ref } = useSectionInView("About");

  return (
    <motion.section 
    ref={ref}
        className='mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28'
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{delay:0.175}}
        id="about"
    >
        <SectionHeader>About Me</SectionHeader>
        <p className="mb-8 text-lg text-gray-700 dark:text-gray-300">
          After graduating with a degree in{" "}
          <span className="font-medium text-gray-900 dark:text-gray-100">Chemistry</span> and amassing over 8 years of experience in various industries,
          I made the decision to pursue my passion for programming. I enrolled in a coding bootcamp, where I acquired skills in{" "}
          <span className="font-medium">full-stack web development</span>.
          <span className="italic">My favorite aspect of programming</span> is the thrill of problem-solving. I
          <span className="underline">{" "}cherish</span> the satisfaction of unraveling complex issues.
          My core tech stack includes{" "}
          <span className="font-medium">Django, Postgresql, and React.js</span>.
          I am also proficient in JavaScript and Figma. Constantly seeking new technologies to learn,
          I am currently on the lookout for a{" "}
          <span className="font-medium">full-time position</span> as a software developer.
        </p>
        <p className='text-gray-900 dark:text-gray-100'>
          <span className="italic">When I&apos;m not coding</span>, I enjoy reading
          books, particularly fiction. I also enjoy{" "}
          <span className="font-medium">learning new things</span>{" "}
          <span className="font-medium">& listening to podcasts</span>.
        </p>
    </motion.section>
  )
}

export default About