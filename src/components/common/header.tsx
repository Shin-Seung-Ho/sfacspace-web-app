"use client";

import Image from "next/image";
import MenuItem from "./header-menu";
import {
  companySubMenu,
  servicesSubMenu,
  vouchersSubMenu,
} from "@/app/config/constants";

export default function TopBar() {
  return (
    <header className="sticky top-0 z-30 w-full border-b-2 bg-transparent backdrop-blur-lg max-md:hidden">
      <div className="flex items-center justify-between max-w-6xl mx-auto space-x-6">
        <div className="flex-shrink-0">
          <Image src="/sfacspace-logo.svg" alt="Logo" width={120} height={40} />
        </div>
        <nav className="flex space-x-4">
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
            isBlank={true}
          />
        </nav>
      </div>
    </header>
  );
}
