"use client";
import Image from 'next/image';
import Link from 'next/link';
import {useState} from 'react';

export default function Home() {

  const [imageHover, setImageHover] = useState(false);

  return (
    <div className="flex flex-col items-center gap-3">
      <div
        className="relative h-60 w-80"
        onMouseEnter={() => setImageHover(true)}
        onMouseLeave={() => setImageHover(false)}
      >
        {imageHover ? (
          <Link href="https://www.youtube.com/watch?v=kgmEAoyYxIk">
            <Image
              src="/images/pasta.png"
              layout="fill"
              objectFit="contain"
              alt="pasta"
            />
          </Link>
        ) : (
          <Image
            src="/images/me.png"
            layout="fill"
            objectFit="contain"
            alt="me"
          />
        )}
      </div>
      <div>
        <div className="text-center">
          <p>
          &quot;Welcome to my website&quot; - Thomas Li
          </p>
          <p>
            High school senior from Maryland interested in Mathematics, Computing, Skateboarding.
          </p>
          { imageHover ? <p>Above: 1 Year Old Me vs Pasta</p> : <></>}
        </div>
      </div>
    </div>
  );
}