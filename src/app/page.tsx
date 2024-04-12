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
    <main className="flex min-h-screen flex-col items-center justify-center">
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

      <section className="bg-mainlineimg1 max-h-screen w-full justify-center bg-white bg-cover">
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

      <section className="bg-mainlineimg2 max-h-screen w-full bg-white bg-cover py-36">
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

      <section>
        <div className="flex max-w-7xl flex-row">
          <Carousel
            opts={{
              align: 'start',
            }}
            className="w-full"
          >
            <CarouselContent>
              {pracImg.map((e, idx) => (
                <CarouselItem
                  className={idx === 0 ? 'basis-1/2' : 'basis-1/4'}
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
