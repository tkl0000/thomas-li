import './globals.css';
import Sidebar from '../components/Sidebar';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <div className="flex">
          <Sidebar />
          <main className="ml-64 p-4 flex-1">{children}</main>
        </div>
      </body>
    </html>
  );
}