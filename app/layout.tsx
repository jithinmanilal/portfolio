import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Header from '@/components/Header';
import ActiveSectionProvider from '@/context/activeSectionContext';

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Jithin | Portfolio',
  description: 'Jithin is a full stack Python Web Developer proficient in django and react.js',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className='!scroll-smooth'>
      <body className={`${inter.className} bg-gray-50 text-gray-950 pt-28 sm:pt-36`}>
        <div className="bg-[#fbe2e3] absolute top-[-6rem] -z-10 right[11rem] h-[31.25rem] w-[31.25rem] rounded-full blur-[10rem] sm:w-[68.75rem]"> </div>
        <div className="bg-[#dbd7fb] absolute top-[-1rem] -z-10 left[-35rem] h-[31.25rem] w-[50rem] rounded-full blur-[10rem] sm:w-[68.75rem] md:left-[-33rem] lg:[-28rem] xl:left-[-15rem] 2xl:left-[-5rem]"> </div>

        <ActiveSectionProvider>
          <Header />
          {children}
        </ActiveSectionProvider>
        </body>
    </html>
  )
}
