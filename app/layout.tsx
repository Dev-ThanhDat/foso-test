import Header from '@/components/Header';
import type { Metadata } from 'next';
import { Raleway } from 'next/font/google';
import './globals.css';

const raleway = Raleway({
  variable: '--font-raleway',
  subsets: ['latin']
});

export const metadata: Metadata = {
  title: 'FOSO TEST'
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang='vi'
      className='mdl-js'
    >
      <body className={`${raleway.variable}  antialiased`}>
        <Header />
        {children}
      </body>
    </html>
  );
}
