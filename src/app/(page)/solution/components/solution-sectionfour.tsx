interface SolutionSectionFourProps {
  description: string;
  content1: string;
  content2: string;
  content3: string;
}

export default function SolutionSectionFour({
  description,
  content1,
  content2,
  content3,
}: SolutionSectionFourProps) {
  return (
    <section className="mx-auto flex max-w-7xl flex-col items-start gap-20 py-16 max-mobile:px-5 mobile:flex-row mobile:items-center mobile:py-48">
      <div className="flex w-full flex-col gap-12 mobile:w-1/2">
        <div className="flex flex-col gap-2">
          <p className=" text-BM12 text-[#73B8F7] mobile:text-BM24">solution</p>
          <p className=" whitespace-pre-line break-keep text-BB20 font-extrabold mobile:text-HB48">
            {`스팩스페이스만의
          독자적인 솔루션으로
          기업의 가치를 향상 시키세요`}
          </p>
        </div>
        <p className="break-keep text-BR12 text-[#5E5E5E] mobile:text-BR20">
          {description}
        </p>
      </div>
      <div className="relative flex w-full flex-col text-center text-BB14 max-mobile:font-bold mobile:w-1/2 mobile:text-BB24">
        <div className="absolute bottom-0 w-full rounded-full bg-[#E5EFF9] bg-opacity-80 py-6 mobile:bottom-6 mobile:py-16">
          <p className="text-[#73B8F7]">{content1}</p>
        </div>
        <div className="absolute -bottom-12 w-full rounded-full bg-[#B7D9F8] bg-opacity-80 py-6 mobile:-bottom-24 mobile:py-16">
          <p className="text-white">{content2}</p>
        </div>
        <div className="absolute top-9 w-full rounded-full bg-[#73B8F7] bg-opacity-80 py-6 mobile:top-16 mobile:py-16">
          <p className="text-white">{content3}</p>
        </div>
      </div>
    </section>
  );
}
