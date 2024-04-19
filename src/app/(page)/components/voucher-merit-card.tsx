'use client';

interface VoucherMeritCardProps {
  number: number;
  merit: string;
  description: string;
}

export default function VoucherMeritCard({
  number,
  merit,
  description,
}: VoucherMeritCardProps) {
  return (
    <div className="flex h-[700px] w-1/2 flex-col items-center justify-center text-white">
      <div>
        <p className=" text-HB60 font-extrabold">{number}.</p>
        <p className=" py-2 text-HB48">{merit}</p>
        <p className=" py-10 text-BR16">{description}</p>
      </div>
    </div>
  );
}
