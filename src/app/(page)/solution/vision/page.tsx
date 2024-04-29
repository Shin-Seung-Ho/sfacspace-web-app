import Image from 'next/image';
import ItemCard from '../../company/components/item-card';
import SolutionBanner from '../components/solution-banner';
import SolutionCard from '../components/solution-card';
import SolutionMerit from '../components/solution-merit';
import SolutionSectionFour from '../components/solution-sectionfour';
import { Card } from '@/components/ui/card';

export default function Page() {
  return (
    <main>
      <section className="bg-black">
        <SolutionBanner />
      </section>
      <SolutionCard
        src="/solution/vision-cardbg.png"
        content={`인공지능을 통해
        이미지와 비디오에서
        오브젝트를 인식하고 변형하는 솔루션`}
        description="(주)스팩스페이스는 인공지능을 통해 컴퓨터가 이미지와 비디오에서 객체와 사람 등 오브젝트를 식별하고 파악할 수 있도록 커스터마이즈된 솔루션을 제공합니다."
      />
      <SolutionMerit
        src="/solution/vision-meritbg.png"
        content="Computer Vision을"
        description={`기존의 전통적인 머신 비전은 엔지니어가 코드 및 알고리즘으로 물체 식별, 탐지 및 분류 작업을 수행하기 위해 일련의 규칙을 만들어야합니다.
        
        그러나 알고리즘은 현실 세계의 사물이나 상황을 100% 커버할 수 없기 때문에 결과적으로 머신 비전의 정밀성은 제한되어 있습니다.

        AI 기술이 도입됨에 따라 수많은 이미지 데이터를 분석하여 자체 규칙을 생성 할 수 있고, 이를 통해 AI 모델을 만들 수 있습니다.`}
      />
      <SolutionSectionFour
        description="AI 기술이 도입됨에 따라 수많은 이미지 데이터를 분석하여 
자체 규칙을 생성 할 수 있고, 이를 통해 AI 모델을 만들 수 있습니다."
        content1="U-net 기반의 Image Segmentation network"
        content2="물체 구분을 위한 Wavelet up-down sampling"
        content3="인식률을 높이기 위한 Skipping Technique"
      />
      <section className="mx-auto flex max-w-7xl flex-col gap-8 py-20 mobile:gap-24 mobile:py-52">
        <div className="flex flex-col items-center gap-3">
          <p className="text-BM12 text-[#73B8F7] mobile:text-BM20">
            Computer Vision
          </p>
          <p className=" text-BB20 mobile:text-HB48 mobile:font-bold">
            사용사례
          </p>
        </div>
        <div className="h-px w-full bg-gradient-to-r from-white via-[#73B8F7] to-white opacity-70 mobile:hidden" />
        <div className="max-mobile:hidden">
          <ItemCard
            bgcolor="bg-[#FFA564]"
            bgimg="/company/company-pilo-logo.svg"
            bgimgWidth={800}
            itemimg="/company/company-jjiggo.png"
            itemimgWidth={300}
            itemName="집찍고"
            itemDescription={`프롭테크의 시대,\n 공인중개사의 필수 매물 사진첩`}
            itemContent="집찍고는 AI 기반 객체 인식을 통한 매물사진 편집은 물론,
          간편한 매물 인증과 관리를 할 수 있는 프롭테크의 시대
          공인중개사 필수 매물 사진첩입니다."
          />
        </div>
        <div className="relative mx-5 mobile:hidden">
          <Card className=" relative flex h-[500px] w-full items-center overflow-hidden rounded-2xl bg-[#FFD0B2]">
            <div className="absolute inset-0 w-full overflow-hidden">
              <Image
                src="/solution/solution-jjiggobg.png"
                layout="fill"
                objectFit="cover"
                alt="itemimg"
                className="z-0 h-full w-full opacity-50"
              />
            </div>
            <div className="z-40 flex w-full flex-col items-center">
              <Image
                src="/main-jjiggo-logo.svg"
                width={200}
                height={0}
                alt="bgimg"
              />
              <p className="z-50 whitespace-pre-line break-keep px-6 py-6 text-center text-BM16 text-[#131313]">
                {`집찍고는 AI 기반 객체 인식을 통한
                매물사진 편집은 물론, 간편한 매물 인증과
                관리를 할 수 있는 프롭테크의 시대
                공인중개사 필수 매물 사진첩입니다.`}
              </p>
            </div>
          </Card>
        </div>
      </section>
    </main>
  );
}
