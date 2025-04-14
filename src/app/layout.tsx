import './globals.css';
import Navbar from '../components/Navbar';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-sky-950">
          <main className="mt-10 p-4 flex-1">{children}</main>
       </body>
    </html>
  );
}