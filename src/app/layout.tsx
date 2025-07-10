import './globals.css';
import Navbar from '../components/Navbar';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-gray-800">
          <main className="flex-1">
            {children}
          </main>
       </body>
    </html>
  );
}