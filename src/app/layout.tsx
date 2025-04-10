import clsx from 'clsx';
import type { Metadata, Viewport } from 'next';
import { Inter } from 'next/font/google';
import Providers from './providers';

import './globals.scss';

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
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
