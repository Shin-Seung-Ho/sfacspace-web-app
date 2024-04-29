import Image from 'next/image';

interface SolutionMeritProps {
  src: string;
  content: string;
  description: string;
}

export default function SolutionMerit({
  src,
  content,
  description,
}: SolutionMeritProps) {
  return (
    <section className=" relative h-[500px] w-full mobile:h-[700px]">
      <div className="relative">
        <Image
          src={src}
          width={1440}
          height={0}
          alt="merit bg"
          className="absolute inset-0 h-[500px] w-full mobile:h-[700px]"
        />
      </div>
      <div className="absolute w-full py-16 text-white max-mobile:px-5 mobile:py-48">
        <div className="mx-auto flex max-w-7xl flex-col gap-16">
          <p className="whitespace-pre-line break-keep text-BB20 text-[#131313] mobile:text-HB48 mobile:font-extrabold">
            왜 {content}
            <br /> 사용해야할까요?
          </p>
          <p className="w-5/6 whitespace-pre-line break-keep text-BR14 text-[#5E5E5E] mobile:text-BM20">
            {description}
          </p>
        </div>
      </div>
    </section>
  );
}
