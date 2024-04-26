/* eslint-disable react/no-array-index-key */
import { voucherMerit2 } from '@/app/config/constants';
import MeritCard from './merit-card';

interface VoucherMeritProps {
  voucher: string;
}

export default function VoucherMerit({ voucher }: VoucherMeritProps) {
  return (
    <section className=" mobile:py-44 bg-[#F7F7F7] py-20">
      <div className="mobile:gap-32 mx-auto flex max-w-7xl flex-col gap-12">
        <div className="mobile:text-HB60 mobile:w-full mobile:font-extrabold mobile:px-0 w-3/4 break-keep px-5 text-BB24 font-bold">
          스팩스페이스의 {voucher}는 <br /> 이런 것들이 있어요
        </div>
        <div className="mobile:flex-row mobile:px-0 flex flex-col gap-3 px-5">
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
