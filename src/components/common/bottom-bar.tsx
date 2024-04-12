'use client';

import Image from 'next/image';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '../ui/select';

export default function BottomBar() {
  return (
    <footer className="border bg-[#060606] bg-opacity-100 bg-sfacspace bg-cover">
      <section className="mx-auto flex max-w-7xl flex-col gap-6 py-24">
        <Image
          src="/sfacspace-logo.svg"
          width={100}
          height={50}
          alt="sfacspace-logo"
        />
        <div className="flex flex-row justify-between">
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
                <p>|</p>
                <p className=" text-[#A4A4A4]">
                  Tel <span className="text-white"> 450-87-01864</span>
                </p>
              </div>
              <p className=" text-[#A4A4A4]">
                Mail <span className="text-white"> admin@sfacspace.com</span>
              </p>
            </div>
            <div>
              <p>개인정보 처리방침</p>
              <p>2024 스팩스페이스 Co.All rights reserved</p>
            </div>
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
      </section>
    </footer>
  );
}
