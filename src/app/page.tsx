import Image from 'next/image';

export default function Home() {
  return (
    <div className="flex flex-col items-center p-3 gap-3">
      <Image 
      src="/images/dog.png"
      width={500}
      height={500} 
      alt="dog"/>
      <p>
        Hey
      </p>
    </div>
  );
}