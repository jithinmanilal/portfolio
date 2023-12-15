import React from 'react'

type SectionHeaderProps= {
    children: React.ReactNode;
}

const SectionHeader = ({children}:SectionHeaderProps) => {
  return (
    <h2 className='text-2xl font-medium capitalize mb-8 text-center'>{children}</h2>
  )
}

export default SectionHeader