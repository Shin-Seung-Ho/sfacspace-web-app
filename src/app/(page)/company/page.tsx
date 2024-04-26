// import Image from 'next/image';

import Image from 'next/image';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import BannerVideoCard from '@/components/common/banner-video';
import ItemCard from './components/item-card';

export default function Page() {
  return (
    <main className=" w-full">
      <BannerVideoCard
        src="/company/company-banner-video.mp4"
        title={`AI solutions
        With SFACSPACE!`}
        description={`스팩스페이스는 인공지능 기술과
         데이터 처리를 활용한 독자적인 솔류션을 개발합니다.`}
      />

      <section className=" max-mobile:h-[260px] relative flex items-center justify-center">
        <Image
          src="/company/company-descriptionbg.png"
          width={1100}
          height={0}
          style={{ width: '100%', height: '100%' }}
          alt="bg"
        />
        <p className=" mobile:text-BM24 absolute w-1/2 whitespace-pre-line break-keep text-center text-BM12 text-white">
          (주) 스팩스페이스는
          <br /> NLP, Computer Vision 기반 AI 솔루션 전문기업으로,
          <br className="max-mobile:hidden" /> 인공지능 관련 특허 16건 출원,
          혁신성장유형 벤처인증 취득 등 대외적인 기술력 검증을 통해 22년도
          과기정통부 주관의 AI·DATA 기술 공급기업에 최종 선정되어 사업을
          수행하고 있습니다.
        </p>
      </section>

      <section className="mobile:py-44 min-h-screen py-20">
        <div className="mx-auto flex max-w-7xl flex-col">
          <p className="mobile:text-HB48 mobile:font-extrabold text-center text-BB24 font-bold">
            스팩스페이스의 다양한 <br /> 비전으로
          </p>
          <p className="mobile:text-BM20 py-5 text-center text-BM12">
            스팩스페이스는 더 나은 미래를 위해 오늘도 나아가고 있습니다.
          </p>
          <div className="flex flex-col gap-44 py-12">
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
            <ItemCard
              bgcolor="bg-[#8CC1FF]"
              bgimg="/company/company-sniperfactory-symbol.svg"
              bgimgWidth={300}
              itemimg="/company/company-sniperfactory.png"
              itemimgWidth={500}
              itemName="스나이퍼팩토리"
              itemDescription={`Snipe your dream \n 너의 스펙이 되어줄게`}
              itemContent="교육뿐만 아니라 미래에 대한 취업, 자소서, 포트폴리오 고민까지
            ‘스팩'은 교육생분들과 함께 고민하여 나아가며
            모두가 양질의 교육을 제공받을 수 있는 교육 서비스입니다."
            />
          </div>
        </div>
      </section>

      <section className=" relative flex flex-col justify-center gap-14">
        <div className="mobile:h-[800px] relative h-[400px]">
          <Image
            src="/history/history-bg2.png"
            width={1200}
            height={0}
            style={{ width: '100%', height: '100%' }}
            objectFit="cover"
            alt="spacebg"
          />
        </div>
        <div className="mobile:gap-24 absolute flex w-full flex-col gap-8">
          <div className="mobile:text-HB48 ml-auto flex w-4/5 flex-col text-BB20 text-white">
            <p>우리는 도전을 두려워하지 않습니다</p>
            <div className="flex items-center gap-20">
              <p>우리는 다양한 가능성을 봅니다</p>
              <div className="max-mobile:hidden h-1 flex-grow bg-[#EEF7FB]" />
            </div>
          </div>
          <div className="mobile:gap-24 mx-auto flex max-w-7xl flex-col gap-5">
            <div className="mobile:w-1/2 max-mobile:px-5 max-mobile:mx-5 max-mobile:rounded-xl max-mobile:bg-white max-mobile:bg-opacity-10 max-mobile:backdrop-blur-sm flex text-white">
              <div className=" mobile:gap-20 mobile:flex-row flex w-full flex-col items-center gap-5">
                <Image
                  src="/company/company-etc11.svg"
                  width={130}
                  height={130}
                  alt="etc1"
                />
                <p className=" mobile:text-BM20 whitespace-pre-line break-keep text-BR12">
                  스팩스페이스는 인공지능을 통해 신제품 개발, 이미지 처리,
                  데이터 처리/가공 등 다양한 서비스를 제공하고, 더 나아가
                  고객들에게 필요한 SaaS 솔루션을 제공합니다.
                </p>
              </div>
            </div>
            <div className="mobile:ml-auto mobile:w-1/2 max-mobile:px-5 max-mobile:mx-5 max-mobile:rounded-xl max-mobile:bg-white max-mobile:bg-opacity-10 max-mobile:backdrop-blur-sm flex text-white">
              <div className=" mobile:flex-row mobile:gap-20 flex w-full flex-col items-center gap-5 rounded-l-3xl">
                <Image
                  src="/company/company-etc22.svg"
                  width={130}
                  height={130}
                  alt="etc3"
                />
                <p className=" mobile:text-BM20 text-BR14 whitespace-pre-line break-keep">
                  스팩스페이스는 앞선 인공지능 기술을 통해 사회의 구성원 모두가
                  빅데이터를 보다 쉽고 편하게 활용할 수 있도록 하고 이를
                  바탕으로 사회 혁신을 선도해 나가고자 합니다.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className=" mobile:h-[350px] flex h-[200px] items-center justify-center bg-[#F7F7F7]">
        <div className="relative h-full w-full">
          <Image
            src="/company/company-voucherbg.png"
            width={1400}
            height={0}
            style={{ width: '100%', height: '100%' }}
            alt="companyVoucherbg"
            className="object-cover"
          />
        </div>
        <div className=" max-mobile:px-5 absolute mx-auto flex w-full max-w-7xl flex-col">
          <p className=" mobile:text-BM20 py-1 text-BM12 text-[#47BFEF]">
            Voucher
          </p>
          <p className=" mobile:text-BB24 text-BM12">
            6,000만원 규모 AI 가공 솔루션 지원 사업을
            <br /> 스팩스페이스에서 무료로 이용해보세요!
          </p>
          <Button className=" mobile:text-BB20 my-5 flex w-40 gap-2 rounded-full bg-[#47BFEF] bg-opacity-60 text-BM12 text-black">
            공고문 보기 <ArrowRight />
          </Button>
        </div>
      </section>
    </main>
  );
}
