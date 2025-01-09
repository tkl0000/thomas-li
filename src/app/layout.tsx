import './globals.css';
import Navbar from '../components/Navbar';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <div className="flex flex-col">
          <div>
            <Navbar/>
          </div>
          <div>
            <main className="mt-10 p-4 flex-1">{children}</main>
          </div>
        </div>
      </body>
    </html>
  );
}