"use client";
import Image from 'next/image';
import Link from 'next/link';
import {useState} from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const descriptions: {[key: string]: string}= {
  "me" : "This is me with the sun rising behind me.",
  "pasta" : "This is one year old me struggling to eat some pasta.", 
  "juho" : "This is my good friend Juho giving me a piggy back ride.",
  "cb" : "Fax.",
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
          {imageHover === "" ? defaultText : (<div><p>{descriptions[imageHover]}</p></div>)}
        </motion.div> )
      </AnimatePresence>
      <div className="flex flex-col gap-5 ml-4">
          { Object.keys(descriptions).map((key) => (
            <Image
              key={key}
              src={`/images/${key}.png`}
              width={220}
              height={100}
              alt={key}
              onMouseEnter={() => {setImageHover(key)}}
              onMouseLeave={() => {setImageHover("")}}
            />
          ))}
      </div>
    </motion.div>
  );
}