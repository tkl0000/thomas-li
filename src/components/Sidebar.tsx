import Link from 'next/link';

const Sidebar = () => {
  return (
    <div className="h-screen w-64 bg-gray-800 text-white fixed">
      <nav className="flex flex-col p-4">
        <Link href="/">
          <div className="py-2 pl-2 hover:bg-gray-700 transition duration-300 ease-in-out rounded">Home</div>
        </Link>
        <Link href="/about">
          <div className="py-2 pl-2 hover:bg-gray-700 transition duration-300 ease-in-out rounded">About</div>
        </Link>
        <Link href="/things">
          <div className="py-2 pl-2 hover:bg-gray-700 transition duration-300 ease-in-out rounded">Things</div>
        </Link>
        <Link href="/blog">
          <div className="py-2 pl-2 hover:bg-gray-700 transition duration-300 ease-in-out rounded">Blog</div>
        </Link>
      </nav>
    </div>
  );
};

export default Sidebar;