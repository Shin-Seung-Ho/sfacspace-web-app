'use client';

import Link from 'next/link';
import { useState } from 'react';
import SubMenu from './header-submenu';

interface MenuItemProps {
  link: string;
  label: string;
  subMenuItems?: any[];
  isBlank?: boolean;
}

export default function MenuItem({
  link,
  label,
  subMenuItems,
  isBlank,
}: MenuItemProps) {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };
  return (
    <div
      className="relative"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {isBlank ? (
        <Link href={link} target="_blank">
          <div className="cursor-pointer text-white hover:text-white">
            {label}
          </div>
        </Link>
      ) : (
        <Link href={link}>
          <div className="cursor-pointer text-white hover:text-white">
            {label}
          </div>
        </Link>
      )}
      {isHovered && <SubMenu subMenuItems={subMenuItems} />}
    </div>
  );
}
