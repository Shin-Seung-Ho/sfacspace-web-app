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
      <p className=" py-1 text-[32px] font-bold">{merit}</p>
      <p className="whitespace-pre-line break-keep pt-7 text-BM20">
        {description}
      </p>
    </div>
  );
}
