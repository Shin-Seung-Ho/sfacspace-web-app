import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from '@/components/ui/carousel';
import NewsCard from './(page)/components/news-card';
import { pracImg } from './config/constants';
import MotionDiv from '@/components/common/motion-div';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center">
      <MotionDiv
        whileInView={{ y: 0, opacity: 1 }}
        initial={{ y: 30, opacity: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
        className="h-96 w-96 bg-red-500 text-center"
      >
        안녕하세요
      </MotionDiv>
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
                className={idx === 1 ? 'basis-1/2' : 'basis-1/4'}
                // eslint-disable-next-line react/no-array-index-key
                key={idx}
              >
                <NewsCard img={e.img} title={e.title} content={e.content} />
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
    </main>
  );
}
