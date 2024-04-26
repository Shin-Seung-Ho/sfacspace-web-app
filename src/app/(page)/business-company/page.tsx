import Image from 'next/image';
import { Card } from '@/components/ui/card';

const partner = [
  { src: '/partner/partner1.svg' },
  { src: '/partner/partner2.svg' },
  { src: '/partner/partner3.svg' },
  { src: '/partner/partner4.svg' },
  { src: '/partner/partner5.svg' },
  { src: '/voucherlogo/voucher-logo7.svg' },
  { src: '/voucherlogo/voucher-logo5.svg' },
  { src: '/voucherlogo/voucher-logo13.svg' },
  { src: '/voucherlogo/voucher-logo12.svg' },
  { src: '/partner/partner10.svg' },
  { src: '/partner/partner11.svg' },
  { src: '/partner/partner12.svg' },
  { src: '/partner/partner13.svg' },
  { src: '/partner/partner14.svg' },
];

export default function Page() {
  return (
    <main className="pt-16">
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-10 py-16">
        <p className="text-[32px] font-bold">파트너사</p>
        <div className="h-px w-full bg-gradient-to-r from-white via-[#73B8F7] to-white opacity-70" />
        <p className="text-BR20 text-[#131313]">
          스팩스페이스와 함께하는 파트너사 입니다.
        </p>
        <div className=" mobile:grid-cols-4 max-mobile:px-5 grid w-full grid-cols-2 gap-5 py-4">
          {partner.map((e) => (
            <Card className="flex h-[170px] items-center justify-center">
              <div className="max-mobile:w-28">
                <Image
                  src={e.src}
                  width={160}
                  height={0}
                  style={{ width: '100%', height: '100%' }}
                  alt="partner company"
                />
              </div>
            </Card>
          ))}
        </div>
      </div>
    </main>
  );
}
