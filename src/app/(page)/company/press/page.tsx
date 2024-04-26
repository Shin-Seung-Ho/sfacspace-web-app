/* eslint-disable react/no-array-index-key */
import { pressData } from '@/app/config/constants';
import BannerVideoCard from '@/components/common/banner-video';
import NewsCard from './components/news-card';

export default function Page() {
  return (
    <main className="min-h-screen">
      <BannerVideoCard
        src="/press/press-video.mp4"
        title={`SFACSPACE
        ISSUE`}
        description="성장과 반전을 통해 나아가는 스팩스페이스의 여정에 함께 하세요!"
      />
      <div className="mobile:gap-5 max-mobile:items-center mobile:py-20 mx-auto flex max-w-7xl flex-col gap-5 py-12">
        <p className="mobile:text-HB28 text-BB24">보도자료</p>
        <div className="mobile:grid-cols-3 max-mobile:px-5 grid grid-cols-1 gap-10">
          {pressData.map((e, idx) => (
            <NewsCard
              key={idx}
              src={e.src}
              day={e.day}
              title={e.title}
              content={e.content}
            />
          ))}
        </div>
      </div>
    </main>
  );
}
