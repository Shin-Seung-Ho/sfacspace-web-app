'use client';

import Image from 'next/image';
import Link from 'next/link';
import MenuItem from './header-menu';
import {
  companySubMenu,
  servicesSubMenu,
  vouchersSubMenu,
} from '@/app/config/constants';

export default function TopBar() {
  return (
    <header className="sticky top-0 z-30 w-full rounded-b-xl bg-white bg-opacity-30 py-[30px] backdrop-blur-lg transition duration-500 ease-in-out hover:bg-opacity-100 max-md:hidden">
      <div className="mx-auto flex max-w-7xl items-center justify-between space-x-6 py-2">
        <Link href="/">
          <div className="flex-shrink-0">
            <Image
              src="/sfacspace-logo.svg"
              alt="Logo"
              width={120}
              height={40}
            />
          </div>
        </Link>
        <nav className="flex gap-16 space-x-4">
          <MenuItem
            link="/company"
            label="기업정보"
            subMenuItems={companySubMenu}
          />
          <MenuItem
            link="/services"
            label="서비스"
            subMenuItems={servicesSubMenu}
          />
          <MenuItem
            link="/vouchers"
            label="바우처"
            subMenuItems={vouchersSubMenu}
          />
          <MenuItem
            link="https://sniperfactory.notion.site/be9cbf38593c494dba33233032a92a4b?pvs=4"
            label="채용공고"
            isBlank
          />
        </nav>
      </div>
    </header>
  );
}
