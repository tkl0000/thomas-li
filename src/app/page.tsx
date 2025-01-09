"use client";
import Image from 'next/image';
import {useState} from 'react';

export default function Home() {

  const [imageHover, setImageHover] = useState(false);

  return (
    <div className="flex flex-col items-center p-3 gap-3">
      <div
        className="relative h-60 w-80"
        onMouseEnter={() => setImageHover(true)}
        onMouseLeave={() => setImageHover(false)}
      >
        {imageHover ? (
          <Image
            src="/images/dog.png"
            layout="fill"
            objectFit="contain"
            alt="dog"
          />
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
        {imageHover ? (
          <p>
          &quot;Hey&quot; - Sun Tzu
          </p>
        ) : (
          <p>
          &quot;Welcome to my website&quot; - Thomas Li
        </p>
        )}
      </div>
    </div>
  );
}