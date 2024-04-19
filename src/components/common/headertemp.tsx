// 'use client';

// import Link from 'next/link';
// import {
//   AnimatePresence,
//   motion,
//   useMotionValueEvent,
//   useScroll,
// } from 'framer-motion';
// import { useState } from 'react';
// import { usePathname } from 'next/navigation';
// import { AlignRightIcon } from 'lucide-react';
// import Image from 'next/image';
// import { cn } from '@/lib/utils';
// import { Button } from '../ui/button';

// const links = [
//   { href: '/education', label: '교육사업' },
//   { href: '/voucher', label: '바우처사업' },
//   { href: '/business', label: 'IT사업' },
//   { href: '/magazine', label: '매거진' },
// ];

// export default function NavBar() {
//   const pathname = usePathname();
//   const [current, setCurrent] = useState(0);
//   const { scrollY } = useScroll();
//   const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);

//   useMotionValueEvent(scrollY, 'change', (latest) => {
//     setCurrent(latest);
//   });

//   const deviceHeight = typeof window !== 'undefined' ? window.innerHeight : 0;

//   return (
//     <header
//       className={cn(
//         'z-50 w-full duration-500',
//         pathname === '/' ? 'fixed' : 'sticky',
//         current < 8 ? 'top-10' : 'top-0',
//       )}
//     >
//       <nav
//         className={cn(
//           'container flex items-center gap-8 py-4 duration-500',
//           pathname === '/' && current <= deviceHeight ? 'text-white' : '',
//         )}
//       >
//         <Link href="/">
//           <Link href="/">
//             <div className="flex-shrink-0">
//               <Image
//                 src="/sfacspace-logo.svg"
//                 alt="Logo"
//                 width={120}
//                 height={40}
//               />
//             </div>
//           </Link>
//         </Link>
//         <ul className="hidden gap-4 md:flex">
//           {links.map(({ href, label }) => (
//             <li key={`${href}${label}`}>
//               <Link href={href}>
//                 <Button variant="ghost"> {label} </Button>
//               </Link>
//             </li>
//           ))}
//         </ul>
//         <Link
//           href="https://tally.so/r/mVQq5g"
//           className="ml-auto hidden md:flex"
//         >
//           <Button variant="ghost" className="font-bold tracking-tighter">
//             문의
//           </Button>
//         </Link>
//         <AlignRightIcon
//           className={cn(
//             'ml-auto md:hidden',
//             pathname === '/' && current <= deviceHeight ? 'text-white' : '',
//           )}
//           onClick={() => setIsMobileNavOpen(!isMobileNavOpen)}
//         />
//       </nav>
//       <div className={cn('container absolute mx-auto')}>
//         <ul
//           className={cn(
//             'flex justify-center gap-4',
//             isMobileNavOpen ? '' : 'hidden',
//             'gap-4 py-0.5 md:hidden',
//             pathname === '/' && current <= deviceHeight ? 'text-white' : '',
//           )}
//         >
//           <AnimatePresence>
//             {links.map(({ href, label }) => (
//               <motion.li {...variants} key={`${href}${label}`}>
//                 <Link href={href} onClick={() => setIsMobileNavOpen(false)}>
//                   <Button size="sm" variant="ghost">
//                     {' '}
//                     {label}{' '}
//                   </Button>
//                 </Link>
//               </motion.li>
//             ))}
//           </AnimatePresence>
//         </ul>
//       </div>
//     </header>
//   );
// }
