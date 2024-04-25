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
    <div className="mx-auto flex max-w-7xl flex-col items-center gap-20 py-32">
      <div className=" flex items-center justify-between">
        <p className=" text-HB60 font-extrabold">
          {voucher}는 <br /> 무엇일까요?
        </p>
        <p className=" w-1/2 whitespace-pre-line break-keep text-BM20">
          {description}
        </p>
      </div>
      <Image src={src} width={1280} height={0} alt="voucher-introimg" />
    </div>
  );
}
