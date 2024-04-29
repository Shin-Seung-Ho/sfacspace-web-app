import Image from 'next/image';

interface SolutionCardProps {
  src: string;
  content: string;
  description: string;
}

export default function SolutionCard({
  src,
  content,
  description,
}: SolutionCardProps) {
  return (
    <section className="relative h-[300px] w-full bg-black mobile:h-[700px]">
      <div className="absolute h-[300px] mobile:h-[700px] mobile:w-full">
        <Image
          src={src}
          width={1440}
          height={0}
          alt="card bg"
          className="h-[300px] w-full mobile:h-[700px]"
        />
      </div>
      <div className="absolute w-full py-8 text-white max-mobile:px-5 mobile:py-24">
        <div className="mx-auto flex max-w-7xl flex-col gap-10">
          <p className="whitespace-pre-line break-keep text-BB20 mobile:text-HB48 mobile:font-extrabold">
            {content}
          </p>
          <p className="w-full break-keep text-BR14 text-[#EDEDED] mobile:w-1/2 mobile:text-BM20 mobile:text-[#F7F7F7]">
            {description}
          </p>
        </div>
      </div>
    </section>
  );
}
