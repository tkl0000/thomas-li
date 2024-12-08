import Link from 'next/link';

const Sidebar = () => {
  return (
    <div className="h-screen w-64 bg-gray-800 text-white fixed">
      <nav className="flex flex-col p-4">
        <Link href="/">
          <div className="py-2 pl-2 hover:bg-gray-700 rounded">Home</div>
        </Link>
        <Link href="/about">
          <div className="py-2 pl-2 hover:bg-gray-700 rounded">About</div>
        </Link>
        <Link href="/blog">
          <div className="py-2 pl-2 hover:bg-gray-700 rounded">Blog</div>
        </Link>
      </nav>
    </div>
  );
};

export default Sidebar;