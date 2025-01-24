import Link from 'next/link';

const Navbar = () => {
  return (
    <div className="w-full bg-gray-950 text-white fixed top-0 z-10">
      <nav className="flex items-center justify-center px-4 py-3">
        {/* Navigation Links */}
        <div className="flex space-x-6">
          <Link href="/">
            <div className="border-gray-900 hover:border-slate-50 px-4 py-2 rounded transition duration-300 ease-in-out">
              home
            </div>
          </Link>
          {/* <Link href="/blog">
            <div className="border-gray-900 hover:border-slate-50 px-4 py-2 rounded transition duration-300 ease-in-out">
              blog
            </div>
          </Link> */}
          <Link href="/projects">
            <div className="border-gray-900 hover:border-slate-50 px-4 py-2 rounded transition duration-300 ease-in-out">
              projects
            </div>
          </Link>
          {/* <Link href="/music">
            <div className="border-gray-900 hover:border-slate-50 px-4 py-2 rounded transition duration-300 ease-in-out">
              music
            </div>
          </Link> */}
        </div>
      </nav>
    </div>
  );
};

export default Navbar;