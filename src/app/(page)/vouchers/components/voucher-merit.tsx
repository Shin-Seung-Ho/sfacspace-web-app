/* eslint-disable react/no-array-index-key */
import { voucherMerit2 } from '@/app/config/constants';
import MeritCard from './merit-card';

interface VoucherMeritProps {
  voucher: string;
}

export default function VoucherMerit({ voucher }: VoucherMeritProps) {
  return (
    <section className=" bg-[#F7F7F7] py-44">
      <div className="mx-auto flex max-w-7xl flex-col gap-32">
        <div className="text-HB60 font-extrabold">
          스팩스페이스의 {voucher}는 <br /> 이런 것들이 있어요
        </div>
        <div className="flex gap-3">
          {voucherMerit2.map((e, idx) => (
            <MeritCard
              key={idx}
              src={e.src}
              merit={e.merit}
              description={e.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
