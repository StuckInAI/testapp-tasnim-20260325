import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Todo App',
  description: 'A full-stack Next.js todo application with SQLite',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-gray-50`}>
        <main className="container mx-auto p-4 max-w-4xl">
          <header className="mb-8">
            <h1 className="text-3xl font-bold text-gray-800">Todo App</h1>
            <p className="text-gray-600">Manage your tasks efficiently</p>
          </header>
          {children}
        </main>
      </body>
    </html>
  );
}
