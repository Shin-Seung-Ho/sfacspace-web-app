'use client';

import Image from 'next/image';
import Link from 'next/link';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '../ui/select';

export default function BottomBar() {
  return (
    <footer className="relative border-t border-white border-opacity-20 bg-[#060606]">
      <Image
        src="/bottom-sfac-logo.svg"
        width={0}
        height={0}
        style={{ width: '100%', height: '100%' }}
        alt="bottom-sfac-logo"
        className=" absolute"
      />
      <section className="relative z-10 mx-auto flex max-w-7xl flex-col gap-6 py-10 max-mobile:pt-16 mobile:py-24">
        <Image
          src="/sfacspace-logo.svg"
          width={100}
          height={50}
          alt="sfacspace-logo"
        />
        <div className="flex flex-col-reverse justify-between max-mobile:gap-10 mobile:flex-row">
          <div className="flex flex-col gap-4 font-preRegular text-BR12 text-white">
            <div className="flex flex-col">
              <div className="flex gap-2 text-[#A4A4A4]">
                <p>(주)스펙스페이스</p>
                <p className="text-white">|</p>
                <p>
                  대표자 <span className="text-white"> 염민호</span>
                </p>
                <p className="text-white">|</p>
                <p className="text-white">450-87-01864</p>
              </div>
              <div className="flex gap-2">
                <p>서울특별시 강서구 마곡중앙2로 11 305호</p>
                <p>|</p>
                <p className=" text-[#A4A4A4]">
                  Tel <span className="text-white"> 02-6217-1119</span>
                </p>
                <p className="max-mobile:hidden">|</p>
                <p className=" text-[#A4A4A4] max-mobile:hidden">
                  Fax <span className="text-white"> 02-6217-1115</span>
                </p>
              </div>
              <div className="flex flex-row gap-2">
                <p className=" text-[#A4A4A4]">
                  Mail <span className="text-white"> admin@sfacspace.com</span>
                </p>
                <p className="mobile:hidden">|</p>
                <p className=" text-[#A4A4A4] mobile:hidden">
                  Fax <span className="text-white"> 02-6217-1115</span>
                </p>
              </div>
            </div>
            <p>2024 스팩스페이스 Co.All rights reserved</p>
          </div>
          <div className="flex flex-row gap-6 text-BR12 text-[#A4A4A4] max-mobile:justify-between mobile:flex-col">
            <div className="flex flex-col">
              <Link href="/map">
                <p>오시는길</p>
              </Link>
              <p>개인정보 처리방침</p>
            </div>
            <Select>
              <SelectTrigger className="w-[180px] border-[#A4A4A4] bg-transparent text-[#A4A4A4]">
                <SelectValue placeholder="패밀리사이트" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="familysite">패밀리사이트</SelectItem>
                <SelectItem value="insideout">
                  인사이드아웃 사회적협동조합
                </SelectItem>
                <SelectItem value="sniperfactory">스나이퍼팩토리</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
      </section>
    </footer>
  );
}
