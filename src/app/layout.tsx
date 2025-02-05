import type { Metadata, Viewport } from 'next';
import { Inter } from 'next/font/google';
import './globals.scss';
import clsx from 'clsx';
import HeaderMenu from './components/HeaderMenu/HeaderMenu';
import Providers from './providers';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Rodrigo Suélli | Desenvolvedor Full Stack.',
  description: 'Desenvolvedor Full Stack (React, Nodejs)',
};

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: 'white' },
    { media: '(prefers-color-scheme: dark)', color: 'black' },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    // next-themes lib need `suppressHydrationWarning` to work
    <html suppressHydrationWarning lang="pt-BR">
      <body className={clsx(inter.className)}>
        <Providers>
          <HeaderMenu />
          {children}
        </Providers>
      </body>
    </html>
  );
}
