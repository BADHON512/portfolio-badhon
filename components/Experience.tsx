import React from 'react'
import { Button } from './ui/BorderAnimation'
import { workExperience } from '@/data'

type Props = {}

const Experience = (props: Props) => {
  return (
<div className='py-20 w-full flex flex-col items-center text-center'>
  <h1 className='font-bold text-4xl md:text-5xl leading-tight'>
    Hire a Passionate <span className="text-purple-500">Next.js Developer</span> <br />
    Build Scalable & Modern <span className='text-purple-500'>Web Apps</span>
  </h1>

  <div className="w-full max-w-4xl mt-16">
    <Button
      duration={Math.floor(Math.random() * 10000) + 10000}
      borderRadius="1.75rem"
      style={{
        background: "linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)",
        borderRadius: `calc(1.75rem * 0.96)`,
      }}
      className="flex flex-col items-center justify-center px-8 py-12 text-white border border-neutral-200 dark:border-slate-800 w-full rounded-xl shadow-lg"
    >
      <h2 className='text-2xl md:text-3xl font-semibold mb-4 text-slate-300'>
        Looking for a Skilled Frontend Developer?  
      </h2>
      
      <p className='text-lg md:text-xl text-slate-400 max-w-2xl'>
        I specialize in building **fast**, **responsive**, and **user-friendly** web applications using **Next.js, Tailwind CSS, and TypeScript**.  
        If you're looking for someone to turn your ideas into reality—**let’s connect!**
      </p>

      <h3 className='text-[#a4e98f] text-xl md:text-2xl font-bold mt-8'>Why Hire Me?</h3>

      <ul className='text-left text-lg md:text-xl text-slate-300 mt-5 space-y-3'>
        <li>✅ **Expert in Next.js & Tailwind CSS** – Clean, maintainable, and scalable code.</li>
        <li>✅ **Performance-Optimized UI** – Ensuring speed, SEO, and accessibility.</li>
        <li>✅ **Real-World Experience** – Built an Instagram clone, Madrasa website, and more.</li>
        <li>✅ **Modern Tech Stack** – Proficient in React, Prisma, Clerk, Redis, and Socket.io.</li>
        <li>✅ **Passionate & Dedicated** – I love programming and always strive for perfection.</li>
      </ul>

      <div className="mt-10">
        <span className="px-6 py-3 text-lg font-semibold bg-purple-500 hover:bg-purple-600 transition rounded-lg">
          Let's Work Together 🚀
        </span>
      </div>
    </Button>
  </div>
</div>

  )
}

export default Experience