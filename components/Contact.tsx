"use client";
import React from 'react'
import SectionHeader from './SectionHeader'
import { motion } from 'framer-motion';
import { useSectionInView } from '@/lib/hooks';
import { sendEmail } from '@/actions/sendEmail'; 
import SubmitButton from './SubmitButton';
import toast from 'react-hot-toast';

const Contact = () => {

  const { ref } = useSectionInView("Contact", 0.5);

  return (
    <motion.section ref={ref} id="contact" 
    className='mb-20 sm:mb-28 w-[min(100%, 38rem)] scroll-mt-24'
    initial={{opacity:0,}}
    whileInView={{opacity:1,}}
    transition={{duration:1,}}
    viewport={{once:true,}}
    >
        <SectionHeader>Contact Me</SectionHeader>
        <p className='text-gray-700 dark:text-white/80 text-center -mt-6'>Contact me directly by{" "}<a className='underline text-blue-800' target='_blank' href="mailto:jithinmanilal736@gmail.com">email</a>{" "}or through this form.</p>
        <form className='mt-5 flex flex-col dark:text-black/80' action={async (formData) => {
          const { error } = await sendEmail(formData) || {};
          if (error) {
            toast.error(error)
          } else {
            toast.success("Email sent successfully!")
          };       
        }}>
          <input name="senderEmail" className='h-14 px-4 my-3 rounded-lg border border-black/10 dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 dark:outline-none transition-all' required maxLength={30} type="email" placeholder='Your Email' id="" />
          <input name="messageSubject" className='h-14 px-4 my-3 rounded-lg border border-black/10 dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 dark:outline-none transition-all' required maxLength={50} type="text" placeholder='Message Subject' id="" />
          <textarea name='message' className='h-52 p-4 my-3 rounded-lg border border-black/10 dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 dark:outline-none transition-all' required minLength={30} maxLength={2000} placeholder='Your Message' />
          <SubmitButton />
        </form>
        
    </motion.section>
  )
}

export default Contact;