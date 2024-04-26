import Image from 'next/image';

interface MeritCardProps {
  src: string;
  merit: string;
  description: string;
}

export default function MeritCard({ merit, src, description }: MeritCardProps) {
  return (
    <div className="flex flex-col rounded-[20px] bg-white p-7">
      <Image src={src} width={44} height={0} alt="num" />
      <p className=" mobile:text-[32px] py-1 text-BB16 font-bold">{merit}</p>
      <p className="mobile:text-BM20 whitespace-pre-line break-keep pt-7 text-[14px] font-normal">
        {description}
      </p>
    </div>
  );
}
