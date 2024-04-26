import Image from 'next/image';

interface VoucherIntroProps {
  voucher: string;
  description: string;
  src: string;
}

export default function VoucherIntro({
  voucher,
  description,
  src,
}: VoucherIntroProps) {
  return (
    <div className="mobile:py-32 mobile:px-0 mobile:gap-20 mx-auto flex max-w-7xl flex-col items-center gap-6 px-4 py-20">
      <div className="mobile:flex-row mobile:items-center mobile:gap-0 flex w-full flex-col items-start justify-between gap-6">
        <p className=" mobile:text-HB60 mobile:font-extrabold text-BB24 font-bold">
          {voucher}는 <br /> 무엇일까요?
        </p>
        <p className="mobile:w-1/2 mobile:text-BM20 mobile:whitespace-pre-line w-full whitespace-normal break-keep text-[14px] font-normal text-[#787878]">
          {description}
        </p>
      </div>
      <Image src={src} width={1280} height={0} alt="voucher-introimg" />
    </div>
  );
}
