"use client";
import Image from 'next/image';
import { Dispatch, SetStateAction, useEffect, useRef, useState } from 'react';
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

const Title = (imageHover: string, imageFocus: string, active: boolean) => {
  return (
    <div className="font-times w-fit mt-20">
      {/* thomas 康毅 li */}
      <div className="flex text-8xl lg:text-9xl hover:underline cursor-pointer"> 
        <a href="mailto:thomaskl@cmu.edu">thomas li</a>
      </div>
      <div className="lg:hidden">
        <AnimatePresence mode="wait">
          (<motion.div
            key={`${imageFocus}-${active}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="font-times flex justify-end">
            {active === false ? defaultText : (descriptions[imageFocus])}
          </motion.div> )
        </AnimatePresence>
      </div>
      <div className="hidden lg:block">
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
    </div>
  )
}

const defaultText = "CS @ Carnegie Mellon University"

const Carousel = (setImageHover: Dispatch<SetStateAction<string>>, setImageFocus: Dispatch<SetStateAction<string>>, setActive: Dispatch<SetStateAction<boolean>>) => {
  const itemsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const focusedImage = String(entry.target.getAttribute('alt'));
            setImageFocus(focusedImage)
          }
        });
      },
      { root: null, threshold: 0.7 } // 50% visible = considered "focused"
    );

    itemsRef.current.forEach(item => {
      if (item) observer.observe(item);
    });

    return () => {
      itemsRef.current.forEach(item => {
        if (item) observer.unobserve(item);
      });
    };
  }, [])

  return (
      Object.keys(descriptions).map((key, index) => (
          <Image
            src={`/images/${key}.png`}
            width={300}
            height={100}
            alt={key}
            key={key}
            data-index={index}
            ref={(el) => {
              itemsRef.current[index] = el;
            }}
            onMouseEnter={() => {
              setImageHover(key)
            }}
            onMouseLeave={() => {
              setImageHover("")
            }}
          />
      ))
  );
}

const Home = () => {

  const [imageHover, setImageHover] = useState(""); // desktop
  const [imageFocus, setImageFocus] = useState("Default Focus"); // mobile
  const [active, setActive] = useState(false) // mobile
  const carouselRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setActive(true);  
    };

    const container = carouselRef.current;
    if (container) {
      container.addEventListener("scroll", handleScroll, { passive: true });
    }

    return () => {
      if (container) {
        container.removeEventListener("scroll", handleScroll);
      }
    };
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="flex flex-col lg:flex-row h-screen lg:gap-0 lg:justify-between">
      <div className="flex flex-col items-center lg:items-start">
        {Title(imageHover, imageFocus, active)}
      </div>
      <div className="flex flex-col justify-center h-screen lg:flex-row lg:justify-end lg:flex-grow ">
        {/* {imageHover} */}
        {/* {imageFocus} */}
        <div className="flex flex-row gap-5 overflow-x-auto lg:flex-col lg:overflow-y-auto lg:max-h-screen lg:mr-10 lg:mb-0 lg:w-full lg:items-end"
              ref={carouselRef}>
          {Carousel(setImageHover, setImageFocus, setActive)}
        </div> 
      </div>
    </motion.div>
  );
}

export default Home
