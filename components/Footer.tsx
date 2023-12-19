import React from 'react'

const Footer = () => {
  return (
    <footer className='mb-10 px-4 text-center text-gray-500'>
        <small className='mb-2 block text-xs'>
            &copy; 2023 Jithin Manilal. All rights reserved.
        </small>
        <p className='text-xs'>
            <span className='font-semibold'>About this website:</span>
            &nbsp;built with React & Next.js, Typescript, Tailwind Css, Framer Motion, React Email & Resend.
        </p>
    </footer>
  )
}

export default Footer;