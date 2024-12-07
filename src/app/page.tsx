import Link from 'next/link';

export default function Home() {
  return (
    <div>
      <h1>Welcome to My Portfolio</h1>
      <p>This is my customizable portfolio website!</p>
      <Link href="/blog">
        <h2>Check out my blog</h2>
      </Link>
    </div>
  );
}