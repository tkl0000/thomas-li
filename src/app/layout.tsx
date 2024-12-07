import './globals.css';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <header>
          <nav>
            <a href="/">Home</a> | <a href="/blog">Blog</a>
          </nav>
        </header>
        <main>{children}</main>
      </body>
    </html>
  );
}