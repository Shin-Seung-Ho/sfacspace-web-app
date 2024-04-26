'use client';

import Link from 'next/link';
import {
  AnimatePresence,
  //   motion,
  useMotionValueEvent,
  useScroll,
} from 'framer-motion';
import { useState } from 'react';
import { usePathname } from 'next/navigation';
import { AlignRightIcon } from 'lucide-react';
import Image from 'next/image';
import { cn } from '@/lib/utils';
import { Button } from '../ui/button';

export const links = [
  {
    href: '/company',
    label: '기업정보',
    subMenuItems: [
      { href: '/company', label: '기업스토리' },
      { href: '/company/history', label: '연혁' },
      { href: '/company/press', label: '뉴스룸' },
    ],
  },
  // {
  //   href: '/services',
  //   label: '서비스',
  //   subMenuItems: [
  //     { href: '/', label: '장전' },
  //     { href: '/', label: '집찍고' },
  //     { href: 'https://sniperfactory.com/', label: '스나이퍼팩토리' },
  //   ],
  // },
  {
    href: '/vouchers',
    label: '바우처',
    subMenuItems: [
      { href: '/vouchers', label: '데이터바우처' },
      { href: '/vouchers/industrial', label: '산업맞춤형 혁신바우처' },
      { href: '/vouchers/ai', label: 'AI바우처' },
      { href: '/vouchers/innovation', label: '혁신바우처' },
      { href: '/vouchers/tourism', label: '관광기업 혁신바우처' },
    ],
  },
  {
    href: 'https://sniperfactory.notion.site/be9cbf38593c494dba33233032a92a4b?pvs=4',
    label: '채용공고',
    subMenuItems: [],
  },
];

export default function NavBar() {
  const pathname = usePathname();
  const [current, setCurrent] = useState(0);
  const { scrollY } = useScroll();
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState(null);
  const [activeSubLabel, setActiveSubLabel] = useState<string | null>(null);
  const [isHovered, setIsHovered] = useState(false);

  useMotionValueEvent(scrollY, 'change', (latest) => {
    setCurrent(latest);
  });

  const handleMenuEnter = (index: any) => {
    setActiveMenu(index);
  };

  const handleMenuLeave = () => {
    setActiveMenu(null);
  };

  const deviceHeight = typeof window !== 'undefined' ? window.innerHeight : 0;

  return (
    <header
      className={cn(
        'z-50 w-full duration-500',
        pathname === '/company' ? 'sticky' : 'fixed',
        current < 8 ? 'top-0' : 'top-0',
        isHovered ? 'bg-white' : '',
      )}
    >
      <nav
        className={cn(
          'container flex items-center gap-8 py-2 duration-500',
          pathname !== '/company' && current <= deviceHeight
            ? 'text-white'
            : '',
        )}
      >
        <Link href="/">
          <div className="flex-shrink-0">
            <Image
              src="/sfacspace-logo.svg"
              alt="Logo"
              width={87}
              height={40}
            />
          </div>
        </Link>
        <ul
          className="hidden w-1/2 md:flex"
          onMouseEnter={() => setIsMobileNavOpen(true)}
          onMouseLeave={() => setIsMobileNavOpen(false)}
        >
          {links.map(({ href, label, subMenuItems }, index) => (
            <li
              key={`${href}${label}`}
              className="relative w-full"
              onMouseEnter={() => handleMenuEnter(index)}
              onMouseLeave={handleMenuLeave}
            >
              <Link
                href={href}
                target={href.startsWith('http') ? '_blank' : ''}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
              >
                <Button
                  variant="custom"
                  className={` w-full ${isHovered && current <= deviceHeight ? 'text-black' : ''}`}
                >
                  {label}
                </Button>
              </Link>
              {activeMenu === index && (
                <div className="absolute left-0 top-full flex w-full flex-col items-center gap-4 py-5 shadow-md group-hover:visible">
                  {subMenuItems?.map(({ href: subHref, label: subLabel }) => (
                    <Link
                      key={`${subHref}${subLabel}`}
                      href={subHref}
                      target={href.startsWith('http') ? '_blank' : ''}
                      className="relative"
                      onMouseEnter={() => setActiveSubLabel(subLabel)}
                      onMouseLeave={() => setActiveSubLabel(null)}
                    >
                      <p className="relative z-50 block">{subLabel}</p>
                      {activeSubLabel === subLabel && (
                        <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-[#47BFEF]" />
                      )}
                    </Link>
                  ))}
                </div>
              )}
            </li>
          ))}
        </ul>
        <div className="ml-auto hidden md:flex">
          <Link
            href="https://tally.so/r/mVQq5g"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <Button
              variant="custom"
              className={` w-full ${isHovered ? 'font-bold tracking-tighter text-black' : ''}`}
            >
              문의
            </Button>
          </Link>
          <Link
            href="/map"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <Button
              variant="custom"
              className={` w-full ${isHovered ? 'font-bold tracking-tighter text-black' : ''}`}
            >
              오시는길
            </Button>
          </Link>
        </div>
        <AlignRightIcon
          className={cn(
            'ml-auto md:hidden',
            pathname === '/' && current <= deviceHeight ? 'text-white' : '',
          )}
          onClick={() => setIsMobileNavOpen(!isMobileNavOpen)}
        />
      </nav>
      <div className={cn('container absolute mx-auto')}>
        <ul
          className={cn(
            'flex justify-center gap-4',
            isMobileNavOpen ? '' : 'hidden',
            'gap-4 py-0.5 md:hidden',
            pathname === '/' && current <= deviceHeight ? 'text-white' : '',
          )}
        >
          <AnimatePresence>
            {/* {links.map(({ href, label }) => (
              <motion.li {...variants} key={`${href}${label}`}>
                <Link href={href} onClick={() => setIsMobileNavOpen(false)}>
                  <Button size="sm" variant="ghost">
                    {' '}
                    {label}{' '}
                  </Button>
                </Link>
              </motion.li>
            ))} */}
          </AnimatePresence>
        </ul>
      </div>
    </header>
  );
}
