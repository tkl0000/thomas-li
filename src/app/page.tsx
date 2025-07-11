"use client";
import Image from 'next/image';
import { Dispatch, SetStateAction, useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence, easeOut, easeInOut, easeIn } from 'framer-motion';
// import { MathJaxContext, MathJax } from 'better-react-mathjax';
// import Link from 'next/link';

const mathjaxConfig = {
  loader: { load: ['[tex]/ams'] },
  tex: { packages: { '[+]': ['ams'] } },
};

const imageDescriptions: { [key: string]: React.ReactNode } = {
  // "me":
  //   <div>This is a photo with the sun rising behind me.</div>,
  // "cb":
  //   <div>truth</div>,
  // "pasta":
  //   <div>pasta</div>,
  // "juho":
  //   <div>juho bay</div>,
  // "pennsylvania":
  //   <div>pennsylvania</div>,
  "oceancity":
    <div>ocean city</div>,
  "hongkong":
    <div>hong kong</div>,
  "stanford":
    <div>stanford</div>,
  "beijing":
    <div>beijing</div>,
  "doublerainbow":
    <div>home</div>,
  "dc":
    <div>washington dc</div>,
  "sf":
    <div>san francisco</div>
}

const iconLinks: { [key: string]: string} = {
  "x": "",
  "email": "",
  "linkedin" : "",
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

const Socials = () => {
  const [hover, setHover] = useState(false)

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={`${hover}`}
        initial={{ opacity: 0, transform: "translateX(10px)" }}
        animate={{ opacity: 1, transform: "translateX(0px)" }}
        exit={{ opacity: 0, transform: "translateX(-10px)" }}
        transition={{ duration: 0.2, ease: easeOut }}
        className="font-times flex cursor-pointer flex-grow "
        onMouseEnter={() => {setHover(true)}}
        onMouseLeave={() => {setHover(false)}}>
          {hover ? 
            <div>
              <a target="_blank" href="mailto:thomaskl@cmu.edu">email</a> · <a target="_blank" href="https://x.com/kthomasli">x</a> · <a target="_blank" href="https://www.linkedin.com/in/thomas-li-3a887029a/">linkedin</a>
            </div> : 
            <div>
              + + +
            </div>
          }
      </motion.div> 
    </AnimatePresence>
  )
}

const Title = (imageHover: string, imageFocus: string, active: boolean) => {
  return (
    <div className="font-times w-fit mt-20 flex flex-col">
      {/* thomas 康毅 li */}
      <div className="flex text-8xl lg:text-9xl"> 
        thomas li
        {/* <a href="mailto:thomaskl@cmu.edu">thomas li</a> */}
      </div>
      <div className="flex flex-row justify-between ">
        <div className="flex flex-row gap-2 flex-grow">
          {Socials()}
        </div>
        <div className="lg:hidden">
          <AnimatePresence mode="wait">
            (<motion.div
              key={`${imageFocus}-${active}`}
              initial={{ opacity: 0, transform: "translateX(-10px)" }}
              animate={{ opacity: 1, transform: "translateX(0px)" }}
              exit={{ opacity: 0, transform: "translateX(10px)"}}
              transition={{ duration: 0.2, ease: easeOut, }}
              className="font-times flex">
              {active === false ? defaultText : (imageDescriptions[imageFocus])}
            </motion.div> )
          </AnimatePresence>
        </div>
        <div className="hidden lg:block">
          <AnimatePresence mode="wait">
            (<motion.div
              key={imageHover}
              initial={{ opacity: 0, transform: "translateX(-10px)" }}
              animate={{ opacity: 1, transform: "translateX(0px)" }}
              exit={{ opacity: 0, transform: "translateX(10px)"}}
              transition={{ duration: 0.2, ease: easeOut, }}
              className="font-times flex">
              {imageHover === "" ? defaultText : (imageDescriptions[imageHover])}
            </motion.div> )
          </AnimatePresence>
        </div>
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
      Object.keys(imageDescriptions).map((key, index) => (
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
      transition={{ duration: 1 }}
      className="flex flex-col lg:flex-row h-screen lg:gap-0 lg:justify-between">
      <div className="flex flex-col items-center lg:items-start lg:pl-10">
        {Title(imageHover, imageFocus, active)}
      </div>
      <div className="flex flex-col justify-center h-screen lg:flex-row lg:justify-end lg:flex-grow ">
        {/* {imageHover} */}
        {/* {imageFocus} */}
        <div className="flex flex-row gap-5 overflow-x-auto mx-5 lg:mx-0 lg:my-5 lg:flex-col lg:overflow-y-auto lg:max-h-screen lg:mr-10 lg:w-full lg:items-end"
              ref={carouselRef}>
          {Carousel(setImageHover, setImageFocus, setActive)}
        </div> 
      </div>
    </motion.div>
  );
}

export default Home
