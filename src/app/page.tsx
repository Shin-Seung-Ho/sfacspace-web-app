import { ArrowRight, ChevronsDown, Mouse } from 'lucide-react';
// import Image from 'next/image';
import Image from 'next/image';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import { pracImg, voucherlogo1, voucherlogo2 } from './config/constants';
import MotionDiv from '@/components/common/motion-div';
import SectionTitle from './(page)/components/section-title';
import { Button } from '@/components/ui/button';
import MainNewsCard from './(page)/components/news-card';
import { SparklesCore } from '@/components/ui/sparkles';
import ParentComponent from './(page)/components/container-slider';
import VoucherMeritBG from './(page)/components/voucher-merit-bg';
import NeonRing from './(page)/components/ring/ring';
import SolutionCard from './(page)/components/solution-card';
import { InfiniteMovingCards } from '@/components/ui/infinite-moving-cards';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-black">
      <section className="relative flex h-screen w-full flex-col items-center justify-center overflow-hidden">
        <SparklesCore
          id="tsparticlesfullpage"
          background="transparent"
          minSize={0.6}
          maxSize={1.4}
          particleDensity={100}
          className="relative h-full w-full"
          particleColor="#FFFFFF"
        />
        <MotionDiv
          whileInView={{ y: 0, opacity: 1 }}
          initial={{ y: -100, opacity: 0 }}
          transition={{ duration: 1, delay: 0 }}
          className=" absolute -translate-y-1/2"
        >
          <NeonRing />
        </MotionDiv>
        <MotionDiv
          whileInView={{ y: 0, opacity: 1 }}
          initial={{ y: 100, opacity: 0 }}
          transition={{ duration: 1, delay: 0 }}
          className=" absolute z-10"
        >
          <h1 className=" text-center text-HB48 text-white">
            {' '}
            기업 향상을 위한 <br /> 독자적인 솔루션 <br /> 오직{' '}
            <span className="text-[#47BFEF]">SFACSPACE</span>에서
          </h1>
        </MotionDiv>
        <div className="absolute bottom-0 flex animate-bounce flex-col items-center pb-16">
          <Mouse color="#b4b4b4" className=" h-10 w-10" />
          <ChevronsDown color="#b4b4b4" />
        </div>
      </section>

      <section className="flex w-full flex-col bg-white py-40">
        <div className="mx-auto flex max-w-7xl flex-col items-center gap-8">
          <MotionDiv
            whileInView={{ y: 0, opacity: 1 }}
            initial={{ y: 30, opacity: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="flex flex-col items-center justify-center"
          >
            <div className="relative flex items-center">
              <div className="absolute -left-16 h-28 w-28 rounded-full bg-[#73B8F7]" />
              <p className=" relative text-HB60"> Innovating Tomorrow</p>
            </div>
          </MotionDiv>
          <p className="text-BR24">
            최신 기술, 바우처 사업으로 더 나은 미래를 꿈꿉니다.
          </p>
          <ParentComponent />
        </div>
      </section>

      <section className="relative w-full overflow-hidden rounded-md bg-black">
        <div className="relative flex h-[700px] items-center justify-center">
          <Image
            src="/history/history-bg.png"
            width={1000}
            height={0}
            style={{ width: '100%', height: '100%' }}
            objectFit="cover"
            alt="spacebg"
          />
          <div className=" absolute mx-auto flex w-full max-w-7xl justify-between">
            <MotionDiv
              whileInView={{ y: 0, opacity: 1 }}
              initial={{ y: 30, opacity: 0 }}
              transition={{ duration: 1, delay: 0.5 }}
              className="flex flex-col items-center"
            >
              <SectionTitle
                title={`계속되는 도전,
              혁신을 향한
              노력의 흔적`}
                textWhite
                descripstion="꿈꾸던 것을 현실로, 바래왔던것을 이루게 합니다."
              />
            </MotionDiv>
            <MotionDiv
              whileInView={{ y: 0, opacity: 1 }}
              initial={{ y: 30, opacity: 0 }}
              transition={{ duration: 1, delay: 0.5 }}
              className="w-1/2"
            >
              <SolutionCard />
            </MotionDiv>
          </div>
        </div>
      </section>

      <section className="max-h-screen w-full bg-white">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-center gap-10 py-28">
          <MotionDiv
            whileInView={{ y: 0, opacity: 1 }}
            initial={{ y: 30, opacity: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            <SectionTitle
              title="Voucher"
              titlefont
              textCenter
              descripstion={`6,000만원 규모 AI 가공 솔루션 지원 사업을
              스팩스페이스에서 무료로 이용해보세요!`}
            />
          </MotionDiv>
          <Button className="flex items-center gap-2 rounded-full bg-[#73B8F7] py-5 text-BM20 text-[#131313]">
            <p>자세히 보러가기</p>
            <ArrowRight color="#131313" />
          </Button>
          <div className="dark:bg-grid-white/[0.05] relative flex flex-col overflow-hidden rounded-md bg-white antialiased dark:bg-black">
            <InfiniteMovingCards
              items={voucherlogo1}
              direction="left"
              speed="normal"
            />
          </div>
          <div className="dark:bg-grid-white/[0.05] relative flex flex-col overflow-hidden rounded-md bg-white antialiased dark:bg-black">
            <InfiniteMovingCards
              items={voucherlogo2}
              direction="right"
              speed="normal"
            />
          </div>
        </div>
      </section>

      {/* 호버 할때 배경변경되는 섹션 */}
      <VoucherMeritBG />

      <section className=" w-full bg-white">
        <div className="mx-auto flex max-w-7xl py-20">
          <MotionDiv
            whileInView={{ y: 0, opacity: 1 }}
            initial={{ y: 30, opacity: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            className=""
          >
            <SectionTitle
              title="Issue"
              descripstion="새로운 스팩스페이스 소식을 확인해보세요."
            />
            <Button className="bg-[#EDEDED] text-[#131313] hover:bg-gray-500">
              뉴스룸 바로가기
            </Button>
          </MotionDiv>
          <Carousel
            opts={{
              align: 'start',
            }}
            className="w-full flex-1"
          >
            <CarouselContent>
              {pracImg.map((e, idx) => (
                <CarouselItem
                  className={idx === 0 ? 'basis-1/3' : 'basis-1/3'}
                  // eslint-disable-next-line react/no-array-index-key
                  key={idx}
                >
                  <MainNewsCard
                    img={e.img}
                    title={e.title}
                    content={e.content}
                  />
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="bg-white" />
            <CarouselNext className="bg-white" />
          </Carousel>
        </div>
      </section>
    </main>
  );
}
