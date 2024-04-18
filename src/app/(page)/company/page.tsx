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
        description="스팩스페이스는 인공지능 기술과 데이터 처리를 활용한 독자적인 솔류션을 개발합니다."
      />

      <section className=" relative flex items-center justify-center">
        <Image
          src="/company/company-descriptionbg.png"
          width={1100}
          height={0}
          style={{ width: '100%', height: '100%' }}
          alt="bg"
        />
        <p className=" absolute w-1/2 whitespace-pre-line break-keep text-center text-BM24 text-white">
          (주) 스팩스페이스는
          <br /> NLP, Computer Vision 기반 AI 솔루션 전문기업으로,
          <br /> 인공지능 관련 특허 16건 출원, 혁신성장유형 벤처인증 취득 등
          대외적인 기술력 검증을 통해 22년도 과기정통부 주관의 AI·DATA 기술
          공급기업에 최종 선정되어 사업을 수행하고 있습니다.
        </p>
      </section>

      {/* <section className="min-h-screen">
        <div className="flex h-screen items-center">
          <div className=" relative h-1/2 w-full bg-[#FF8880] ">
            <Image
              src="/company/company-jangjeon-logo.svg"
              width={750}
              height={0}
              alt="jangjeon-logo"
              className=" absolute left-60 z-10 -translate-y-12"
            />
            <Image
              src="/company/company-jangjeon.png"
              width={800}
              height={0}
              alt="jangjeon"
              className="absolute left-48"
            />
            <p className="absolute bottom-36 right-60 text-BB24">
              해외주식 투자자를 위한 AI 기반의 실시간 종목별
              <br /> 글로벌 뉴스 제공 서비스 JANGJEON 앱을 런칭하였으며,
            </p>
          </div>
        </div>
      </section>

      <section className="min-h-screen">
        <div className="flex h-screen flex-col justify-center">
          <div className=" relative h-2/3 w-full bg-[#FFBF97] ">
            <p className=" absolute left-60 top-36 w-1/4 whitespace-pre-line break-keep text-BB24">
              거주 공간 내의 객체를 인식하여 오브젝트를 제거한 매물을 등록할 수
              있는 공인중개사의 필수 사진첩 ‘집찍고’를 서비스 중입니다.
            </p>
            <Image
              src="/company/company-pilo-logo.svg"
              width={700}
              height={0}
              alt="jangjeon-logo"
              className=" absolute right-60 -translate-y-32"
            />
            <div className="absolute bottom-2 right-40 flex">
              <Image
                src="/company/company-pilo1.png"
                width={330}
                height={0}
                alt="pilo1"
              />
              <Image
                src="/company/company-pilo2.png"
                width={330}
                height={0}
                alt="pilo2"
              />
              <Image
                src="/company/company-pilo3.png"
                width={330}
                height={0}
                alt="pilo3"
              />
            </div>
          </div>
        </div>
      </section> */}

      <section className="min-h-screen py-44">
        <div className="mx-auto flex max-w-7xl flex-col">
          <p className="text-center text-HB48 font-extrabold">
            스팩스페이스의 다양한 <br /> 비전으로
          </p>
          <p className="py-5 text-center text-BM20">
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
              bgimgWidth={350}
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

      <section className="flex flex-col gap-14 py-24">
        <div className="ml-auto flex w-4/5 flex-col text-HB48">
          <p>우리는 도전을 두려워하지 않습니다</p>
          <div className="flex items-center">
            <p>우리는 다양한 가능성을 봅니다</p>
            <div className="h-1 flex-grow bg-[#EEF7FB]" />
          </div>
        </div>
        <div className="flex items-center">
          <div className=" h-1 w-1/5 border border-[#EEF7FB] bg-[#EEF7FB]" />
          <div className=" flex w-full items-center gap-20 rounded-l-3xl bg-[#EEF7FB] px-20 py-20">
            <Image
              src="/company/company-etc1.svg"
              width={130}
              height={130}
              alt="etc1"
            />
            <Image
              src="/company/company-etc2.svg"
              width={130}
              height={130}
              alt="etc2"
            />
            <p className="w-1/2 whitespace-pre-line break-keep px-24 text-BM20">
              스팩스페이스는 인공지능을 통해 신제품 개발, 이미지 처리, 데이터
              처리/가공 등 다양한 서비스를 제공하고, 더 나아가 고객들에게 필요한
              SaaS 솔루션을 제공합니다.
            </p>
          </div>
        </div>
        <div className="flex items-center">
          <div className=" h-1 w-3/5 border border-[#EEF7FB] bg-[#EEF7FB]" />
          <div className=" flex w-full items-center gap-20 rounded-l-3xl bg-[#EEF7FB] px-20 py-20">
            <Image
              src="/company/company-etc3.svg"
              width={130}
              height={130}
              alt="etc3"
            />
            <p className=" whitespace-pre-line break-keep px-24 text-BM20">
              스팩스페이스는 앞선 인공지능 기술을 통해 사회의 구성원 모두가
              빅데이터를 보다 쉽고 편하게 활용할 수 있도록 하고 이를 바탕으로
              사회 혁신을 선도해 나가고자 합니다.
            </p>
          </div>
        </div>
      </section>

      <section className=" flex h-[350px] items-center justify-center bg-[#F7F7F7]">
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
        <div className=" absolute mx-auto flex w-full max-w-7xl flex-col">
          <p className=" py-1 text-BM20 text-[#47BFEF]">Voucher</p>
          <p className=" text-BB24">
            6,000만원 규모 AI 가공 솔루션 지원 사업을
            <br /> 스팩스페이스에서 무료로 이용해보세요!
          </p>
          <Button className=" my-5 flex w-40 gap-2 rounded-full bg-[#47BFEF] bg-opacity-60 text-BB20 text-black">
            공고문 보기 <ArrowRight />
          </Button>
        </div>
      </section>
    </main>
  );
}
