import { ArrowUpRight } from 'lucide-react';
import Link from 'next/link';

/* eslint-disable react/no-array-index-key */
const voucher = [
  {
    voucher: '데이터 혁신바우처',
    content: '6,000만원 규모의 AI 가공 솔루션 지원사업을 무료로 이용해보세요!',
    bg: '/main-vouchercardimg1.png',
    href: `/vouchers`,
  },
  {
    voucher: '산업맞춤형 혁신바우처',
    content:
      '3단계 맞춤형 AI 교육을 통해 AI 이론부터 실무에 적용할 수 있도록 교육을 진행합니다.',
    bg: '/main-vouchercardimg2.png',
    href: `/vouchers/industrial`,
  },
  {
    voucher: 'AI바우처',
    content: '3억원 규모 AI 솔루션 지원 사업을 무료로 이용해보세요!',
    bg: '/main-vouchercardimg3.png',
    href: `/vouchers/ai`,
  },
  {
    voucher: '혁신바우처',
    content:
      '3,000만원 규모 AI 가공 솔루션으로 지원 사업을 무료로 이용해보세요!',
    bg: '/main-vouchercardimg4.png',
    href: `/vouchers/innovation`,
  },
  {
    voucher: '관광기업 혁신바우처',
    content:
      '관광기업 혁신활동 지원으로 업계 체질 개선 및 환경 변화 대응력 강화',
    bg: '/main-vouchercardimg5.png',
    href: `/vouchers/tourism`,
  },
];

export default function VoucherCards() {
  return (
    <div className="grid grid-cols-6 gap-4 py-20">
      {voucher.map((item, index) => (
        <div
          key={index}
          className={`col-span-2 ${index === 3 && 'col-span-3'} ${index === 4 && 'col-span-3'} h-60 rounded-[20px] bg-cover`}
          style={{ backgroundImage: `url(${item.bg})` }}
        >
          <Link href={item.href}>
            <div className="flex h-60 flex-col gap-4 rounded-[20px] bg-black bg-opacity-50 p-10">
              <div className="flex items-center gap-4">
                <h2 className="text-lg font-bold text-white">{item.voucher}</h2>
                <ArrowUpRight className="rounded-full bg-white" />
              </div>
              <p className="w-3/5 whitespace-pre-line break-keep text-white">
                {item.content}
              </p>
            </div>
          </Link>
        </div>
      ))}
    </div>
  );
}
