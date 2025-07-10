"use client";
import Image from 'next/image';
import { Dispatch, SetStateAction, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
// import { MathJaxContext, MathJax } from 'better-react-mathjax';
// import Link from 'next/link';

const mathjaxConfig = {
  loader: { load: ['[tex]/ams'] },
  tex: { packages: { '[+]': ['ams'] } },
};

const descriptions: { [key: string]: React.ReactNode } = {
  // "me":
  //   <div>This is a photo with the sun rising behind me.</div>,
  // "cb":
  //   <div>truth</div>,
  // "pasta":
  //   <div>pasta</div>,
  // "juho":
  //   <div>juho bay</div>,
  "oceancity":
    <div>ocean city, md</div>,
  "stanford":
    <div>stanford, ca</div>,
  "hongkong":
    <div>hong kong</div>,
  "beijing":
    <div>beijing</div>,
}

// const defaultText: React.ReactNode = (
//   <div>
//     {/* <p>Hello, I'm Thomas, welcome to my website!</p>
  //   <br></br>
  //   <p>I'm an incoming freshman at Carnegie Mellon University.</p>
  //   <br></br>
  //   <p>In my free time, I enjoy watching <a href="https://www.youtube.com/c/3blue1brown">3Blue1Brown</a> and <a href="https://youtu.be/r-bkrRGm4Bo?si=v0ldHDjmVlT72Ha8">skateboarding</a>.</p>
  // </div>
// ) */}

const Title = (imageHover: string) => {
  return (
    <div className="font-times w-fit mt-20">
      {/* thomas 康毅 li */}
      <div className="flex text-8xl lg:text-9xl hover:underline cursor-pointer"> 
        <a href="mailto:thomaskl@cmu.edu">thomas li</a>
      </div>
      <AnimatePresence mode="wait">
        (<motion.div
          key={imageHover}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="font-times flex justify-end">
          {imageHover === "" ? defaultText : (descriptions[imageHover])}
        </motion.div> )
      </AnimatePresence>
    </div>
  )
}

const defaultText = "CS @ Carnegie Mellon University"

const Carousel = (setImageHover: Dispatch<SetStateAction<string>>) => {
  return (
    Object.keys(descriptions).map((key) => (
      <Image
        key={key}
        src={`/images/${key}.png`}
        width={300}
        height={100}
        alt={key}
        onMouseEnter={() => { setImageHover(key) }}
        onMouseLeave={() => { setImageHover("") }}
      />
    ))
  )
}

const Home = () => {

  const [imageHover, setImageHover] = useState("");

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="flex flex-col lg:flex-row h-screen justify-between">
      <div className="flex flex-col items-center lg:items-start">
        {Title(imageHover)}
      </div>
      <div className="flex flex-row gap-5 overflow-x-auto mb-10 lg:flex-col lg:overflow-y-auto lg:max-h-screen lg:mr-10 lg:mb-0">
        {Carousel(setImageHover)}
      </div> 
    </motion.div>
  );
}

export default Home
