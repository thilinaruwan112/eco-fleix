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
  title: 'E-Waste Recycling Dubai | IT Asset Disposition | ECO FLEIX',
  description: 'ECO FLEIX offers professional e-waste recycling and IT asset disposition (ITAD) services in Dubai. We provide secure data destruction, electronics recycling, and sustainable e-waste management for businesses and individuals.',
  openGraph: {
    title: 'E-Waste Recycling Dubai | IT Asset Disposition | ECO FLEIX',
    description: 'Secure, certified, and eco-friendly e-waste recycling services in Dubai. We handle everything from data destruction to material recovery.',
    url: 'https://eferecycling.com',
    siteName: 'ECO FLEIX E-Waste Recycling Dubai',
    images: [
      {
        url: 'https://content-provider.payshia.com/eco-fleix/og-image-dubai-seo.png',
        width: 1200,
        height: 630,
        alt: 'E-Waste Recycling Facility in Dubai',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'E-Waste Recycling Dubai | IT Asset Disposition | ECO FLEIX',
    description: 'Your trusted partner for secure and sustainable e-waste management and ITAD in Dubai.',
    images: ['https://content-provider.payshia.com/eco-fleix/og-image-dubai-seo.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  keywords: [
    'e-waste recycling dubai',
    'electronics recycling dubai',
    'it asset disposition dubai',
    'itad dubai',
    'secure data destruction dubai',
    'e-waste management dubai',
    'eco fleix',
    'dubai recycling services',
    'computer recycling dubai',
    'laptop recycling dubai',
  ],
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
            defaultTheme="light"
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
