import type { Metadata } from 'next';
import './globals.css';
import { Toaster } from '@/components/ui/toaster';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

export const metadata: Metadata = {
  title: 'EcoCollect Dubai',
  description: 'Sustainable e-waste collection and recycling in Dubai.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter&display=swap" rel="stylesheet" />
      </head>
      <body className="font-body antialiased flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow">{children}</main>
        <Footer />
        <div className="bg-gray-900 text-gray-500 text-sm py-4">
            <div className="container mx-auto px-4 flex justify-end items-center">
                <p>Powered by <a href="https://payshia.com" target="_blank" rel="noopener noreferrer" className="hover:text-white">Payshia Software Solution</a></p>
            </div>
        </div>
        <Toaster />
      </body>
    </html>
  );
}
