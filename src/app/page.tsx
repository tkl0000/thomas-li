"use client";
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MathJaxContext, MathJax } from 'better-react-mathjax';

const mathjaxConfig = {
  loader: { load: ['[tex]/ams'] },
  tex: { packages: { '[+]': ['ams'] } },
};

const descriptions: { [key: string]: React.ReactNode } = {
  "me":
    <div>This is a photo with the sun rising behind me.</div>,
  "pasta":
    <div>This is one year old me struggling to eat some pasta.</div>,
  "juho":
    <div>This is my good friend Juho giving me a piggy back ride.</div>,
  "cb":
    <div>Truth</div>,
  // "problem":
  //   <div>
  //     <MathJaxContext config={mathjaxConfig}>
  //       <p className="font-georgia">Fifty passengers, numbered 1 through 50, are boarding a plane with 50 seats, where each passenger <MathJax inline>{"\\(i\\)"}</MathJax> is assigned to seat <MathJax inline>{"\\(i\\)"}</MathJax>. However, the first 10 passengers are drunk. Passengers board the plane one at a time in order from 1 to 50. Each of the first 10 passengers selects a random unoccupied seat. Every subsequent passenger sits in their assigned seat if it is still available; otherwise, they choose a random seat from the remaining unoccupied ones. What is the expected number of passengers who end up sitting in their assigned seats?</p>
  //     </MathJaxContext>
  //   </div>,
}

const defaultText: React.ReactNode = (
  <div>
    <p>Hello, I'm Thomas, welcome to my website!</p>
    <br></br>
    <p>I'm an incoming freshman at Carnegie Mellon University.</p>
    <br></br>
    <p>In my free time, I enjoy watching <a href="https://www.youtube.com/c/3blue1brown">3Blue1Brown</a> and <a href="https://youtu.be/r-bkrRGm4Bo?si=v0ldHDjmVlT72Ha8">skateboarding</a>.</p>
  </div>
)

export default function Home() {

  const [imageHover, setImageHover] = useState("");

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="flex flex-row gap-3 justify-between mx-10 font-sf">
      <AnimatePresence mode="wait">
        (<motion.div
          key={imageHover}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="sticky top-14 w-3/4 h-fit break-words">
          {imageHover === "" ? defaultText : (descriptions[imageHover])}
        </motion.div> )
      </AnimatePresence>
      <div className="flex flex-col gap-5 ml-4">
        {Object.keys(descriptions).map((key) => (
          <Image
            key={key}
            src={`/images/${key}.png`}
            width={300}
            height={100}
            alt={key}
            onMouseEnter={() => { setImageHover(key) }}
            onMouseLeave={() => { setImageHover("") }}
          />
        ))}
      </div>
    </motion.div>
  );
}