"use client";
import React, { useEffect } from 'react';
import SectionHeader from './SectionHeader';
import { projectsData } from '@/lib/data';
import Project from './Project';
import { useInView } from 'react-intersection-observer';
import { useActiveSectionContext } from '@/context/activeSectionContext';


const Projects = () => {

  const {ref, inView } = useInView({
    threshold: 0.5,
  });
  const { setActiveSection } = useActiveSectionContext();
  
  useEffect(() => {
    if (inView) {
      setActiveSection("Projects")
    }
  },[inView, setActiveSection]);

  return (
    <section ref={ref} id='projects' className='scroll-mt-28'>
        <SectionHeader>My Projects</SectionHeader>
        <div>
            {
              projectsData.map((project, index)=>(
                <React.Fragment key={index} >
                  < Project {...project} />
                </React.Fragment>
              ))
            }
        </div>
    </section>
  )
}

export default Projects

