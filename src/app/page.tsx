import { ArrowRight, ChevronsDown, Mouse } from 'lucide-react';
import Image from 'next/image';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import NewsCard from './(page)/components/news-card';
import { pracImg } from './config/constants';
import MotionDiv from '@/components/common/motion-div';
import SectionTitle from './(page)/components/section-title';
import { Button } from '@/components/ui/button';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-black">
      <section className=" flex h-screen w-full flex-col items-center justify-center ">
        <Image
          src="/main-halfcircle.png"
          width={1200}
          height={600}
          alt="halfcircle"
          className="absolute top-0"
        />
        <h1 className="z-10 text-center text-HB48 text-white">
          {' '}
          기업 향상을 위한 <br /> 독자적인 솔루션 <br /> 오직{' '}
          <span className="text-[#47BFEF]">SFACSPACE</span>에서
        </h1>
        <div className="absolute bottom-0 flex animate-bounce flex-col items-center pb-20">
          <Mouse color="#b4b4b4" className=" h-10 w-10" />
          <ChevronsDown color="#b4b4b4" />
        </div>
      </section>

      <section className="max-h-screen w-full justify-center bg-white bg-mainlineimg1 bg-cover">
        <div className="mx-auto flex max-w-7xl items-center gap-12">
          <MotionDiv
            whileInView={{ y: 0, opacity: 1 }}
            initial={{ y: 30, opacity: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            <SectionTitle
              title="Service"
              descripstion="스팩스페이스가 지금까지 제공한 다양한 서비스를 살펴보세요"
            />
          </MotionDiv>
          <div className="flex w-full justify-between py-44">
            <MotionDiv
              whileInView={{ y: 0, opacity: 1 }}
              initial={{ y: 30, opacity: 0 }}
              transition={{ duration: 1, delay: 1.5 }}
              className="h-96 w-1/4 rounded-lg bg-[#686868] text-center"
            >
              안녕하세요
            </MotionDiv>
            <MotionDiv
              whileInView={{ y: 0, opacity: 1 }}
              initial={{ y: 30, opacity: 0 }}
              transition={{ duration: 1, delay: 1.5 }}
              className="h-96 w-1/4 rounded-lg bg-[#686868] text-center"
            >
              안녕하세요
            </MotionDiv>
            <MotionDiv
              whileInView={{ y: 0, opacity: 1 }}
              initial={{ y: 30, opacity: 0 }}
              transition={{ duration: 1, delay: 1.5 }}
              className="h-96 w-1/4 rounded-lg bg-[#686868] text-center"
            >
              안녕하세요
            </MotionDiv>
          </div>
        </div>
      </section>

      <section className="max-h-screen w-full bg-white bg-mainlineimg2 bg-cover py-36">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-center gap-10">
          <MotionDiv
            whileInView={{ y: 0, opacity: 1 }}
            initial={{ y: 30, opacity: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            <SectionTitle
              title="Voucher"
              textCenter
              descripstion={`6,000만원 규모 AI 가공 솔루션 지원 사업을
              스팩스페이스에서 무료로 이용해보세요!`}
            />
          </MotionDiv>
          <Button className="flex items-center gap-2 rounded-full text-BM20 text-[#47BFEF]">
            <p>공고문 보러가기</p>
            <ArrowRight color="#47BFEF" />
          </Button>
        </div>
      </section>

      <section className="flex min-h-screen w-full">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-center gap-16">
          <MotionDiv
            whileInView={{ y: 0, opacity: 1 }}
            initial={{ y: 30, opacity: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            className=" flex flex-col items-center"
          >
            <SectionTitle title="Solution" textWhite textCenter />
            <div className="flex gap-8 text-BM24 text-white">
              <p>Vision</p>
              <p>NLP</p>
            </div>
          </MotionDiv>
          <MotionDiv
            whileInView={{ y: 0, opacity: 1 }}
            initial={{ y: 30, opacity: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="flex flex-col gap-12"
          >
            <div className="flex flex-col gap-5 text-center text-white">
              <p className=" text-HB80">Computer Vision</p>
              <p className="text-BM20">
                인공지능을 통해 이미지와 비디오에서 오브젝트를 인식하고 변형하는
                솔루션
              </p>
            </div>
            <Button className="mx-auto flex items-center gap-2 rounded-full bg-[#47BFEF] text-BB20">
              <p>자세히 보러가기</p>
              <ArrowRight />
            </Button>
          </MotionDiv>
        </div>
      </section>

      <section className="min-h-screen w-full">
        <div className="mx-auto max-w-7xl py-20">
          <MotionDiv
            whileInView={{ y: 0, opacity: 1 }}
            initial={{ y: 30, opacity: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            <SectionTitle
              title="Issue"
              textWhite
              descripstion="새로운 스팩스페이스 소식을 확인해보세요."
            />
          </MotionDiv>
          <Carousel
            opts={{
              align: 'start',
            }}
            className="w-full"
          >
            <CarouselContent>
              {pracImg.map((e, idx) => (
                <CarouselItem
                  className={idx === 0 ? 'basis-1/3' : 'basis-1/3'}
                  // eslint-disable-next-line react/no-array-index-key
                  key={idx}
                >
                  <NewsCard img={e.img} title={e.title} content={e.content} />
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
