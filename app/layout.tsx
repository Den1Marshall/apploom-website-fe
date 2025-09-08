import type { Metadata } from 'next';
import './globals.css';
import { HeroUIProvider, ThemeProvider } from '@/app/providers';
import { Header } from '@/widgets/header';

export const metadata: Metadata = {
  title: 'Apploom - White-Label Mobile App Platform',
  description:
    'Transform your business with custom mobile apps. No coding required. Professional mobile solutions for modern businesses.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className='antialiased'>
        <HeroUIProvider>
          <ThemeProvider>
            <Header />

            {children}
          </ThemeProvider>
        </HeroUIProvider>
      </body>
    </html>
  );
}
