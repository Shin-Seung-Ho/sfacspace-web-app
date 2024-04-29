import Image from 'next/image';
import { Card } from '@/components/ui/card';
import ItemCard from '../../company/components/item-card';
import SolutionBanner from '../components/solution-banner';
import SolutionCard from '../components/solution-card';
import SolutionMerit from '../components/solution-merit';
import SolutionSectionFour from '../components/solution-sectionfour';

export default function Page() {
  return (
    <main>
      <section className="bg-black">
        <SolutionBanner />
      </section>
      <SolutionCard
        src="/solution/nlp-cardbg.png"
        content={`내용요약, 번역, 감성 분석,
        텍스트 분류 등에서 자주 활용되는 
        자연어 분석 및 처리하는 솔루션`}
        description="(주)스팩스페이스는 인공지능을 통해 우리가 일상생활에서 사용하는 자연ㄴ어를 컴퓨터가 분석하여 처리할 수 있도록 만듭니다. 특히, 내용 요약, 번역, 감성 분석, 텍스트 분류 등에서 활용하고 있습니다."
      />
      <SolutionMerit
        src="/solution/nlp-meritbg.png"
        content="NLP를"
        description={`자연어 처리(NLP)는 컴퓨터가 인간의 언어를 이해, 생성, 조작할 수 있도록 해주는 인공지능의 한 분야입니다. 대부분의 소비자는 자신도 모르는 사이에 NLP와 상호작용을 하고 있습니다.
        
        예를 들어, NLP는 Oracle Digital Assistant(ODA)나 Siri, Cortana, Alexa와 같은 가상 도우미의 핵심 기술입니다. 이러한 가상 도우미에게 질문을 하면 NLP를 통해 사용자의 요청을 이해할 수 있을 뿐만 아니라 자연어로 응답할 수 있습니다.
        
        NLP 기반 툴의 또 다른 예로는 웹 검색, 스팸 메일 필터링, 텍스트 또는 음성 자동 번역, 문서 요약, 감성 분석, 문법/철자 검사 등이 있습니다.`}
      />
      <SolutionSectionFour
        description="NLP 기반 툴은 웹 검색, 스팸 메일 필터링, 텍스트 또는
        음성 자동 번역, 문서 요약, 감성 분석, 문법/철자 검사 등이 있습니다."
        content1="Transformer 기반 NMT 기계번역 솔루션"
        content2="KoBERT 기반 AI 기반 문서 요약 솔루션"
        content3="다중 문서 요약 검증 솔루션"
      />
      <section className="mx-auto flex max-w-7xl flex-col gap-8 py-20 mobile:gap-24 mobile:py-52">
        <div className="flex flex-col items-center gap-3">
          <p className="text-BM12 text-[#73B8F7] mobile:text-BM20">
            Computer Vision
          </p>
          <p className="text-BB20 mobile:text-HB48 mobile:font-bold">
            사용사례
          </p>
        </div>
        <div className="h-px w-full bg-gradient-to-r from-white via-[#73B8F7] to-white opacity-70 mobile:hidden" />
        <div className="max-mobile:hidden">
          <ItemCard
            bgcolor="bg-[#E66060]"
            bgimg="/company/company-jangjeon-logo.svg"
            bgimgWidth={1600}
            itemimg="/company/company-jangjeon-item.png"
            itemimgWidth={500}
            itemName="장전"
            itemDescription={`서학개미 필수 앱! \n 국내최초 실시간 해외뉴스 서비스`}
            itemContent="장전은 실시간 해외주식 관련 정보부터
          인공지능 감성분석까지 하나의 앱에서 이용가능한
          해외주식투자자 맞춤형 플랫폼 입니다."
          />
        </div>
        <div className="relative mx-5 mobile:hidden">
          <Card className=" relative flex h-[500px] w-full items-center overflow-hidden rounded-2xl bg-[#EEABAB]">
            <div className="absolute inset-0 -left-12 w-[415px] overflow-hidden">
              <Image
                src="/company/company-jangjeon-item.png"
                layout="fill"
                objectFit="cover"
                alt="itemimg"
                className="z-0 h-full w-[415px] opacity-50"
              />
            </div>
            <div className="z-40 flex flex-col items-center">
              <Image
                src="/main-jangjeon-logo.svg"
                width={200}
                height={0}
                alt="bgimg"
              />
              <p className="z-50 whitespace-pre-line break-keep px-6 py-6 text-center text-BM16 text-[#131313]">
                장전은 실시간 해외주식 관련 정보부터
                <br /> 인공지능 감성분석까지 하나의 앱에서 이용가능한
                해외주식투자자 맞춤형 플랫폼 입니다.
              </p>
            </div>
          </Card>
        </div>
      </section>
    </main>
  );
}
