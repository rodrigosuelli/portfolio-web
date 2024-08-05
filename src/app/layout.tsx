import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.scss';
import classNames from 'classnames';
import HeaderMenu from './components/HeaderMenu/HeaderMenu';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Rodrigo Suélli | Desenvolvedor Full Stack.',
  description: 'Desenvolvedor Full Stack (React, Nodejs)',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={classNames(inter.className)}>
        <HeaderMenu />
        {children}
      </body>
    </html>
  );
}
