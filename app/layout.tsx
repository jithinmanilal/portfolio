import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Header from '@/components/Header';
import ActiveSectionProvider from '@/context/activeSectionContext';
import { Toaster } from 'react-hot-toast';
import Footer from '@/components/Footer';
import ThemeSwitch from '@/components/ThemeSwitch';
import ThemeContextProvider from '@/context/themeContext';

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
      <body className={`${inter.className} bg-gray-50 dark:bg-gray-900 dark:text-gray-50 dark:text-opacity-90 text-gray-950 pt-28 sm:pt-36`}>
        <div className="bg-[#fad5c3] absolute top-[-6rem] -z-10 right-[11rem] h-[31.25rem] w-[31.25rem] rounded-full blur-[10rem] sm:w-[68.75rem] sm:h-[68.75rem] dark:bg-[#946263]"></div>
        <div className="bg-[#d4d0f1] absolute top-[-1rem] -z-10 left-[-35rem] h-[31.25rem] w-[50rem] rounded-full blur-[10rem] sm:w-[68.75rem] sm:h-[68.75rem] md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem] dark:bg-[#676394]"></div>

        <ThemeContextProvider>
          <ActiveSectionProvider>
            <Header />
            {children}
            <Toaster position='top-right' />
            <Footer />
            <ThemeSwitch />
          </ActiveSectionProvider>
        </ThemeContextProvider>

        </body>
    </html>
  )
}
