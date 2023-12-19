"use client";
import React, { useEffect } from 'react';
import SectionHeader from './SectionHeader';
import { projectsData } from '@/lib/data';
import Project from './Project';
import { useSectionInView } from '@/lib/hooks';

const Projects = () => {

  const { ref } = useSectionInView("Projects", 0.5);

  return (
    <section ref={ref} id='projects' className='scroll-mt-28 mb-28'>
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

