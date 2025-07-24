import type { Metadata } from 'next';
import './globals.css';
import { Toaster } from '@/components/ui/toaster';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import WhatsappButton from '@/components/layout/WhatsappButton';
import Preloader from '@/components/layout/Preloader';
import { ThemeProvider } from '@/components/layout/ThemeProvider';
import { TranslationProvider } from '@/hooks/use-translation.tsx';

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
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&family=Roboto:wght@400;500;700&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Cairo:wght@400;500;600;700&display=swap" rel="stylesheet" />
      </head>
      <body className="font-body antialiased flex flex-col min-h-screen">
        <TranslationProvider>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <Preloader />
            <Header />
            <main className="flex-grow">{children}</main>
            <Footer />
            <div className="bg-gray-900 text-gray-500 text-sm py-4">
                <div className="container mx-auto px-4 flex justify-center items-center">
                    <p>Powered by <a href="https://payshia.com" target="_blank" rel="noopener noreferrer" className="hover:text-white">Payshia Software Solution</a></p>
                </div>
            </div>
            <WhatsappButton />
            <Toaster />
          </ThemeProvider>
        </TranslationProvider>
      </body>
    </html>
  );
}
