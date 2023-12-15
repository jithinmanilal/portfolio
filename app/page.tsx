import About from '@/components/About';
import Intro from '@/components/Intro';
import Projects from '@/components/Projects';
import SectionDivider from '@/components/SectionDivider';

import React from 'react'

const page = () => {
  return (
    <main className='flex flex-col items-center px-4'>
      <Intro />
      <SectionDivider/>
      <About />
      <Projects />
    </main>
  )
}

export default page