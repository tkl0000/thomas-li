"use client";
import Image from 'next/image';
import Link from 'next/link';
import {useState} from 'react';

export default function Home() {

  const [imageHover, setImageHover] = useState(false);

  return (
    <div className="flex flex-row gap-3 justify-between mx-10">
      <div className="flex flex-col">
        <p>Hello, I'm Thomas, welcome to my website!</p>
        <p>I'm an incoming freshman at Carnegie Mellon University.</p>
        <p>In my free time, I enjoy watching <a href="https://www.youtube.com/c/3blue1brown">3Blue1Brown</a> and <a href="google.com">skateboarding</a>.</p>
      </div>
      <div className="flex flex-col gap-5">
          <Image
            src="/images/me.png"
            width={220}
            height={100}
            alt="me"
          />
          <Image
            src="/images/pasta.png"
            width={220}
            height={100}
            alt="pasta"
          />
          <Image
            src="/images/juho.png"
            width={220}
            height={100}
            alt="pasta"
          />
      </div>
    </div>
  );
}