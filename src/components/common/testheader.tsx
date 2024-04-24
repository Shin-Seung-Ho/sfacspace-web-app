/* eslint-disable jsx-a11y/mouse-events-have-key-events */
/* eslint-disable react/no-array-index-key */
/* eslint-disable no-unused-expressions */

'use client';

import Link from 'next/link';
import { useState } from 'react';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { useMotionValueEvent, useScroll } from 'framer-motion';
import { links } from './headertemp';
import { cn } from '@/lib/utils';

export default function Header() {
  const pathname = usePathname();
  const [current, setCurrent] = useState(0);
  const { scrollY } = useScroll();
  const [activeSubLabel, setActiveSubLabel] = useState<string | null>(null);
  const [onNavBar, setOnNavBar] = useState(false);
  const [, setIsHovered] = useState(false);

  useMotionValueEvent(scrollY, 'change', (latest) => {
    setCurrent(latest);
  });

  const [onDrawer, setOnDrawer] = useState(false);

  const toggleDrawer = () => {
    setOnDrawer(!onDrawer);
  };
  const deviceHeight = typeof window !== 'undefined' ? window.innerHeight : 0;

  return (
    <header
      className={cn(
        'z-50 w-full duration-500',
        pathname.includes('/company') ? 'sticky' : 'fixed',
        current < 8 ? 'top-0' : 'top-0',
      )}
      onMouseOver={() => setOnNavBar(true)}
      onMouseOut={() => setOnNavBar(false)}
    >
      <nav
        className={cn(
          'top-0 z-40 flex items-center gap-8 py-2 duration-500 hover:bg-white hover:text-black md:block',
          !pathname.includes('/company') && current <= deviceHeight
            ? 'text-white'
            : 'text-black',
          pathname === '/map' && 'text-white',
        )}
      >
        <div className="mx-auto max-w-7xl">
          <div className="relative flex items-center justify-between">
            <div className="flex items-center justify-center sm:justify-between">
              <div className="flex-shrink-0">
                <Link href="/">
                  <div className="flex items-center">
                    <Image
                      src="/sfacspace-logo.svg"
                      alt="Logo"
                      width={87}
                      height={40}
                    />
                  </div>
                </Link>
              </div>
              <div className="hidden items-center justify-center sm:flex">
                {links.map((tab, index) => (
                  <div className="group" key={index}>
                    <div className="flex items-center justify-center text-center duration-100 hover:border-b-2 hover:border-b-[#47BFEF]">
                      <Link
                        href={tab.href}
                        target={tab.href.startsWith('http') ? '_blank' : ''}
                      >
                        <div className="flex h-16 w-24 items-center justify-center rounded-md font-medium md:w-40">
                          {tab.label}
                        </div>
                      </Link>
                      <div
                        className={`${
                          onNavBar ? 'fixed' : 'hidden'
                        } top-16 flex flex-col items-center gap-3 py-6 text-black`}
                      >
                        {tab.subMenuItems?.map(
                          ({ href: subHref, label: subLabel }) => (
                            <Link
                              key={`${subHref}${subLabel}`}
                              href={subHref}
                              target={
                                subHref.startsWith('http') ? '_blank' : ''
                              }
                              className="relative"
                              onMouseEnter={() => setActiveSubLabel(subLabel)}
                              onMouseLeave={() => setActiveSubLabel(null)}
                            >
                              <p className="relative z-50">{subLabel}</p>
                              {activeSubLabel === subLabel && (
                                <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-[#73B8F7]" />
                              )}
                            </Link>
                          ),
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="ml-auto hidden md:flex">
              <Link
                href="https://tally.so/r/mVQq5g"
                target="blank_"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
              >
                <div className="flex h-16 w-24 items-center justify-center rounded-md font-medium duration-100 hover:border-b-2 hover:border-b-[#47BFEF]">
                  문의
                </div>
              </Link>
              <Link
                href="/map"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
              >
                <div className="flex h-16 w-24 items-center justify-center rounded-md font-medium duration-100 hover:border-b-2 hover:border-b-[#47BFEF]">
                  오시는길
                </div>
              </Link>
            </div>
          </div>
        </div>
        <div
          className={`${
            onNavBar ? 'fixe' : 'hidden'
          } mx-auto h-[200px] w-full max-w-5xl`}
        />
      </nav>
      <nav className="h-26 fixed left-0 top-0 z-50 block p-2 text-white md:hidden">
        <div
          className={`fixed right-0 top-0 flex w-[240px] duration-500${
            !onDrawer ? ' translate-x-[206px]' : ''
          }`}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className=" mr-8 mt-4 h-8 w-8 cursor-pointer"
            onClick={toggleDrawer}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5M12 17.25h8.25"
            />
          </svg>
          <div className="h-screen w-full bg-white text-black">
            <div className="flex h-full w-full flex-col items-center justify-start p-2 shadow-2xl">
              {links.map((tab, index) => (
                <div
                  key={index}
                  className="text-navy  w-full py-4 text-left text-sm font-bold"
                >
                  <Link href={tab.href} className="flex">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      className="mr-2 h-4 w-4"
                    >
                      <path
                        fillRule="evenodd"
                        d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z"
                        clipRule="evenodd"
                      />
                    </svg>
                    {tab.label}
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}
