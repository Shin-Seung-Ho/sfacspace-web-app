import type { Metadata } from 'next';
import localFont from 'next/font/local';
import './globals.css';
// import TopBar from '@/components/common/header';
import BottomBar from '@/components/common/bottom-bar';
import { cn } from '@/lib/utils';
import NavBar from '@/components/common/headertemp';

const Pretendard = localFont({
  src: '../../public/font/PretendardVariable.woff2',
});

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body
        className={cn(Pretendard.className, 'max-w-screen overflow-x-hidden')}
      >
        {/* <TopBar /> */}
        <NavBar />
        {children}
        <BottomBar />
      </body>
    </html>
  );
}
