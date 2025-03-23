"use client";
import React from "react";

import { AnimatePresence, motion } from "motion/react";
import { CanvasRevealEffect } from "./ui/MyApproach";
import MagicButton from "./ui/MagicButton";



export function CanvasRevealEffectDemo() {
  return (
    <>
      <h1 className='font-bold text-4xl md:text-5xl text-center py-10'>
        My Process &  <span className='text-purple-500'>Workflow</span>
      </h1>
      <div className="py-20 flex flex-col lg:flex-row items-center justify-center bg-white dark:bg-black w-full gap-4 mx-auto px-8">
        <Card title=" User-Centric Design"   description=" I prioritize creating intuitive and user-friendly interfaces that enhance the overall user experience. My approach ensures that every design decision is made with the end user in mind, making applications easy to navigate and engaging to use.
          from the ground up." icon={<AceternityIcon order={1}
        />}>
          <CanvasRevealEffect
            animationSpeed={5.1}
            containerClassName="bg-emerald-900"
          />
        </Card>
        <Card title="Performance & Optimization"   description="I focus on building highly optimized and efficient applications. From fast-loading pages to smooth interactions, I ensure that my projects meet industry standards for performance, scalability, and responsiveness.." icon={<AceternityIcon order={2}

        />}>
          <CanvasRevealEffect
            animationSpeed={3}
            containerClassName="bg-black"
            colors={[
              [236, 72, 153],
              [232, 121, 249],
            ]}
            dotSize={2}
          />
          {/* Radial gradient for the cute fade */}
          <div className="absolute inset-0 [mask-image:radial-gradient(400px_at_center,white,transparent)] bg-black/50 dark:bg-black/90" />
        </Card>
        <Card title="Cutting-Edge Technology" description="Staying up to date with the latest technologies is at the core of my approach. I leverage modern frameworks, best coding practices, and innovative tools to build future-proof applications that are both robust and scalable." icon={<AceternityIcon order={3}


          />}>
          <CanvasRevealEffect
            animationSpeed={3}
            containerClassName="bg-sky-600"
            colors={[[125, 211, 252]]}
          />
        </Card>
      </div>
    </>
  );
}

const Card = ({
  title,
  icon,
  children,

  description
}: {
  title: string;
  icon: React.ReactNode;
  children?: React.ReactNode;
  description: string
}) => {
  const [hovered, setHovered] = React.useState(false);
  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="border border-black/[0.2] group/canvas-card flex items-center justify-center dark:border-white/[0.2]  max-w-sm w-full mx-auto p-4 relative h-[30rem] "
    >
      <Icon className="absolute h-6 w-6 -top-3 -left-3 dark:text-white text-black" />
      <Icon className="absolute h-6 w-6 -bottom-3 -left-3 dark:text-white text-black" />
      <Icon className="absolute h-6 w-6 -top-3 -right-3 dark:text-white text-black" />
      <Icon className="absolute h-6 w-6 -bottom-3 -right-3 dark:text-white text-black" />

      <AnimatePresence>
        {hovered && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="h-full w-full absolute inset-0"
          >
            {children}
          </motion.div>
        )}
      </AnimatePresence>

      <div className="relative z-20">
        <div className="text-center group-hover/canvas-card:-translate-y-4 absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] 
        group-hover/canvas-card:opacity-0 transition duration-200 min-w-40 mx-auto flex items-center justify-center">
          {icon}
        </div>
        <h2 className="dark:text-white text-xl opacity-0 group-hover/canvas-card:opacity-100 relative z-10 text-black mt-4  font-bold group-hover/canvas-card:text-white group-hover/canvas-card:-translate-y-2 transition duration-200 text-center">
          {title}
        </h2>

        <p
          className="text-[15px] text-slate-400 opacity-0 group-hover/canvas-card:opacity-100
         relative z-10 mt-4 group-hover/canvas-card:text-white text-center
         group-hover/canvas-card:-translate-y-2 transition duration-200 "
  
        >
          {description}
        </p>
      </div>
    </div>
  );
};

const AceternityIcon = ({ order }: { order: number }) => {
  return (
    <MagicButton title={`Approach ${order}`} position="right"></MagicButton>
  );
};

export const Icon = ({ className, ...rest }: any) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="currentColor"
      className={className}
      {...rest}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m6-6H6" />
    </svg>
  );
};
